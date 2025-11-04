import React from 'react';
import Spline from '@splinetool/react-spline';
import { Sparkles, Play, ArrowRight } from 'lucide-react';

export default function HeroAnime() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-gradient-to-b from-indigo-950 via-[#0B1020] to-indigo-950 text-white">
      <div className="absolute inset-0">
        {/* 3D Spline scene background */}
        <Spline
          scene="https://prod.spline.design/7n1z0y19wKJm2zV1/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft neon gradient overlay that doesn't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(99,102,241,0.35),_transparent_60%),_radial-gradient(ellipse_at_bottom,_rgba(236,72,153,0.25),_transparent_60%)]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-24 text-center md:pt-28">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur">
          <Sparkles className="h-4 w-4 text-indigo-300" />
          <span className="text-sm text-indigo-200">Belajar seru dengan nuansa anime</span>
        </div>

        <h1 className="font-display text-4xl leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Edukasi Berwarna, Semangat Anime
        </h1>
        <p className="mt-4 max-w-2xl text-base text-indigo-200 sm:text-lg">
          Platform pembelajaran yang menggabungkan desain ala anime dengan kurikulum modern.
          Tingkatkan skill kamu dengan misi, level-up, dan mentor favoritmu.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#courses"
            className="group inline-flex items-center gap-2 rounded-full bg-indigo-500 px-6 py-3 text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-400"
          >
            Mulai Belajar
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <button className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-white backdrop-blur transition hover:bg-white/10">
            <Play className="h-4 w-4" />
            Lihat Cara Kerja
          </button>
        </div>
      </div>

      {/* Decorative bottom blur */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-indigo-950/80 to-transparent" />
    </section>
  );
}
