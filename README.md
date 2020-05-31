# multiline-ts

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
const string = [
  'Multiline string\n',
  '  with varying\n',
  '    indentation',
].join('');
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
const string = [
  'Indented value:\n',
  '  1\n',
  '  2\n',
  '  3',
].join('');
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
const string = [
  '\n',
  '  Here is\n',
  'Another string\n',
  '    For you\n',
  '\n',
].join('');
```

### TODO:

- Tab/mixed indent support
- Relative offset
- Function support
