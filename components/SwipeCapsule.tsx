export default function SwipeCapsule() {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="w-24 h-49 rounded-full bg-[var(--color-primary-100)] relative overflow-hidden">
        <div className="absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-[var(--color-primary-500)] animate-swipe-up-loop" />
      </div>
    </div>
  );
}
