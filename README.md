# multiline-ts [![npm version][npm-badge]][npm-url] [![build status][circle-badge]][circle-url] [![coverage status][coverage-badge]][coverage-url]

Readable multi-line template strings for Javascript or Typescript.

multiline is a template tag function which removes leading indentation from a string, and the first/last newline, to allow it to be more readable in code.

multiline also applies this to strings and arrays of strings in template variables.

## Installation

```bash
npm install multiline-ts
```
or
```bash
yarn add multiline-ts
```

## Usage

```js
import multiline from 'multiline-ts';

const string = multiline`
  Multiline string
    with varying
      indentation
`;
```

Is equivalent to:

```js
const string = `Multiline string
  with varying
    indentation`;
```

Which creates the string:

```
Multiline string
  with varying
    indentation
```

### With template variables

```js
import multiline from 'multiline-ts';

const value = '1\n2\n3';

const string = multiline`
  Indented value:
    ${value}
`;
```

Is equivalent to:

```js
const string = `Indented value:
  1
  2
  3`;
```

### With with extra newlines

Extra newlines are respected:

```js
import multiline from 'multiline-ts';

const string = multiline`

    Here is
  Another string
      For you

`;
```

Is equivalent to:

```js
const string = `
  Here is
Another string
    For you
`;
```

### TODO:

- Relative offset
- Function support


[npm-badge]: https://badge.fury.io/js/multiline-ts.svg
[npm-url]: https://www.npmjs.com/package/multiline-ts

[circle-badge]: https://circleci.com/gh/peterjwest/multiline-ts.svg?style=shield
[circle-url]: https://circleci.com/gh/peterjwest/multiline-ts

[coverage-badge]: https://coveralls.io/repos/peterjwest/multiline-ts/badge.svg?branch=master&service=github
[coverage-url]: https://coveralls.io/github/peterjwest/multiline-ts?branch=master
