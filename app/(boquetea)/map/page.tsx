import { MapContainer } from "@/components/MapContainer";
import Results from "@/components/Results";
import ListingCard from "@/components/ui/ListingCard";
import ListingSort from "@/components/ui/ListingSort";
import ListingTotal from "@/components/ui/ListingTotal";
import SearchBar from "@/components/ui/SearchBar";
import { getPlaces } from "@/lib/queries";

async function MapPage() {
  const limit = 3;

  const { docs, totalDocs } = await getPlaces(limit);
  const places = docs;

  return (
    <div>
      {/* Heading Content */}
      <Results />

      <div className="h-px w-full border-t-px "></div>

      {/* Main Content */}
      <div className="flex flex-row min-w-5xl gap-6 relative">
        <div></div>
        {/* Listing & filter */}
        <div className="grow w-full max-w-2xl">
          <div className="flex flex-col w-full mb-4 gap-6">
            {/* Search & sorting */}
            <div className="sticky top-0 flex flex-col gap-6 bg-background z-10 py-4">
              {/* Searchbar */}
              <SearchBar />

              {/* Sort and Total */}
              <div className="flex flex-row justify-between w-full">
                <ListingTotal total={totalDocs} />
                {/* <ListingSort /> */}
              </div>
            </div>

            {/* Listing */}
            <div className="grid grid-cols-2 gap-4">
              {places.map((place) => (
                <ListingCard key={place.id} place={place} />
              ))}
            </div>
            <div></div>
          </div>
        </div>
        {/* Map */}
        <div className="grow h-dvh sticky top-0">
          <MapContainer />
        </div>
      </div>
      {/* Ads */}
      {/* Blog Articles */}
    </div>
  );
}

export default MapPage;
