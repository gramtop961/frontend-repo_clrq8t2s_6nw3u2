import React from 'react';
import { Users } from 'lucide-react';

const mentors = [
  {
    name: 'Aiko Tanaka',
    role: 'Character Designer',
    avatar:
      'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop',
    bio: 'Spesialis desain karakter dengan 8+ tahun pengalaman di studio anime.'
  },
  {
    name: 'Ren Nakamura',
    role: 'Storyboard Artist',
    avatar:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop',
    bio: 'Ahli visual storytelling dan sinematografi, fokus pada ritme adegan.'
  },
  {
    name: 'Mika Sato',
    role: '2D Animator',
    avatar:
      'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=800&auto=format&fit=crop',
    bio: 'Animator 2D lintas platform, mengajar teknik animasi responsif untuk web.'
  }
];

export default function InstructorSpotlight() {
  return (
    <section className="relative bg-gradient-to-b from-[#0B1020] to-indigo-950 py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500/20">
            <Users className="h-5 w-5 text-indigo-300" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">Mentor Favorit</h2>
            <p className="text-sm text-indigo-200">Belajar dari praktisi yang aktif di industri kreatif.</p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mentors.map((m, i) => (
            <div key={i} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
              <div className="relative h-48 w-full overflow-hidden">
                <img src={m.avatar} alt={m.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-medium">{m.name}</h3>
                <p className="text-sm text-indigo-200">{m.role}</p>
                <p className="mt-3 text-sm text-indigo-200/90">{m.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
