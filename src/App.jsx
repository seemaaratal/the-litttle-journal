import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Link,
} from "react-router-dom";

const photos = {
  flowers: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1000",
  lifestyle: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800",
  travel: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
  food: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800",
  camera: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800",
  nature: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800",
  beach: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
  coffee: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=800",
  dessert: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800",
  portrait: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800",
};

const navLinks = [
  ["Home", "/"],
  ["About", "/about"],
  ["Hobbies", "/hobbies"],
  ["Academics", "/academics"],
  ["Lifestyle", "/lifestyle"],
  ["Travel", "/travel"],
  ["Food", "/food"],
  ["Gallery", "/gallery"],
  ["Contact", "/contact"],
];

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

function Home() {
  const cards = [
    { title: "My Lifestyle", description: "Little moments from everyday life.", image: photos.lifestyle, path: "/lifestyle" },
    { title: "Travel Diaries", description: "Places, adventures and memories.", image: photos.travel, path: "/travel" },
    { title: "Food Stories", description: "Delicious things that make me happy.", image: photos.food, path: "/food" },
    { title: "My Hobbies", description: "The things I love doing.", image: photos.camera, path: "/hobbies" },
    { title: "My Gallery", description: "A collection of beautiful moments.", image: photos.nature, path: "/gallery" },
    { title: "About Me", description: "A little introduction about myself.", image: photos.portrait, path: "/about" },
  ];

  return (
    <>
      <section className="overflow-hidden bg-[#ffeaf0] px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div>
            <span className="inline-block rounded-full bg-white px-5 py-2 text-sm font-bold text-pink-600">
              ✿ Welcome to my little world ✿
            </span>

            <h1 className="mt-7 font-heading text-5xl font-bold leading-tight text-gray-800 md:text-7xl">
              Hello, I'm <span className="text-pink-600">Seema!</span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-gray-600">
              A little space filled with pink dreams, travel stories,
              yummy food, hobbies and beautiful everyday memories.
            </p>

            <Link
              to="/about"
              className="mt-8 inline-block rounded-full bg-pink-500 px-9 py-4 font-bold text-white shadow-lg shadow-pink-200 transition hover:bg-pink-600 hover:shadow-xl"
            >
              Get to know me ♡
            </Link>

            <p className="mt-7 font-heading text-xl italic text-pink-600">
              "Enjoying the little things in life."
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 rotate-3 rounded-[40px] bg-white" />
            <img
              src={photos.flowers}
              alt="Beautiful flowers"
              className="relative h-[400px] w-full rounded-[35px] object-cover shadow-xl md:h-[500px]"
            />
            <span className="absolute -bottom-5 -left-4 rotate-[-8deg] rounded-2xl bg-white px-6 py-4 font-heading text-xl text-pink-600 shadow-lg">
              Little moments ♡
            </span>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <Heading
          eyebrow="A little introduction"
          title="Welcome to my journal"
          description="I'm a Computer Science Engineering student who loves photography, travelling, music, dancing and discovering new things. This is my happy little corner!"
        />

        <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <PhotoCard key={card.title} {...card} />
          ))}
        </div>
      </section>

      <section className="mx-5 rounded-[35px] bg-pink-100 px-6 py-16 text-center md:mx-auto md:max-w-6xl">
        <p className="text-3xl">🌷 🎀 🌸</p>
        <h2 className="mt-4 font-heading text-3xl font-bold text-pink-700 md:text-4xl">
          Life is made of little moments
        </h2>
        <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-600">
          Thank you for visiting my journal. I hope you find something
          here that makes you smile!
        </p>
        <Link to="/gallery" className="mt-7 inline-block rounded-full bg-white px-8 py-3 font-bold text-pink-600 hover:bg-pink-200">
          View my memories →
        </Link>
      </section>
    </>
  );
}

