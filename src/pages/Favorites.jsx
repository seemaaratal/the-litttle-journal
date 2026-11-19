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

export default Favorites;