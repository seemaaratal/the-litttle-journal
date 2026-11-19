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


export default Lifestyle;