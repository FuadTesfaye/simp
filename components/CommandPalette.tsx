"use client";

import { useEffect, useState, useMemo } from "react";
import { portfolioData } from "@/data/portfolioData";
import { Search, X, ArrowRight, Copy, Check, ExternalLink } from "lucide-react";

interface CommandItem {
  id: string;
  title: string;
  category: "Navigation" | "Projects" | "Social & Contact" | "Actions";
  description?: string;
  action: () => void;
  shortcut?: string;
  external?: boolean;
}

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [copiedText, setCopiedText] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    const handleOpenCommand = () => setIsOpen(true);

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("open-command-palette", handleOpenCommand);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("open-command-palette", handleOpenCommand);
    };
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopiedText("Email copied!");
    setTimeout(() => {
      setCopiedText(null);
      setIsOpen(false);
    }, 1200);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(portfolioData.personal.phone);
    setCopiedText("Phone copied!");
    setTimeout(() => {
      setCopiedText(null);
      setIsOpen(false);
    }, 1200);
  };

  const commands: CommandItem[] = useMemo(() => {
    const list: CommandItem[] = [
      {
        id: "nav-activity",
        title: "01 Activity (GitHub Heatmap)",
        category: "Navigation",
        description: "2,679 contributions in the last year",
        action: () => {
          document.getElementById("activity")?.scrollIntoView({ behavior: "smooth" });
          setIsOpen(false);
        },
      },
      {
        id: "nav-about",
        title: "02 About Fuad Tesfaye",
        category: "Navigation",
        description: "Background, mission-critical systems, bio",
        action: () => {
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
          setIsOpen(false);
        },
      },
      {
        id: "nav-skills",
        title: "03 Stack & Skills",
        category: "Navigation",
        description: "Frontend, Backend, Tools & Cloud, AI Integration",
        action: () => {
          document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
          setIsOpen(false);
        },
      },
      {
        id: "nav-experience",
        title: "04 Experience",
        category: "Navigation",
        description: "Zion, INSA, Fusion IT Consultancy",
        action: () => {
          document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
          setIsOpen(false);
        },
      },
      {
        id: "nav-education",
        title: "05 Education",
        category: "Navigation",
        description: "Ethiopian Public Service University, INSA Camp",
        action: () => {
          document.getElementById("education")?.scrollIntoView({ behavior: "smooth" });
          setIsOpen(false);
        },
      },
      {
        id: "nav-projects",
        title: "06 Projects Catalog",
        category: "Navigation",
        description: "20 production systems, AI & web platforms",
        action: () => {
          document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
          setIsOpen(false);
        },
      },
      {
        id: "action-email",
        title: "Copy Email",
        category: "Actions",
        description: portfolioData.personal.email,
        action: copyEmail,
      },
      {
        id: "action-phone",
        title: "Copy Phone Number",
        category: "Actions",
        description: portfolioData.personal.phone,
        action: copyPhone,
      },
      {
        id: "social-github",
        title: "Open GitHub Profile",
        category: "Social & Contact",
        description: "github.com/FuadTesfaye",
        external: true,
        action: () => {
          window.open(portfolioData.personal.githubUrl, "_blank");
          setIsOpen(false);
        },
      },
      {
        id: "social-linkedin",
        title: "Open LinkedIn Profile",
        category: "Social & Contact",
        description: "linkedin.com/in/fuad-tesfaye",
        external: true,
        action: () => {
          window.open(portfolioData.personal.linkedinUrl, "_blank");
          setIsOpen(false);
        },
      },
      {
        id: "social-x",
        title: "Open X / Twitter",
        category: "Social & Contact",
        description: "x.com/FuadTesfaye",
        external: true,
        action: () => {
          window.open(portfolioData.personal.twitterUrl, "_blank");
          setIsOpen(false);
        },
      },
    ];

    // Add projects to search
    portfolioData.projects.forEach((p) => {
      list.push({
        id: `proj-${p.id}`,
        title: `${p.number} ${p.title}`,
        category: "Projects",
        description: `${p.category} · ${p.year} — ${p.badge || p.summary.slice(0, 50)}`,
        action: () => {
          document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
          setIsOpen(false);
        },
      });
    });

    return list;
  }, []);

  const filteredCommands = useMemo(() => {
    if (!query.trim()) return commands;
    const q = query.toLowerCase();
    return commands.filter(
      (c) =>
        c.title.toLowerCase().includes(q) ||
        (c.description && c.description.toLowerCase().includes(q)) ||
        c.category.toLowerCase().includes(q)
    );
  }, [commands, query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/75 backdrop-blur-md animate-fade-in">
      <div
        className="w-full max-w-xl bg-[#090d16] border border-white/15 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Search Input */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10 bg-black/30">
          <Search className="w-4 h-4 text-white/50 shrink-0" />
          <input
            autoFocus
            type="text"
            placeholder="Search commands, sections, or projects..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm text-white placeholder-white/40 focus:outline-none font-mono"
          />
          {copiedText ? (
            <span className="flex items-center gap-1 text-xs text-lime-400 font-mono">
              <Check className="w-3.5 h-3.5" /> {copiedText}
            </span>
          ) : (
            <kbd className="hidden sm:inline-block text-[11px] font-mono text-white/40 border border-white/10 px-1.5 py-0.5 rounded">
              ESC
            </kbd>
          )}
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 hover:text-white text-white/40 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Command List */}
        <div className="overflow-y-auto divide-y divide-white/5 p-2 space-y-1">
          {filteredCommands.length === 0 ? (
            <div className="py-8 text-center text-xs font-mono text-white/40">
              No matching commands or projects found.
            </div>
          ) : (
            filteredCommands.map((item) => (
              <button
                key={item.id}
                onClick={item.action}
                className="w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg text-left hover:bg-white/5 transition-colors group cursor-pointer"
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-white group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-1.5 py-0.2 rounded bg-white/5 text-white/40 border border-white/5">
                      {item.category}
                    </span>
                  </div>
                  {item.description && (
                    <p className="text-[11px] text-white/50 truncate font-mono mt-0.5">
                      {item.description}
                    </p>
                  )}
                </div>
                <div className="shrink-0 text-white/30 group-hover:text-white transition-colors">
                  {item.external ? (
                    <ExternalLink className="w-3.5 h-3.5" />
                  ) : item.category === "Actions" ? (
                    <Copy className="w-3.5 h-3.5" />
                  ) : (
                    <ArrowRight className="w-3.5 h-3.5" />
                  )}
                </div>
              </button>
            ))
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2 border-t border-white/10 bg-black/40 flex items-center justify-between text-[11px] font-mono text-white/40">
          <span>Navigate with ⌘K</span>
          <span>Fuad Tesfaye · Addis Ababa</span>
        </div>
      </div>
    </div>
  );
}
