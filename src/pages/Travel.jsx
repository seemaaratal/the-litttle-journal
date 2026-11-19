
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

export default Travel;