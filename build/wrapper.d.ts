import defaultImport, * as namedImports from './code/index';
declare const wrapper: typeof defaultImport & typeof namedImports;
export = wrapper;