function About() {
  return (
    <section className="px-6 py-16">
      <Heading eyebrow="The girl behind the blog" title="A little about me" />
      <div className="mx-auto grid max-w-5xl items-center gap-10 rounded-[35px] bg-pink-50 p-6 md:grid-cols-2 md:p-10">
        <img src={photos.portrait} alt="Portrait" className="h-[420px] w-full rounded-[28px] object-cover" />
        <div>
          <h2 className="font-heading text-3xl font-bold text-pink-700">Hello lovely people! ♡</h2>
          <p className="mt-5 leading-8 text-gray-600">
            I'm Seema, a Computer Science Engineering student.
            I love capturing beautiful moments, exploring new places,
            enjoying music, dancing and trying delicious food.
          </p>
          <p className="mt-4 leading-8 text-gray-600">
            I created this little journal to share my interests,
            experiences, memories and everyday adventures.
          </p>
          <p className="mt-6 font-heading text-xl italic text-pink-600">
            Stay happy, stay kind and keep smiling!
          </p>
        </div>
      </div>
    </section>
  );
}

function Hobbies() {
  const items = [
    ["Photography", "Capturing beautiful moments and memories.", photos.camera],
    ["Travelling", "Exploring places and enjoying nature.", photos.travel],
    ["Listening to Music", "Music makes every moment special.", photos.coffee],
    ["Dancing", "Expressing happiness through dance.", photos.flowers],
  ];

  return (
    <section className="px-6 py-16">
      <Heading eyebrow="Things I enjoy" title="My Hobbies" description="A few little things that make my days happier." />
      <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2">
        {items.map(([title, description, image]) => (
          <PhotoCard key={title} title={title} description={description} image={image} />
        ))}
      </div>
    </section>
  );
}

function Academics() {
  const skills = ["Java", "JavaScript", "Python (Basic)", "HTML", "CSS", "React.js", "MySQL", "Git & GitHub"];

  return (
    <section className="px-6 py-16">
      <Heading eyebrow="My learning journey" title="My Academics" description="Learning, growing and building my future in technology." />
      <div className="mx-auto max-w-4xl rounded-[30px] border border-pink-100 bg-white p-8 shadow-sm md:p-12">
        <div className="text-4xl">🎓</div>
        <h2 className="mt-5 font-heading text-3xl font-bold text-pink-700">Bachelor of Engineering</h2>
        <p className="mt-3 text-lg font-semibold text-gray-700">Computer Science Engineering</p>
        <p className="mt-2 text-gray-500">Jain College of Engineering, Belagavi</p>
        <p className="mt-2 text-gray-500">Currently pursuing | 2027 batch</p>
        <div className="my-8 h-px bg-pink-100" />
        <h3 className="font-heading text-2xl font-bold text-gray-800">My Technical Skills</h3>
        <div className="mt-5 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span key={skill} className="rounded-full bg-pink-100 px-5 py-3 text-sm font-semibold text-pink-700">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Favorites() {
  const items = [
    ["Pink", "A colour that makes everything feel lovely.", photos.flowers],
    ["Nature", "Peaceful views and fresh air.", photos.nature],
    ["Music", "My favourite companion in every mood.", photos.coffee],
    ["Food", "Good food and happy moments.", photos.food],
  ];

  return (
    <section className="px-6 py-16">
      <Heading eyebrow="Things that make me smile" title="My Favourite Things" />
      <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2">
        {items.map(([title, description, image]) => (
          <PhotoCard key={title} title={title} description={description} image={image} />
        ))}
      </div>
    </section>
  );
}

function Lifestyle() {
  const items = [
    ["Everyday Moments", "Finding beauty in the little things.", photos.lifestyle],
    ["Self Care", "Taking time to relax and recharge.", photos.flowers],
    ["Photography", "Saving special memories through pictures.", photos.camera],
    ["Slow Days", "Enjoying peaceful moments and coffee.", photos.coffee],
  ];

  return (
    <section className="px-6 py-16">
      <Heading eyebrow="My everyday diary" title="My Lifestyle" description="A collection of little moments from my daily life." />
      <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2">
        {items.map(([title, description, image]) => (
          <PhotoCard key={title} title={title} description={description} image={image} />
        ))}
      </div>
    </section>
  );
}

function Travel() {
  const items = [
    ["Mountains", "Dreaming of peaceful mountain views.", photos.travel],
    ["Beach Days", "Sunshine, sea and beautiful sunsets.", photos.beach],
    ["Nature Escapes", "Finding happiness in green places.", photos.nature],
  ];

  return (
    <section className="px-6 py-16">
      <Heading eyebrow="Wander often" title="My Travel Diaries" description="Every place has a story waiting to be discovered." />
      <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(([title, description, image]) => (
          <PhotoCard key={title} title={title} description={description} image={image} />
        ))}
      </div>
    </section>
  );
}

