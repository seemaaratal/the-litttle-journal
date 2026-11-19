function Footer() {
  return (
    <footer className="mt-20 bg-pink-100 px-5 py-12 text-center">
      <p className="font-heading text-3xl font-bold text-pink-700">
        The Little Journal ♡
      </p>
      <p className="mt-3 text-sm text-gray-600">
        Collecting little moments and making beautiful memories.
      </p>

      <div className="mt-5 flex justify-center gap-6 text-sm font-semibold text-pink-700">
        <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
      </div>

      <p className="mt-7 text-xs text-gray-500">
        Made with ♡ by Seema | © 2026
      </p>
    </footer>
  );
}

function Heading({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <p className="font-bold uppercase tracking-[3px] text-pink-500">
        {eyebrow}
      </p>
      <h1 className="mt-3 font-heading text-4xl font-bold text-gray-800 md:text-5xl">
        {title} <span className="text-pink-400">♡</span>
      </h1>
      {description && (
        <p className="mt-4 leading-7 text-gray-600">{description}</p>
      )}
    </div>
  );
}

function PhotoCard({ image, title, description, path }) {
  return (
    <article className="group overflow-hidden rounded-[25px] border border-pink-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
      />
      <div className="p-6">
        <h3 className="font-heading text-2xl font-bold text-gray-800">
          {title}
        </h3>
        <p className="mt-2 leading-7 text-gray-600">{description}</p>
        {path && (
          <Link
            to={path}
            className="mt-4 inline-block font-bold text-pink-600 hover:text-pink-800"
          >
            Explore more →
          </Link>
        )}
      </div>
    </article>
  );
}


export default Footer;