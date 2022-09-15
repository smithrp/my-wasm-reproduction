# my-wasm-reproduction

To reproduce the error simply run `ember build --environment=production` from the `test-app`

From there check the dist folder for `.wasm` and see that the link is "correct" in that it takes the publicAssetURL and prepends it to the wasm, but on the following line it takes the publicAssetURL and prepends it to an already prepended (from the fingerprint prepend) url.

## Compatibility

- Ember.js v3.28 or above
- Embroider or ember-auto-import v2

## Installation

```
ember install my-wasm-reproduction
```

## Usage

[Longer description of how to use the addon in apps.]

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.

## License

This project is licensed under the [MIT License](LICENSE.md).
