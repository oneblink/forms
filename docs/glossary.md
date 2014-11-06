# Forms: Glossary

For more information about how we arrange these components, see our
[Object Graph](object-graph.md) document.


## Form

This is the root of the definition structure, being the container for Elements,
Sections, and Pages.


## Element

Generally, this is the smallest component of a Form, either:
- interactive: e.g. text fields, number fields; or
- non-interactive: e.g. headings, messages


## Section

This is a special Element that provides a way to group other Elements together
for layout and other purposes.

Sections may contain Elements, and they may also contain other Sections.
Caution: avoid defining circular references.


## Page

This is a special Section. Forms must have at least one Page, which is
automatically provided if your definition lacks one.

The default behaviour forces one Page to be visible at any time.

Pages may contain Elements and Sections, but not other Pages.


## Record

This is data captured according to a Form's definition. Records should have an
identifier that is unique across all Records sharing the same Form definition.


## SubForm, SubForm Element, and SubRecord

For more information on these components, see our
[Object Graph with SubForms](object-graph-sub-form.md) document.
