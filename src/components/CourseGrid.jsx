import React from 'react';
import { BookOpen, Star, ArrowRight } from 'lucide-react';

const courses = [
  {
    title: 'Dasar Ilustrasi Anime',
    level: 'Pemula',
    rating: 4.8,
    color: 'from-pink-500/20 to-pink-400/10',
    accent: 'bg-pink-500',
    image:
      'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Storyboarding & Sinematografi',
    level: 'Menengah',
    rating: 4.7,
    color: 'from-indigo-500/20 to-indigo-400/10',
    accent: 'bg-indigo-500',
    image:
      'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Animasi 2D untuk Web',
    level: 'Menengah',
    rating: 4.9,
    color: 'from-violet-500/20 to-violet-400/10',
    accent: 'bg-violet-500',
    image:
      'https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function CourseGrid() {
  return (
    <section id="courses" className="relative bg-[#0B1020] py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">Kelas Populer</h2>
            <p className="mt-2 text-sm text-indigo-200">
              Pilihan kurikulum yang dirancang untuk leveling cepat ala RPG.
            </p>
          </div>
          <a href="#" className="hidden text-sm text-indigo-300 hover:text-indigo-200 sm:inline-flex">
            Lihat semua
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((c, i) => (
            <article
              key={i}
              className={`group overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b ${c.color} backdrop-blur`}
            >
              <div className="relative h-40 w-full overflow-hidden">
                <img
                  src={c.image}
                  alt={c.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-black/40 px-3 py-1 text-xs backdrop-blur">
                  <BookOpen className="h-3.5 w-3.5" />
                  {c.level}
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-medium">{c.title}</h3>
                <div className="mt-2 flex items-center gap-1 text-yellow-300">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="text-sm text-indigo-200">{c.rating} • 3k+ siswa</span>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className={`h-2 w-20 rounded-full ${c.accent}`} />
                  <button className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm hover:bg-white/10">
                    Detail
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
