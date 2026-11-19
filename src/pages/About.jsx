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


export default About;