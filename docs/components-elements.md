# Forms: Components: Elements

See [Components](components.md) for more information about Element definitions.


## Elements and Form Variations

See [Definition Structure](definition-structure.md) for more information on
Variations.

Unless specified, a non-`default` Variation will inherit the complete set of
Elements from `default`, maintaining the same order.

On a per-Variation basis, you may reduce the default-defined Elements to a
Variation-specific subset. In non-`default` Variations, the `_elements` Array
should contain the `name` Strings of the desired Elements.

Specify your desired Element order in a non-`default` Variation by changing the
order of the `name` Strings.

For example:

```json
{
  "default": {
    "name": "my-form",
    "_elements": [
      {
        "default": {
          "name": "element-1"
        }
      },
      {
        "default": {
          "name": "element-2"
        }
      },
      {
        "default": {
          "name": "element-3"
        }
      }
    ]
  },
  "add": {
    "label": "My Form",
    "_elements": [
      "element-2",
      "element-1"
    ]
  }
}
```

In this example, the `add` Variation explicitly lists just 2 of the 3 Elements.
Further, the Elements' order is different for this Variation.
