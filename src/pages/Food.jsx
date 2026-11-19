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

export default Food;