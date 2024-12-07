import { pathsToModuleNameMapper, JestConfigWithTsJest } from "ts-jest"

const config: JestConfigWithTsJest = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    prefix: "<rootDir>/",
    "^@mijn-ui/(.*)/(.*)$": "node_modules/@mijn-ui/$1/src/$2",
    "^@mijn-ui/(.*)$": "node_modules/@mijn-ui/$1/src",
  },
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleDirectories: ["node_modules", "<rootDir>"],
  testMatch: ["<rootDir>/**/*.test.(ts|tsx)"],
}

export default config
