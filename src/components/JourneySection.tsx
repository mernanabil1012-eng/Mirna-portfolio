import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    period: "University",
    title: "Bachelor's in Information Systems",
    institution: "Helwan University",
    description: "Focused on data analysis, programming, and business technology solutions.",
  },
];

const courses = [
  {
    period: "2024",
    title: "Data Analysis Diploma",
    institution: "Professional Training",
    description: "Comprehensive diploma covering data analysis, visualization, Power BI, Tableau, and business analytics.",
  },
  {
    period: "April 2022",
    title: "C++ Course",
    institution: "180 DARAGA",
    description: "Comprehensive programming course covering C++ fundamentals and advanced concepts.",
  },
];

const JourneySection = () => {
  return (
    <section id="journey" className="py-20 px-8 lg:px-16">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-2">
          My <span className="text-gradient">Journey</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12">
          Education & Training
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>
            {education.map((item, index) => (
              <div
                key={index}
                className="relative pl-8 pb-8 border-l-2 border-primary/30 last:pb-0"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary animate-pulse-glow" />
                <span className="text-sm text-primary font-medium">
                  {item.period}
                </span>
                <h4 className="text-xl font-semibold mt-1">{item.title}</h4>
                <p className="text-muted-foreground text-sm mt-1">
                  {item.institution}
                </p>
                <p className="text-muted-foreground mt-2">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Courses & Training */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-semibold">Courses & Training</h3>
            </div>
            {courses.map((item, index) => (
              <div
                key={index}
                className="relative pl-8 pb-8 border-l-2 border-primary/30 last:pb-0"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary animate-pulse-glow" />
                <span className="text-sm text-primary font-medium">
                  {item.period}
                </span>
                <h4 className="text-xl font-semibold mt-1">{item.title}</h4>
                <p className="text-muted-foreground text-sm mt-1">
                  {item.institution}
                </p>
                <p className="text-muted-foreground mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
