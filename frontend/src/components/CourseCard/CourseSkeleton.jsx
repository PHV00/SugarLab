export default function CourseSkeleton() {
  return (
    <div className="rounded-2xl border border-white/10 overflow-hidden animate-pulse">
      <div className="aspect-[16/9] bg-white/10" />
      <div className="p-4 space-y-2">
        <div className="h-4 bg-white/10 rounded w-2/3" />
        <div className="h-3 bg-white/10 rounded w-full" />
        <div className="h-3 bg-white/10 rounded w-5/6" />
        <div className="mt-2 h-4 bg-white/10 rounded w-1/3" />
      </div>
    </div>
  );
}
