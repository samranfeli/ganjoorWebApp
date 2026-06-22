export const queryKeys = {
  allPoets: ["all-poets"] as const,
  search: (term: string, poetId: number) => ["search", term, poetId],
  random: ["random"]
};
