import { Place } from "@/payload-types";
import config from "@payload-config";
import { getPayload } from "payload";

const payload = await getPayload({ config });

const getPlaces = async (limit: number = 10, page: number = 1) => {
  const data = await payload.find({
    collection: "places",
    limit: limit,
    page: page,
  });

  return data;
};

// --- Helper function to fetch a single place by its slug ---
async function getPlaceBySlug(slug: string): Promise<Place | null> {
  const { docs } = await payload.find({
    collection: "places",
    where: {
      slug: {
        equals: slug,
      },
    },
    limit: 1, // We only expect one document
  });

  return docs[0] || null;
}

export { getPlaces, getPlaceBySlug };
