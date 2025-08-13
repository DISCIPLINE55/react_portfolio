import { ExternalLink } from "lucide-react";

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-16">
      <div className="container">
        <h2 className="text-3xl font-semibold mb-8">Certifications</h2>

        <article className="rounded-xl border p-6">
          <h3 className="text-lg font-semibold">Google IT Support Certification (Cousera)</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Completed Google's program covering troubleshooting, customer service, networking, operating systems, and system administration.
          </p>
          <a
            className="mt-3 inline-flex items-center gap-1 text-primary hover:underline"
            href="https://www.credly.com/badges/3b244d7f-b96f-4f3b-ba6d-309cfdb09ab0/linked_in_profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Credential <ExternalLink className="size-4" />
          </a>
        </article>

        <article className="rounded-xl border p-6 mt-6">
          <h3 className="text-lg font-semibold">ALX Professional Foundation (ALX)</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Completed ALX's Professional Foundations program focusing on leadership, communication, problem solving, and remote-first professionalism.
          </p>
          <a
            className="mt-3 inline-flex items-center gap-1 text-primary hover:underline"
            href="https://savanna.alxafrica.com/certificates/mSTGypNsfF"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Credential <ExternalLink className="size-4" />
          </a>
        </article>

        <article className="rounded-xl border p-6 mt-6">
          <h3 className="text-lg font-semibold">Understanding System Analysis (Alison)</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Covered core systems analysis concepts including requirements gathering, modeling, feasibility, and solution design.
          </p>
          <a
            className="mt-3 inline-flex items-center gap-1 text-primary hover:underline"
            href="https://cdn01.alison-static.net/parchment-previews/7450f267d5a5f7b044d093f3592bb624.jpg"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Credential <ExternalLink className="size-4" />
          </a>
        </article>

        <article className="rounded-xl border p-6 mt-6">
          <h3 className="text-lg font-semibold">MySQL Intermediate (Solo-Learning)</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Developed intermediate-level skills in MySQL including database creation, data manipulation, joins, subqueries, and optimization techniques.
          </p>
          <a
            className="mt-3 inline-flex items-center gap-1 text-primary hover:underline"
            href="https://www.sololearn.com/certificates/CC-UMAEUZ7Y"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Credential <ExternalLink className="size-4" />
          </a>
        </article>
      </div>
    </section>
  );
}
