# multiline-ts [![npm version][npm-badge]][npm-url] [![build status][circle-badge]][circle-url] [![coverage status][coverage-badge]][coverage-url]

Readable multi-line template strings for Javascript or Typescript.

multiline is a template tag function which removes leading indentation from each line of a string, and the first/last newline, to allow it to be more readable in code.

multiline also indents multi-line strings in template variables.

## Installation

```bash
npm install multiline-ts
```

## Usage

<!-- snippet: ts,js -->
```js
import multiline from 'multiline-ts';

const string = multiline`
  Multiline string
    with varying
      indentation
`;
```

Is equivalent to:

<!-- snippet: ts,js -->
```js
const string = `Multiline string
  with varying
    indentation`;
```

Which creates the string:

```plaintext
Multiline string
  with varying
    indentation
```

### In indented code

<!-- snippet: ts,js -->
```js
import multiline from 'multiline-ts';
const condition1 = true;
const condition2 = true;

if (condition1) {
  if (condition2) {
    const string = multiline`
      Multiline string
        with varying
          indentation
    `;
  }
}
```

Creates the same string:

```plaintext
Multiline string
  with varying
    indentation
```

### With template variables

<!-- snippet: ts,js -->
```js
import multiline from 'multiline-ts';

const value = '1\n2\n3';

const string = multiline`
  Indented value:
    ${value}
`;
```

Creates the string:

```plaintext
Indented value:
  1
  2
  3
```

### With with extra newlines

Extra newlines are respected:

<!-- snippet: ts,js -->
```js
import multiline from 'multiline-ts';

const string = multiline`

    Here is
  Another string
      For you

`;
```

Creates the string:

```plaintext

  Here is
Another string
    For you

```

### With CommonJS / require()

If you want to use this with CommonJS imports use the following syntax:

<!-- snippet: cjs -->
```js
const multiline = require('multiline-ts');
const string = multiline(`
  Multiline string
    with varying
      indentation
`);
```

### As a function

You can also call multiline as a normal function, however this will not be able to intelligently indent multi-line template variables.

<!-- snippet: ts,js -->
```js
import multiline from 'multiline-ts';

const string = multiline(`
  Multiline string
    with varying
      indentation
`);
```

Creates the string:

```plaintext
Multiline string
  with varying
    indentation
```

[npm-badge]: https://badge.fury.io/js/multiline-ts.svg
[npm-url]: https://www.npmjs.com/package/multiline-ts

[circle-badge]: https://circleci.com/gh/peterjwest/multiline-ts.svg?style=shield
[circle-url]: https://circleci.com/gh/peterjwest/multiline-ts

[coverage-badge]: https://coveralls.io/repos/peterjwest/multiline-ts/badge.svg?branch=main&service=github
[coverage-url]: https://coveralls.io/github/peterjwest/multiline-ts?branch=main
