import { postgresAdapter } from "@payloadcms/db-postgres";
import { buildConfig } from "payload";
import sharp from "sharp";
import { Places } from "./lib/collections/Places";
import { Tags } from "./lib/collections/Tags";

export default buildConfig({
  // Generate TypeScript types
  typescript: {
    // ...
    outputFile: "./payload-types.ts",
  },

  // Define and configure your collections in this array
  collections: [Places, Tags],

  // Your Payload secret - should be a complex and secure string, unguessable
  secret: process.env.PAYLOAD_SECRET || "",
  // Configure the Postgres adapter here
  db: postgresAdapter({
    // Postgres-specific arguments go here.
    // `pool` is required.
    migrationDir: "./lib/migrations/migrate.ts",
    pool: {
      connectionString: process.env.DATABASE_URL,
    },
  }),

  // Configure supported locales and default locale
  localization: {
    locales: ["en", "es", "de"], // required
    defaultLocale: "en", // required
  },
  // If you want to resize images, crop, set focal point, etc.
  // make sure to install it and pass it to the config.
  // This is optional - if you don't need to do these things,
  // you don't need it!
  sharp,
});
