import React from "react";
import { useNavigate } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function ArticleAccessibility() {
  const navigate = useNavigate();

  return (
    <div className="p-6 max-w-3xl mx-auto text-foreground">
      <AspectRatio ratio={16 / 9}>
        <img
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop"
          alt="Accessible design abstract illustration"
          className="w-full h-full object-cover rounded-xl"
          loading="lazy"
          decoding="async"
        />
      </AspectRatio>
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="text-primary hover:underline mb-4"
      >
        ← Back
      </button>

      {/* Title */}
      <h1 className="text-3xl font-bold mb-4">Designing for Accessibility</h1>

      {/* Intro */}
      <p className="mb-4">
        Accessibility is more than a checkbox—it's a commitment to creating
        inclusive experiences for all users, regardless of ability. In the digital
        world, this means ensuring that everyone, including people with
        disabilities, can perceive, understand, navigate, and interact with your
        product.
      </p>

      <p className="mb-6">
        This article covers practical tips, common mistakes, and best practices for
        ensuring your designs meet accessibility standards.
      </p>

      {/* Section 1: Why Accessibility Matters */}
      <h2 className="text-2xl font-semibold mb-2">Why Accessibility Matters</h2>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>It promotes inclusivity and equal access.</li>
        <li>It’s often a legal requirement in many countries.</li>
        <li>Accessible designs improve usability for all users.</li>
        <li>It expands your potential audience and customer base.</li>
      </ul>

      {/* Section 2: Common Accessibility Mistakes */}
      <h2 className="text-2xl font-semibold mb-2">
        Common Accessibility Mistakes
      </h2>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>Low color contrast between text and background.</li>
        <li>Missing alt text for images.</li>
        <li>Non-descriptive link text like “Click here.”</li>
        <li>Not supporting keyboard navigation.</li>
      </ul>

      {/* Section 3: Practical Accessibility Tips */}
      <h2 className="text-2xl font-semibold mb-2">Practical Tips</h2>
      <ol className="list-decimal list-inside mb-6 space-y-2">
        <li>
          Use high contrast color schemes for better readability.
        </li>
        <li>
          Provide meaningful alt text for all images.
        </li>
        <li>
          Ensure all interactive elements are keyboard-accessible.
        </li>
        <li>
          Use descriptive link labels that make sense out of context.
        </li>
        <li>
          Test your designs using screen readers like NVDA or VoiceOver.
        </li>
      </ol>

      {/* Section 4: Accessibility Resources */}
      <h2 className="text-2xl font-semibold mb-2">Resources</h2>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>
          <a
            href="https://www.w3.org/WAI/standards-guidelines/wcag/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            WCAG Guidelines
          </a>
        </li>
        <li>
          <a
            href="https://accessibility.digital.gov/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            U.S. Web Accessibility Standards
          </a>
        </li>
        <li>
          <a
            href="https://webaim.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            WebAIM: Web Accessibility in Mind
          </a>
        </li>
      </ul>

      {/* Conclusion */}
      <p className="mb-4">
        Designing for accessibility is not just the right thing to do—it’s good
        for business, usability, and your users’ trust. Start small, improve
        iteratively, and always test with real people.
      </p>
    </div>
  );
}
