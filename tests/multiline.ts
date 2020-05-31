import * as assert from 'assert';
import multiline from '../src/multiline';

describe('utils/multiline', () => {
  it('Returns a string indented correctly without leading/trailing newline', (() => {
    const expectedString = [
      'foo',
      '  bar',
      '    zim',
    ].join('\n');

    assert.strictEqual(multiline`
      foo
        bar
          zim
    `, expectedString);
  }));

  it('Returns a string without adjusting indentation', (() => {
    const expectedString = [
      'foo',
      '  bar',
      '    zim',
    ].join('\n');

    assert.strictEqual(multiline`
foo
  bar
    zim
`, expectedString);
  }));

  it('Returns a string with extra trailing newlines', (() => {
    const expectedString = [
      'foo',
      '  bar',
      '    zim',
      '',
      '',
    ].join('\n');

    assert.strictEqual(multiline`
      foo
        bar
          zim


    `, expectedString);
  }));

  it('Returns a string with extra leading newlines', (() => {
    const expectedString = [
      '',
      'foo',
      '  bar',
      '    zim',
      '',
      '',
    ].join('\n');

    assert.strictEqual(multiline`

      foo
        bar
          zim


    `, expectedString);
  }));

  it('Returns a string with placeholders indented correctly', (() => {
    const expectedString = [
      'foo',
      '  zim',
      '  bar',
      '    zig',
    ].join('\n');

    const zim = 'zim';
    const zig = 'zig';
    assert.strictEqual(multiline`
      foo
        ${zim}
        bar
          ${zig}
    `, expectedString);
  }));

  it('Returns a string with multiline placeholders indented correctly', (() => {
    const expectedString = [
      'foo',
      '  zim',
      '  zip',
      '  zig',
    ].join('\n');

    const list = ['zim', 'zip', 'zig'].join('\n');
    assert.strictEqual(multiline`
      foo
        ${list}
    `, expectedString);
  }));

  it('Returns a string with consecutive placeholders indented correctly', (() => {
    const expectedString = [
      'foo',
      '  zim: zig',
    ].join('\n');

    const zim = 'zim';
    const zig = 'zig';
    assert.strictEqual(multiline`
      foo
        ${zim}: ${zig}
    `, expectedString);
  }));
});
