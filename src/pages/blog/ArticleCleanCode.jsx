import React from "react";
import { useNavigate } from "react-router-dom";

export default function ArticleCleanCode() {
  const navigate = useNavigate();

  return (
    <article className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-56 md:h-72 w-full">
        <img
          src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop"
          alt="Clean code on screen in a minimal workspace"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/40 flex items-end">
          <div className="p-6 md:p-10 text-white">
            <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">
              Clean Code Principles
            </h1>
            <p className="text-gray-200 mt-2 text-sm">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6 md:p-10 max-w-4xl mx-auto text-gray-800">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="text-blue-600 hover:underline mb-8 inline-block"
        >
          ← Back to Articles
        </button>

        {/* Intro */}
        <p className="mb-6 leading-relaxed text-lg text-gray-700">
          Writing clean code isn’t just about aesthetics—it’s about
          maintainability, scalability, and teamwork. Clean code ensures that
          software remains understandable, flexible, and less prone to bugs
          over time.
        </p>

        {/* Principles */}
        {[
          {
            title: "1. Meaningful Naming",
            text: "Choose names that clearly describe the purpose of variables, functions, and classes. A good name eliminates the need for comments explaining what it does.",
            list: [
              "Variables: Use nouns for objects (e.g., userProfile).",
              "Functions: Use verbs for actions (e.g., calculateTotal()).",
              "Avoid abbreviations unless widely understood.",
            ],
          },
          {
            title: "2. Keep Functions Small",
            text: "Functions should do one thing and do it well. If a function is too long or handles multiple tasks, break it into smaller, reusable functions.",
          },
          {
            title: "3. Avoid Code Duplication",
            text: "Duplicated code is harder to maintain. If logic is repeated in multiple places, move it into a shared function or module.",
          },
          {
            title: "4. Consistent Formatting",
            text: "Maintain a consistent style throughout the codebase. Use tools like Prettier or ESLint to enforce formatting rules automatically.",
          },
          {
            title: "5. Write Self-Documenting Code",
            text: "Code should be clear enough to explain itself without excessive comments. Comments should clarify why something is done, not what is done.",
          },
          {
            title: "6. Error Handling",
            text: "Handle errors gracefully with clear messages and fallback logic. Never leave potential failure points without proper handling.",
          },
          {
            title: "7. Testing",
            text: "Write automated tests to verify code functionality. Tests help prevent bugs, ensure new changes don’t break existing features, and improve confidence in refactoring.",
          },
          {
            title: "8. Refactor Regularly",
            text: "Clean code evolves over time. Refactor regularly to improve readability, remove redundancy, and adapt to changing requirements.",
          },
          {
            title: "9. Follow SOLID Principles",
            text: "The SOLID principles are guidelines for object-oriented design that promote maintainability and flexibility:",
            list: [
              "Single Responsibility Principle",
              "Open/Closed Principle",
              "Liskov Substitution Principle",
              "Interface Segregation Principle",
              "Dependency Inversion Principle",
            ],
          },
          {
            title: "10. Keep It Simple (KISS)",
            text: "Avoid over-engineering. Simple solutions are easier to understand, maintain, and debug.",
          },
          {
            title: "11. Don’t Repeat Yourself (DRY)",
            text: "Consolidate logic and avoid duplication to make your code more efficient and easier to maintain.",
          },
          {
            title: "12. YAGNI (You Aren’t Gonna Need It)",
            text: "Don’t add features or code until they’re actually needed. Premature additions often lead to complexity and waste.",
          },
        ].map(({ title, text, list }, idx) => (
          <section key={idx} className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-gray-900 border-l-4 border-blue-600 pl-3">
              {title}
            </h2>
            <p className="leading-relaxed text-gray-700 mb-3">{text}</p>
            {list && (
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                {list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}

        {/* Conclusion */}
        <section className="mt-10 border-t pt-6">
          <h2 className="text-xl font-semibold mb-3">Final Thoughts</h2>
          <p className="leading-relaxed text-gray-700">
            Clean code is an investment in the future of your project. By
            writing readable, maintainable, and well-structured code, you save
            time and effort for yourself and your team in the long run.
          </p>
        </section>
      </div>
    </article>
  );
}
