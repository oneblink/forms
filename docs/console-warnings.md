# Console Warnings

## Conditional Logic uses a hidden Element: <elementName>

This warning means that in the forms builder you have defined an element in a subform as hidden, however the form that is displaying the subform has marked the field as 'H'.

For example, say you have the following form, `Streets`

    Field Name   | Field Type
    -------------+-----------
    Name         | TextElement
    StreetType   | Select
    Suburb       | Select


And you have another form, `PostalRoute`, which uses `Streets` as a sub form:

    Field Name   | Field Type
    -------------+-----------
    RouteName    | TextElement
    PostPerson   | Select
    StreetsField | Subform (Displays the `Streets` form, defined above)

FormsBuilder gives you the ability to edit the `StreetsField` field in `PostalRoute` and modify the definition of the `Streets` form to remove fields when the `Streets` Form is displayed as a Subform of `PostalRoute` (the 'H' column). This removal only happens in the `PostalRoute` form and does not affect other forms that use `Streets`. If you mark a field as removed, then any conditional logic on the sub form that references this field will receive `undefined` as the value. This usually means that the form design and interactions of the conditional logic is over complicated and should be re-worked into something easier to work with and debug, so the console warning `Conditional Logic uses a hidden Element: <elementName>` is emitted.

## Cordova Camera cannot be found

This means that forms is unable to detect the Cordova Camera
