export const createSearchSlice = (set) => ({
  searchQuery: "",
  setSearchQuery: (query: string) => set({ searchQuery: query }),
  summarizedQuery: "",
  setSummarizedQuery: (summary: string) => set({ summarizedQuery: summary }),
});
