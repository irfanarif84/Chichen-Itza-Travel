import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface TOCProps {
  items: { id: string; title: string }[];
  title?: string;
  titleEs?: string;
  isEs?: boolean;
}

export default function TableOfContents({
  items,
  title = "In this guide",
  titleEs = "En esta guía",
  isEs = false,
}: TOCProps) {
  const [open, setOpen] = useState(false);
  const label = isEs ? titleEs : title;

  return (
    <nav className="mb-8 bg-card border border-border rounded-xl p-6">
      <p
        className="font-heading font-semibold text-base flex items-center justify-between cursor-pointer lg:cursor-default select-none"
        onClick={() => setOpen((o) => !o)}
      >
        {label}
        <ChevronDown
          className={`lg:hidden h-4 w-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </p>
      <div
        className={`overflow-hidden transition-all duration-300 max-h-0 lg:max-h-[1000px] ${open ? "max-h-[1000px]" : ""}`}
      >
        <ol className="space-y-2 list-none mt-4">
          {items.map((item, i) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById(item.id)
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                <span className="text-xs font-mono text-primary/60 group-hover:text-primary w-5 text-right shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {item.title}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
