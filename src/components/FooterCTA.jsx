import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function FooterCTA() {
  return (
    <footer className="relative overflow-hidden bg-[#060A16] py-16 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(79,70,229,0.2),_transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-600/20 to-pink-500/10 p-8 text-center backdrop-blur sm:p-12">
          <h3 className="text-2xl font-semibold sm:text-3xl">Siap Naik Level?</h3>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-indigo-200">
            Bergabung sekarang dan nikmati akses ke kelas, misi harian, dan komunitas kreator berjiwa anime.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-indigo-700 shadow-lg transition hover:bg-indigo-50"
            >
              Daftar Gratis
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#" className="text-sm text-indigo-200 hover:text-white">Masuk akun</a>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-xs text-indigo-300 sm:flex-row">
          <p>© {new Date().getFullYear()} EduAnime. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Kebijakan Privasi</a>
            <a href="#" className="hover:text-white">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
