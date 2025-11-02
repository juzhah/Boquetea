import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getPlaceBySlug, getPlaces } from "@/lib/queries";
import { Place } from "@/payload-types";

import { Bookmark, Share2 } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.

export async function generateStaticParams() {
  try {
    const data = await getPlaces();
    const places = data.docs || [];

    return places.map((place: Place) => ({
      slug: place.slug,
    }));
  } catch (error) {
    console.error("❌ Error generating static params:", error);
    return []; // Return an empty array on error
  }
}

export default async function PlacePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const place = await getPlaceBySlug(slug);

  // If no place is found, render a 404 page
  if (!place) {
    return notFound();
  }

  return (
    <div>
      <>
        {/* Main Hero Image */}
        <div className="relative h-[65vh] min-h-[500px] bg-black">
          <div className="absolute inset-0">
            <Image
              src={place.imageUrl || "/placeholder.svg"}
              alt={place.name}
              fill
              className="object-cover opacity-90"
              priority
            />
            <div className="absolute inset-0  from-black/60 via-black/20 to-transparent" />
          </div>

          {/* Action Buttons */}
          <div className="absolute top-6 right-6 flex gap-2">
            <Button
              variant="secondary"
              size="icon"
              className="rounded-full bg-white/90 hover:bg-white shadow-lg"
            >
              <Share2 className="h-5 w-5" />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              className="rounded-full bg-white/90 hover:bg-white shadow-lg"
            >
              <Bookmark className="h-5 w-5" />
            </Button>
          </div>

          {/* Hero Content */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="container mx-auto max-w-6xl">
              <div className="flex gap-2 flex-wrap mb-4">
                <Badge
                  key={1}
                  variant="secondary"
                  className="bg-white/90 text-foreground text-sm px-3 py-1"
                >
                  tag
                </Badge>
                {/* {place.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="bg-white/90 text-foreground text-sm px-3 py-1"
                  >
                    {tag}
                  </Badge>
                ))} */}
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 text-balance drop-shadow-lg">
                {place.name}
              </h1>

              <div className="flex items-center gap-6 flex-wrap text-white">
                <div className="flex items-center gap-2">
                  {/* <span className="text-3xl font-bold">{place.rating}</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`h-6 w-6 ${
                          i < Math.floor(place.rating)
                            ? "fill-primary text-primary"
                            : "fill-white/40 text-white/40"
                        }`}
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-lg">({place.reviewCount} reviews)</span> */}
                </div>

                <div className="h-6 w-px bg-white/40" />

                {/* <span className="text-lg font-medium">{place.ranking}</span> */}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border-b">
          <div className="container mx-auto max-w-6xl px-6 py-8">
            <h2 className="text-2xl font-bold mb-6">Photo Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* {place.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-[4/3] rounded-lg overflow-hidden transition-all hover:scale-105 ${
                    selectedImage === index
                      ? "ring-4 ring-primary"
                      : "hover:ring-2 hover:ring-primary/50"
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                  {selectedImage === index && (
                    <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                      <div className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                        Current
                      </div>
                    </div>
                  )}
                </button>
              ))} */}
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
