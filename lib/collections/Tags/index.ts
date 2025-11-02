import { CollectionConfig } from "payload";

export const Tags: CollectionConfig = {
  // 'slug' is the identifier in Payload's API and admin UI
  slug: "tags",

  // Optional: If you want the database table name to be 'place' (singular)
  //

  admin: {
    useAsTitle: "name", // Uses the 'name' field as the title in the admin list
  },

  // This one property automatically handles:
  // created_at: timestamp().defaultNow().notNull()
  // updated_at: timestamp().defaultNow().notNull()
  timestamps: true,

  fields: [
    // name: varchar("tag_name", { length: 255 }).notNull()
    {
      name: "name",
      type: "text",
      required: true,
      maxLength: 255,
      localized: true,
    },
  ],
};
