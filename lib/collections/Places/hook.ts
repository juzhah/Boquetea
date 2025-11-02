import { revalidatePath } from "next/cache";
import type { CollectionAfterChangeHook } from "payload";

const revalidateISR: CollectionAfterChangeHook = async ({ doc }) => {
  revalidatePath(`/${doc.slug}`);
};

export { revalidateISR };
