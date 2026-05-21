export default function Footer() {
  return (
    <footer className="bg-[#0B1624] border-t border-white/10 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-6">

        <div>
          <h3 className="text-3xl font-bold tracking-[0.25em]">
            ANUSTROY
          </h3>

          <p className="text-slate-400 mt-2">
            Высотные работы и промышленный альпинизм
          </p>
        </div>

        <div className="text-slate-400 text-sm">
          © 2026 ANUSTROY. Все права защищены.
        </div>

      </div>
    </footer>
  );
}