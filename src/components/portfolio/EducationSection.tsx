import { GraduationCap } from "lucide-react";

export default function EducationSection() {
  return (
    <section id="education" className="py-16">
      <div className="container">
        <h2 className="text-3xl font-semibold mb-8">Education</h2>
        <article className="rounded-xl border p-6">
          <div className="flex items-center gap-2">
            <GraduationCap className="text-primary" />
            <h3 className="text-lg font-semibold">BSc in Information Technology Education</h3>
          </div>
          <p className="mt-1 text-sm">Akenten Appiah-Menka University of Skills Training, Entrepreneurship,  Development</p>
          <p className="text-sm text-muted-foreground">Expected Graduation: 2027</p>
          <ul className="mt-3 grid gap-1 text-sm text-muted-foreground">
            <li>• Core IT principles and practices</li>
            <li>• Software Development Methodologies</li>
            <li>• Database Management Systems</li>
            <li>• Network Infrastructure and Security</li>
            <li>• IT Project Management</li>
          </ul>
        </article>
      </div>
    </section>
  );
}
