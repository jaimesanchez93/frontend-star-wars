/** @type {import('ts-jest').JestConfigWithTsJest} */

export default {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  globals: {
    "ts-jest": {
      tsConfig: "./tsconfig.json",
      isolatedModules: true,
    },
  },
  roots: ["<rootDir>"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "json", "node"],
};
