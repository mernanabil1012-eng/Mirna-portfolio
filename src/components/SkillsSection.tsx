const technicalSkills = [
  {
    name: "SQL",
    icon: "https://i.ibb.co/zTKxWPR9/azure-sql-database6354.png",
    skills: ["Database Queries", "Data Manipulation", "Data Cleaning"],
  },
  {
    name: "Python",
    icon: "https://i.ibb.co/5WW93TPC/Python-svg.png",
    skills: ["Data Analysis", "Machine Learning", "Data Visualization"],
  },
  {
    name: "Power BI",
    icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
    skills: ["Data Modeling", "Dashboards", "Visualization"],
  },
  {
    name: "Microsoft Excel",
    icon: "https://i.ibb.co/zhtT4QkY/Excel.png",
    skills: ["Pivot Tables", "Advanced Formulas", "Data Analysis"],
  },
  {
    name: "MS Office",
    icon: "https://i.ibb.co/6JrZVgf6/Microsoft-Office-2016-Logo-wine.png",
    skills: ["Word", "PowerPoint", "Outlook"],
  },
  {
    name: "C/C++",
    icon: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
    skills: ["Programming Basics", "Problem Solving", "Data Structures"],
  },
  {
    name: "HTML & CSS",
    icon: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    skills: ["Web Basics", "Styling", "Responsive Design"],
  },
  {
    name: "Machine Learning",
    icon: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png",
    skills: ["Algorithms", "Model Training", "Predictions"],
  },
];

const softSkills = [
  "Problem Solving",
  "Logical Thinking",
  "Effective Communication",
  "Teamwork",
  "Time Management",
  "Attention to Detail",
  "Self-motivated",
  "Emotional Intelligence",
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-8 lg:px-16 bg-card/50">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-2">
          Technical <span className="text-gradient">Skills</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12">
          My Technical Expertise
        </p>

        {/* Technical Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {technicalSkills.map((skill) => (
            <div
              key={skill.name}
              className="bg-secondary p-6 rounded-xl card-hover text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="font-semibold text-lg mb-2">{skill.name}</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                {skill.skills.map((s) => (
                  <li key={s}>• {s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <h3 className="text-2xl font-bold text-center mb-8">
          Interpersonal <span className="text-gradient">Skills</span>
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {softSkills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-secondary rounded-full text-sm text-foreground border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
