import defaultImport, * as namedImports from './es5/index';
declare const wrapper: typeof defaultImport & typeof namedImports;
export = wrapper;
