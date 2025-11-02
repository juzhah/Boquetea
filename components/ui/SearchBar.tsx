"use client";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Mic, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { InputGroup, InputGroupAddon, InputGroupTextarea } from "./input-group";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { Button } from "./button";

import { useBoundStore } from "@/lib/store/boudstore.store";

export default function SearchBar() {
  const searchQuery = useBoundStore((state) => state.searchQuery);
  const setSearchQuery = useBoundStore((state) => state.setSearchQuery);
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser does not support speech recognition.</span>;
  }

  const [filters, setFilters] = useState<string[]>([]);

  useEffect(() => {
    if (!listening && transcript) {
      setSearchQuery(transcript);
      resetTranscript();
    }
  }, [listening, transcript, resetTranscript]);

  return (
    <InputGroup className="bg-card">
      <InputGroupTextarea
        placeholder="Ask or Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <InputGroupAddon align="block-end">
        <div className="flex gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger className="rounded-full border-2 p-1">
              <Plus size={16} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Preferences</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem
                onCheckedChange={() =>
                  setFilters((prev) => [...prev, "Pet Friendly"])
                }
              >
                Pet Friendly
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                onCheckedChange={() =>
                  setFilters((prev) => [...prev, "Easy Access"])
                }
              >
                Easy Access
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                onCheckedChange={() =>
                  setFilters((prev) => [...prev, "Family Friendly"])
                }
              >
                Family Friendly
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {filters.map((filter) => (
            <span key={filter}>{filter}</span>
          ))}
          <Button onClick={SpeechRecognition.startListening}>
            <Mic size={24} />
          </Button>
        </div>
      </InputGroupAddon>
    </InputGroup>
  );
}
