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
