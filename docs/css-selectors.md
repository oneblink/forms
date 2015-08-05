# Forms: CSS Selectors

We frown upon using the DOM and / or CSS to achieve anything that our pure data
APIs already allow. That said, there are use cases that require manipulating DOM
elements and / or styles, so we provide the following selectors...


## Forms / Records

- `[data-form=NAME]` where "NAME" is the unique name of the form definition

- `[data-record-id=ID]` where "ID" is the value of the "id" element, if any

- `[data-record-index=NUM]` where "NUM" is the Array index of the sub-form
  within the "forms" Collection found in its parent sub-form element

    - just for sub-forms, not for the top-most parent form

    ```js
    var subFormEl = BMP.Forms.current.getElement('comments');
    var third = BMP.Forms.current.getElement('comments').get('forms').at(2);
    var third.get('_view').$el.attr('data-record-index'); // -> returns "2"
    ```

The ID and index selectors above will be most useful when combined with
`[data-form=NAME]`, otherwise you may get the wrong result.


## Elements / Fields / Headings / etc

- `[data-name=NAME]` where "NAME" is the unique name in the definition

- `[data-element-type=TYPE]` where "TYPE" is the type from the definition

## Error classes

### Dirty and Pristine

Dirty and Pristine classes are used to indicate when the user has interacted with a form. When a form is loaded it is pristine. Once a user interacts with an element in a form both the element and the form are marked as dirty. 

The following classes are used to mark forms and elements:

- `.bm-form-dirty`
- `.bm-form-pristine`
- `.bm-formelement-dirty`
- `.bm-formelement-pristine`

You can also set the `isPristine` or `isDirty` attribute of the form/element model manually using `model.set({ isPristine: true|false})` or `model.set({ isDirty: true|false})`, which will add or remove the relative classes.

### Invalid Fields

When a field fails validation the container for the input is marked as invalid with

- `.bm-formelement-invalid`

This allows for styling of the entire element by targeting children of the invalid selector.

The Form will also be marked as invalid if any of the fields trigger the invalid event.

- `.bm-form-invalid`

This class is automatically removed when the form model is checked for errors via `#getInvalidElements`, but not when fields are made valid. This is due to the possible performance hit of verifying every field on large forms. One possible way of enabling it is to add it to every elements value change event

    BMP.Forms.current.on('change:value', function () {
      BMP.Forms.current.getInvalidElements(); 
    });

You can also set the `isInvalid` attribute of the form/element model manually using `model.set({isInvalid: true|false})`, which will add or remove the class.