export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e27] shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="text-white text-2xl font-bold">
            Mon Portfolio
          </div>

          {/* Navigation simple */}
          <nav className="flex space-x-8">
            <a href="#hero" className="text-white/80 hover:text-white">
              Accueil
            </a>
            <a href="#projects" className="text-white/80 hover:text-white">
              Projets
            </a>
            <a href="#contact" className="text-white/80 hover:text-white">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}