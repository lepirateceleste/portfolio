import Link from "next/link";
import { mainNav } from "@/data/navigation";
import { siteConfig } from "@/data/site-config";

/**
 * Header — nav sticky. Reprend le PRINCIPE d'une nav numérotée éditoriale
 * (validé en direction artistique) sans copier le composant exact du
 * benchmark. Menu mobile : stub statique en Phase 1, comportement
 * (ouverture/fermeture animée) à implémenter en Phase 2 avec Motion.
 */
export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-[var(--container-max)] items-center justify-between px-6 md:px-10">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-text-primary"
        >
          {siteConfig.name}
          <span className="text-accent">.</span>
        </Link>

        <nav
          aria-label="Navigation principale"
          className="hidden items-center gap-8 md:flex"
        >
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex items-baseline gap-2 text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              <span className="num-mono text-xs text-text-muted group-hover:text-accent">
                {String(item.order).padStart(2, "0")}
              </span>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden rounded-full border border-border px-5 py-2 text-sm font-medium text-text-primary transition-colors hover:border-accent/60 hover:text-accent md:inline-flex"
        >
          Contact
        </Link>

        {/* Menu mobile — stub statique Phase 1, interaction Motion en Phase 2 */}
        <button
          type="button"
          aria-label="Ouvrir le menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-primary md:hidden"
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1.5">
            <span className="h-px w-5 bg-text-primary" />
            <span className="h-px w-5 bg-text-primary" />
          </div>
        </button>
      </div>
    </header>
  );
}
