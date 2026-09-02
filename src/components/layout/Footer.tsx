import Link from "next/link";
import { footerNav } from "@/data/navigation";
import { contactChannels, siteConfig } from "@/data/site-config";

/**
 * Footer — reprend le PRINCIPE d'un footer riche avec liens rapides et
 * contact, sans reproduire le traitement exact du benchmark (logo géant en
 * fond notamment — volontairement omis ou à réinterpréter différemment en
 * Phase 2, voir direction artistique §L).
 */
export function Footer() {
  const primaryContacts = contactChannels.filter(
    (c) => c.priority === "primary"
  );
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-bg">
      <div className="mx-auto max-w-[var(--container-max)] px-6 py-16 md:px-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="text-lg font-bold text-text-primary">
              {siteConfig.name}
              <span className="text-accent">.</span>
            </p>
            <p className="mt-2 max-w-xs text-sm text-text-secondary">
              {siteConfig.title}
            </p>
          </div>

          <div>
            <p className="eyebrow mb-4">Navigation</p>
            <ul className="space-y-2">
              {footerNav.quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4">Contact</p>
            <ul className="space-y-2">
              {primaryContacts.map((channel) => (
                <li key={channel.id}>
                  <a
                    href={channel.href}
                    className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                  >
                    {channel.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border/60 pt-6 text-xs text-text-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {siteConfig.name}. Tous droits réservés.
          </p>
          <div className="flex gap-4">
            {footerNav.legal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-text-secondary"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
