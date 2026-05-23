import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-xl border border-white/20 bg-white/80 p-6 shadow-lg backdrop-blur dark:bg-zinc-900/70",
        className
      )}
      {...props}
    />
  );
}
