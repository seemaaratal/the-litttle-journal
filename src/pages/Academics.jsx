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


export default Academics;