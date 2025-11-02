import { revalidatePath } from "next/cache";
import { CollectionConfig } from "payload";
import { revalidateISR } from "./hook";

export const Places: CollectionConfig = {
  // 'slug' is the identifier in Payload's API and admin UI
  slug: "places",

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
    // name: varchar("place_name", { length: 255 }).notNull()
    {
      name: "name",
      type: "text",
      required: true,
      maxLength: 255,
    },

    // description: varchar("place_description", { length: 1024 })
    {
      name: "description",
      type: "textarea", // Provides a multi-line input in the admin UI
      maxLength: 1024,
      localized: true,
    },

    // slug: varchar("place_slug", { length: 1024 })
    {
      name: "slug",
      type: "text", // Provides a text input in the admin UI
      required: true,
      unique: true,
    },

    // address: varchar("place_address", { length: 512 })
    {
      name: "address",
      type: "text",
      maxLength: 512,
      localized: true,
    },

    // img_url: varchar("place_img_url", { length: 1024 })
    {
      name: "imageUrl", // camelCase is a common Payload naming convention
      label: "Image URL",
      type: "text",
      maxLength: 1024,
    },
    // alt_img: varchar("place_alt_img", { length: 1024 })
    {
      name: "altImg", // camelCase is a common Payload naming convention
      label: "Alt Image",
      type: "text",
      maxLength: 1024,
      localized: true,
    },

    // latitude: numeric({ mode: "number" }).notNull()
    {
      name: "latitude",
      type: "number",
      required: true,
      //
    },

    // longitude: numeric({ mode: "number" }).notNull()
    {
      name: "longitude",
      type: "number",
      required: true,
      //
    },

    {
      name: "tags", // required
      type: "relationship", // required
      relationTo: "tags", // required
      hasMany: true,
    },
  ],
  hooks: {
    afterChange: [(args) => revalidatePath(`/${args.doc.slug}`)],
  },
};
