"use client";
import { useBoundStore } from "@/lib/store/boudstore.store";

import React, { useEffect, useState } from "react";

export default function Results() {
  const searchQuery = useBoundStore((state) => state.searchQuery);
  const [summary, setSumamary] = useState("");

  console.log(summary);
  const options = {
    sharedContext:
      "This is a platform for turistic places in Boquete, Chiriquí. It is undertood that all turist atractions are located in Boquete, Chiriquí, Panama.",
    type: "headline",
    format: "plain-text",
    length: "short",
    outputLanguage: "en",
    expectedContextLanguages: ["en"],
  };

  useEffect(() => {
    async function fetchSummary() {
      const summarizer = await Summarizer.create(options);

      // Simulate an API call to summarize the search query
      const summarized = await summarizer.summarize(searchQuery, {
        context:
          "This is a platform for turistic places in Boquete, Chiriquí. It is undertood that all turist atractions are located in Boquete, Chiriquí, Panama.",
      });
      setSumamary(summarized);
    }
    if (searchQuery) {
      fetchSummary();
    }
  }, [searchQuery]);

  return (
    <div className="px-6 py-4 w-full">
      <span className="">Results for:</span>
      <h2 className="text-4xl w-full font-bold">{summary}</h2>
    </div>
  );
}
