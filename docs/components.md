# Forms: Components

Forms include the following components:

- Elements, Sections, and Pages for Form structure
- Behaviours, Checks and Actions for Form behaviour

## Component Arrays

For consistency and brevity, define all components within the Default section
of the Form definition. Group them in Arrays as follows:

```json
{
  "default": {
    "_elements": [],
    "_sections": [],
    "_pages": [],
    "_behaviours": [],
    "_checks": [],
    "_actions": []
  }
}
```

Do not define Component Arrays in any Variation other than `default`. Elements
are the exception to this rule.

See [Elements](components-elements.md) for specific information on how
Elements and Variations interact.


## Component Definitions

The definition for each individual component mirrors the structure of the root
Form definition itself. That is, each component's definition starts with
Variations.

See [Definition Structure](definition-structure.md) for more information on
Variations.

For example:

```json
{
  "default": {
    "_elements": [
      {
        "default": {
          "name": "my-element"
        },
        "add": {
          "label": "My Element"
        }
      }
    ],
  }
}
```
