
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
export default Hobbies;