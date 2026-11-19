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
export default Contact;