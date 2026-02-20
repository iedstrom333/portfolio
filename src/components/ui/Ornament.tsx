import { cn } from "@/lib/utils";

interface OrnamentProps {
  className?: string;
  symbol?: string;
}

export function Ornament({ className, symbol = "◆" }: OrnamentProps) {
  return (
    <div className={cn("flex items-center gap-3 my-8", className)}>
      <div className="flex-1 h-px bg-rose-light" />
      <span
        className="text-rose text-xs"
        style={{ fontFamily: "var(--font-cormorant)" }}
        aria-hidden="true"
      >
        {symbol}
      </span>
      <div className="flex-1 h-px bg-rose-light" />
    </div>
  );
}
