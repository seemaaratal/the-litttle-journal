import { Link } from "react-router-dom";

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

       

export default Home;