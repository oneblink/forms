# Forms: Settings

Store your desired settings as property->value pairs within the appropriate
Variation's section.

See [Definition Structure](definition-structure.md) for more information on
Variations.


## Reserved Property Names, Dangling Underscores

Certain properties have special meaning for code that consumes your definition.
We prefix these properties with underscores so that they do not clash with
current or future settings. As such, avoid prefixing properties with
underscores.

See [Components](components.md) for more information about reserved properties.


## Flattening the Definition

Consumers of a definition will frequently have no need for the complete set of
available Variations. Rather, they ask for a specific Variation and discard the
others.

Use the `flattenDefinition(definitionObject, variationName)` API provided here
for this purpose.

### `flattenDefinition`

- @param {Object} definitionObject a data structure including Variations, etc
- @param {String} [variationName] (optional)
- @returns {Object} a new data structure with Variation-free Settings

If a consumer does not specify a `variationName`, then this function discards
all Settings except for those within the `default` Variation. This will also be
the case when the specified Variation is unavailable.

Otherwise, the function combines Settings from both the `default` Variation and
the specified Variation into a uniform data structure.


### Variation Precedence

If both Variations (`default` and desired) define the same Setting, then the
value of the Setting from the non-`default` Variation will take precedence.

Empty String values are the exception to this rule. In this case, the value from
the `default` Variation would take precedence. If you wish to "unset" the
`default` value, then you should use a String that is entirely white-space, e.g.
 `" "`.
