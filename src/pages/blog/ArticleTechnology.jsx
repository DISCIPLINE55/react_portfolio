import React from "react";
import { useNavigate } from "react-router-dom";

export default function ArticleTechnology() {
  const navigate = useNavigate();

  return (
    <article className="bg-white min-h-screen">
      {/* Header / Hero */}
      <div className="relative h-64 md:h-80 w-full">
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop"
          alt="Futuristic city skyline representing technological advancement"
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/40 flex items-end">
          <div className="p-6 md:p-10 text-white">
            <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">
              The Future of Technology
            </h1>
            <p className="text-gray-200 mt-2 text-sm">
              Published on August 9, 2025 • 6 min read
            </p>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="p-6 md:p-10 max-w-4xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="text-blue-600 hover:underline mb-6 inline-block"
        >
          ← Back to Articles
        </button>

        {/* Introduction */}
        <p className="mb-6 leading-relaxed text-lg text-gray-700">
          Technology is advancing at an unprecedented pace, shaping the way we live,
          work, and connect with one another. From artificial intelligence to quantum
          computing, the possibilities are expanding rapidly. This shift is not just
          about gadgets or software—it’s about transforming societies, economies, and
          even our understanding of what’s possible.
        </p>

        {/* Section 1 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 border-l-4 border-blue-600 pl-3">
            Artificial Intelligence & Automation
          </h2>
          <p className="leading-relaxed text-gray-700">
            AI is revolutionizing industries by automating tasks, enhancing decision-making,
            and enabling personalized experiences. Machine learning models are now capable
            of predicting diseases, optimizing supply chains, and even generating creative
            works like music and art. However, this also raises ethical concerns around
            bias, job displacement, and data privacy.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 border-l-4 border-blue-600 pl-3">
            Quantum Computing
          </h2>
          <p className="leading-relaxed text-gray-700">
            Quantum computing promises to solve problems far beyond the reach of classical
            computers, from simulating complex molecules for drug discovery to optimizing
            massive logistical networks. While still in its early stages, breakthroughs
            are bringing this technology closer to practical applications.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 border-l-4 border-blue-600 pl-3">
            Sustainability & Green Tech
          </h2>
          <p className="leading-relaxed text-gray-700">
            As climate change becomes a pressing concern, technology is playing a key role
            in creating sustainable solutions. Renewable energy systems, smart grids, and
            energy-efficient devices are making it possible to reduce carbon footprints
            without compromising quality of life.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 border-l-4 border-blue-600 pl-3">
            The Human Element
          </h2>
          <p className="leading-relaxed text-gray-700">
            Ultimately, the future of technology depends on how we choose to use it.
            Ethical frameworks, inclusive design, and global collaboration will ensure that
            advancements benefit everyone—not just a privileged few.
          </p>
        </section>

        {/* Conclusion */}
        <section className="mt-10 border-t pt-6">
          <blockquote className="italic text-gray-600 border-l-4 border-gray-300 pl-4">
            "The future is already here—it’s just not evenly distributed."
            <span className="block mt-1 text-sm text-gray-500">— William Gibson</span>
          </blockquote>
          <p className="mt-6 leading-relaxed text-gray-700">
            As we navigate this era of rapid innovation, we must balance excitement with
            responsibility. The choices we make today will determine whether technology
            becomes a tool for empowerment or a driver of inequality.
          </p>
        </section>
      </div>
    </article>
  );
}
