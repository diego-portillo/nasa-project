import type {Config} from 'jest';

const config: Config = {
  verbose: true,
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  globals: {
    "ts-jest": {
      compilerOptions: {
        module: "commonjs",
        esModuleInterop: true
      }
    }
  }
};

export default config;