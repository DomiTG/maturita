import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border/80 bg-background p-6 shadow-[0_1px_0_rgba(0,0,0,0.04),0_8px_30px_rgba(0,0,0,0.04)]",
        className
      )}
      {...props}
    />
  );
}
