import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: [...configDefaults.include, 'tests/*.{js,cjs,ts}'],
    coverage: {
      provider: 'v8',
      include: [
        'src/**',
      ],
      reporter: [
        'text',
        'text-summary',
        'lcov',
      ],
      extension: [
        '.ts',
      ],
      all: true,
      perFile: true,
      branches: 80,
      lines: 80,
      functions: 80,
      statements: 80,
    },
  },
});
