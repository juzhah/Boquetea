import React from "react";
import Image from "next/image";
import { Heart } from "lucide-react";
import Link from "next/link";
import { Place } from "@/payload-types";

export default function ListingCard({ place }: { place: Place }) {
  return (
    <div className="relative rounded-lg border border-border overflow-clip hover:shadow-md transition-shadow ">
      <div className="absolute top-0 right-0 p-2 rounded-full z-10 bg-accent-foreground/70 m-2 hover:text-red-400 hover:bg-red-50 hover:cursor-pointer transition">
        <Heart size={14} className="" />
      </div>
      <div className="relative w-full h-52">
        <Link href={`/${place.slug}`}>
          <Image
            src={place.imageUrl || "/placeholder.svg"}
            alt={place.name}
            fill
            sizes="322px"
            style={{
              objectFit: "cover",
            }}
          />
        </Link>
      </div>
      <div className="p-4">
        <div>{place.name}</div>
      </div>
    </div>
  );
}
