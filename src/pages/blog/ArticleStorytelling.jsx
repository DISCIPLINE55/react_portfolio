import React from "react";
import { useNavigate } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function ArticleStorytelling() {
  const navigate = useNavigate();

  return (
    <div className="p-6 max-w-4xl mx-auto text-foreground leading-relaxed">
      <AspectRatio ratio={16 / 9}>
        <img
          src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop"
          alt="Storytelling concept with open book and light"
          className="w-full h-full object-cover rounded-xl"
          loading="lazy"
          decoding="async"
        />
      </AspectRatio>
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="text-primary hover:underline mb-6 block"
      >
        ← Back
      </button>

      {/* Title */}
      <h1 className="text-4xl font-extrabold mb-4">The Power of Storytelling</h1>
      <p className="text-lg text-gray-600 mb-6">
        Storytelling is more than just a creative skill—it’s a bridge that connects
        humans through emotions, values, and shared experiences. In business,
        education, and design, it transforms messages into movements.
      </p>

      {/* Intro Image */}
      

      {/* Section 1 */}
      <h2 className="text-2xl font-semibold mb-3">Why Storytelling Matters</h2>
      <p className="mb-4">
        From ancient campfires to modern-day presentations, stories have been
        humanity’s most powerful communication tool. They:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Engage audiences by triggering emotions.</li>
        <li>Make information memorable and easy to recall.</li>
        <li>Build trust through relatability and authenticity.</li>
        <li>Motivate people to take action.</li>
      </ul>

      {/* Section 2 */}
      <h2 className="text-2xl font-semibold mb-3">Key Elements of a Great Story</h2>
      <p className="mb-4">
        Every impactful story shares some common elements. Understanding them will
        help you structure your message:
      </p>
      <ol className="list-decimal pl-6 mb-6 space-y-2">
        <li>
          <strong>Characters:</strong> People your audience can relate to.
        </li>
        <li>
          <strong>Conflict:</strong> The challenge or problem to be solved.
        </li>
        <li>
          <strong>Journey:</strong> The path taken to overcome the challenge.
        </li>
        <li>
          <strong>Resolution:</strong> The satisfying conclusion that ties
          everything together.
        </li>
      </ol>

      {/* Quote */}
      <blockquote className="border-l-4 border-blue-500 pl-4 italic mb-8 text-gray-700">
        “Those who tell the stories rule society.” — Plato
      </blockquote>

      {/* Section 3 */}
      <h2 className="text-2xl font-semibold mb-3">
        Storytelling in Design & Marketing
      </h2>
      <p className="mb-4">
        In design, storytelling creates user experiences that feel human and
        intentional. In marketing, it transforms customers into loyal brand
        advocates. Examples include:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>
          Using brand origin stories to foster emotional connection.
        </li>
        <li>
          Showcasing customer success stories as case studies.
        </li>
        <li>
          Designing product interfaces that guide users through a narrative.
        </li>
      </ul>

      {/* Section 4 */}
      <h2 className="text-2xl font-semibold mb-3">
        Tips for Mastering Storytelling
      </h2>
      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li>Know your audience and their values.</li>
        <li>Keep it simple but emotionally powerful.</li>
        <li>Use visuals and metaphors for stronger impact.</li>
        <li>Stay authentic—people can sense inauthenticity.</li>
        <li>Practice and refine your delivery.</li>
      </ul>

      {/* Closing */}
      <p className="text-lg text-gray-700 mb-10">
        Storytelling is not just a skill—it’s a leadership tool, a marketing
        powerhouse, and a human necessity. Whether you’re presenting an idea,
        building a product, or connecting with friends, remember: the best way to
        touch hearts is through a well-told story.
      </p>

      {/* Back to Articles Button */}
      <button
        onClick={() => navigate(-1)}
        className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition"
      >
        Back to Articles
      </button>
    </div>
  );
}
