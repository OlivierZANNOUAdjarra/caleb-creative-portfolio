import Image from 'next/image';
import { Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink px-6 py-14 dark:bg-[#0F1416] sm:px-10">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(circle at 50% 0%, black, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(circle at 50% 0%, black, transparent 75%)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-aurora-gradient opacity-40"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <div className="flex items-center gap-3">
          <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-[9px]">
            <Image src="/logo.png" alt="Caleb Creative" fill sizes="36px" className="object-cover" />
          </div>
          <div className="leading-tight">
            <p className="font-display text-sm font-bold text-white">Caleb Creative</p>
            <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-white/50">
              Là où l&apos;imagination devient réalité
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://facebook.com/profile.php?id=61580115693070"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-electric hover:text-electric"
          >
            <Facebook className="h-4 w-4" />
          </a>
          <a
            href="https://tiktok.com/@calebagk"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 font-mono text-[11px] font-semibold text-white/70 transition-colors hover:border-electric hover:text-electric"
          >
            TT
          </a>
        </div>

        <p className="font-mono text-[11px] text-white/40">
          © 2026 Caleb Creative — Abomey, Bénin
        </p>
      </div>
    </footer>
  );
}