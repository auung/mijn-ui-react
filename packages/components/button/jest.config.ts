import { JestConfigWithTsJest } from "ts-jest"
import baseConfig from "jest-config"

const config: JestConfigWithTsJest = {
  ...baseConfig,
}

export default config
