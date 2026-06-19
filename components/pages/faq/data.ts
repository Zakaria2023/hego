export const buildFaqHeroStats = (
  totalQuestions: number,
  totalCategories: number,
) => [
  { value: String(totalQuestions), label: "Questions answered" },
  { value: String(totalCategories), label: "Categories" },
  { value: "12+", label: "Years of expertise" },
  { value: "10+", label: "Countries served" },
];
