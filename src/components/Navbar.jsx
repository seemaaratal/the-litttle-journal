function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-pink-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link to="/" className="font-heading text-2xl font-bold text-pink-600">
          The Little Journal <span className="text-pink-400">♡</span>
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-xl bg-pink-50 px-4 py-2 text-pink-600 md:hidden"
          aria-label="Toggle navigation"
        >
          {menuOpen ? "✕ Close" : "☰ Menu"}
        </button>

        <nav className="hidden flex-wrap items-center gap-5 md:flex">
          {navLinks.map(([name, path]) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              className={({ isActive }) =>
                `text-sm font-semibold transition hover:text-pink-600 ${
                  isActive ? "text-pink-600" : "text-gray-600"
                }`
              }
            >
              {name}
            </NavLink>
          ))}
        </nav>
      </div>

      {menuOpen && (
        <nav className="grid grid-cols-2 gap-3 bg-pink-50 p-5 md:hidden">
          {navLinks.map(([name, path]) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              onClick={() => setMenuOpen(false)}
              className="rounded-xl bg-white px-4 py-3 text-sm font-semibold text-pink-700"
            >
              {name} ♡
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}


export default Navbar;