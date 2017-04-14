# ng-annotations

> Extract metadata of Angular components, directives, service etc.

[![Travis CI](https://img.shields.io/travis/gund/ng-annotations/master.svg?maxAge=2592000)](https://travis-ci.org/gund/ng-annotations)
[![Coverage](https://img.shields.io/codecov/c/github/gund/ng-annotations.svg?maxAge=2592000)](https://codecov.io/gh/gund/ng-annotations)
[![Npm](https://img.shields.io/npm/v/@gund/ng-annotations.svg?maxAge=2592000)](https://badge.fury.io/js/@gund/ng-annotations)
[![Npm Downloads](https://img.shields.io/npm/dt/@gund/ng-annotations.svg?maxAge=2592000)](https://www.npmjs.com/package/@gund/ng-annotations)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

## Installation

```bash
$ npm install --save @gund/ng-annotations
```

## Usage

Import `Annotations` class first:
```ts
import { Annotations } from 'ng-annotations';
```

Then get annotations for you component:
```ts
@Component({selector: 'some-component'})
class MyComponent {
  constructor() {
    const annotations = Annotations.getFor(MyComponent);
    // annotations.selector here will be `some-component`
  }
}
```

## Documentation

**Annotations**
```ts
class Annotations {
  static getFor(type: Type<any>): AllDecorators;
  static getForDirective(type: Type<any>): Directive;
  static getForComponent(type: Type<any>): Component;
  static getForPipe(type: Type<any>): Pipe;
}
```

<sub>See [src/annotations.ts](./src/annotations.ts) for full reference</sub>

_Description_: Class with static methods to get annotations from type.

**getFor()**
```ts
static getFor(type: Type<any>): AllDecorators;
```

_Description_: Get annotations for the type.
It will return all annotations found. If you want more specific type use methods below.

**getForDirective()**
```ts
static getForDirective(type: Type<any>): Directive;
```

_Description_: Get annotations for directive.
Calls getFor() but returns type specific for Directive.

**getForComponent()**
```ts
static getForComponent(type: Type<any>): Component;
```

_Description_: Get annotations for component.
Calls getFor() but returns type specific for Component.

**getForPipe()**
```ts
static getForPipe(type: Type<any>): Pipe;
```

_Description_: Get annotations for pipe.
Calls getFor() but returns type specific for Pipe.

## Development

To generate all `*.js`, `*.js.map`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

To run unit tests:

```bash
$ npm test
```

## License

MIT © [Alex Malkevich](malkevich.alex@gmail.com)
