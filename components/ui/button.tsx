import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost" | "outline";
};

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition",
        variant === "primary" &&
          "bg-primary text-primary-foreground hover:opacity-90 disabled:opacity-50",
        variant === "ghost" && "hover:bg-muted",
        variant === "outline" && "border border-border hover:bg-muted",
        className
      )}
      {...props}
    />
  );
}