function Food() {
  const items = [
    ["Delicious Meals", "Good food always makes my day better.", photos.food],
    ["Sweet Treats", "A little sweetness makes life happier.", photos.dessert],
    ["Coffee Moments", "A cup of coffee and a peaceful day.", photos.coffee],
  ];

  return (
    <section className="px-6 py-16">
      <Heading eyebrow="Made with love" title="My Food Journal" description="A little space for delicious discoveries and favourite flavours." />
      <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(([title, description, image]) => (
          <PhotoCard key={title} title={title} description={description} image={image} />
        ))}
      </div>
    </section>
  );
}

function Gallery() {
  const images = [
    photos.flowers,
    photos.travel,
    photos.food,
    photos.camera,
    photos.nature,
    photos.beach,
    photos.coffee,
    photos.dessert,
    photos.lifestyle,
  ];

  const [selected, setSelected] = useState(null);

  return (
    <section className="px-5 py-16">
      <Heading eyebrow="Captured memories" title="My Little Gallery" description="A few beautiful pictures to brighten your day. Click any picture to view it larger." />

      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
        {images.map((image, index) => (
          <button key={image} onClick={() => setSelected(image)} className="overflow-hidden rounded-2xl shadow-sm">
            <img
              src={image}
              alt={`Gallery memory ${index + 1}`}
              loading="lazy"
              className="h-48 w-full object-cover transition duration-500 hover:scale-110 md:h-72"
            />
          </button>
        ))}
      </div>

      {selected && (
        <div onClick={() => setSelected(null)} className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-5">
          <button onClick={() => setSelected(null)} className="absolute right-6 top-6 rounded-full bg-white px-4 py-2 font-bold text-pink-600">Close ✕</button>
          <img src={selected} alt="Selected gallery image" className="max-h-[85vh] max-w-full rounded-2xl object-contain" />
        </div>
      )}
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <section className="px-6 py-16">
      <Heading eyebrow="Let's connect" title="Contact Me" description="Have something lovely to share? I'd love to hear from you!" />

      <form onSubmit={handleSubmit} className="mx-auto max-w-2xl rounded-[30px] border border-pink-100 bg-white p-7 shadow-lg shadow-pink-100 md:p-10">
        <label className="mb-2 block font-semibold text-gray-700">Your Name</label>
        <input
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Enter your name"
          className="mb-6 w-full rounded-xl border border-pink-200 bg-pink-50/50 px-4 py-3 outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-100"
        />

        <label className="mb-2 block font-semibold text-gray-700">Your Email</label>
        <input
          required
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="Enter your email"
          className="mb-6 w-full rounded-xl border border-pink-200 bg-pink-50/50 px-4 py-3 outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-100"
        />

        <label className="mb-2 block font-semibold text-gray-700">Your Message</label>
        <textarea
          required
          rows="5"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Write something..."
          className="mb-6 w-full resize-y rounded-xl border border-pink-200 bg-pink-50/50 px-4 py-3 outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-100"
        />

        <button type="submit" className="w-full rounded-full bg-pink-500 py-4 font-bold text-white shadow-md transition hover:bg-pink-600">
          Send Message ♡
        </button>

        {submitted && (
          <p className="mt-5 rounded-xl bg-pink-100 p-4 text-center font-semibold text-pink-700">
            Thank you for your message! ♡
          </p>
        )}

        <p className="mt-4 text-center text-xs text-gray-500">
          Demo form: messages are not sent or stored yet.
        </p>
      </form>
    </section>
  );
}

function NotFound() {
  return (
    <section className="px-6 py-24 text-center">
      <p className="text-5xl">🌸</p>
      <h1 className="mt-5 font-heading text-4xl font-bold text-pink-700">Page not found</h1>
      <Link to="/" className="mt-6 inline-block rounded-full bg-pink-500 px-7 py-3 font-bold text-white">
        Back to Home
      </Link>
    </section>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#fff9fa]">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/hobbies" element={<Hobbies />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/lifestyle" element={<Lifestyle />} />
            <Route path="/travel" element={<Travel />} />
            <Route path="/food" element={<Food />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;