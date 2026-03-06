import type { Config } from "drizzle-kit"
import { config } from "dotenv"
import { resolve, dirname } from "path"
import { fileURLToPath } from "url"

config({ path: resolve(dirname(fileURLToPath(import.meta.url)), "../../.env") })

export default {
  schema: "./schema.ts",
  out: "../../drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!
  }
} satisfies Config