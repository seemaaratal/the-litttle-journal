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

export default Gallery;