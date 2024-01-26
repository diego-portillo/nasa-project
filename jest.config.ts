import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": ['ts-jest', {
      compilerOptions: {
        module: "commonjs",
        esModuleInterop: true
      }
    }],
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
}

export default config;
