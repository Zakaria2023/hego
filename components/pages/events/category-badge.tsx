import { categoryMeta, type Post } from "@/app/events/data";

const CategoryBadge = ({ category }: { category: Post["category"] }) => {
  const meta = categoryMeta[category];
  return (
    <span
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide border"
      style={{
        color: meta.color,
        backgroundColor: meta.bg,
        borderColor: meta.border,
      }}
    >
      <span
        className="w-1.5 h-1.5 rounded-full shrink-0"
        style={{ backgroundColor: meta.color }}
        aria-hidden="true"
      />
      {meta.label}
    </span>
  );
};

export default CategoryBadge;
