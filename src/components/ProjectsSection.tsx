import { ExternalLink, Github, FolderKanban } from "lucide-react";
import hrAnalyticsDashboard from "@/assets/hr-analytics-dashboard.png";

interface Project {
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    title: "Tableau Project HR Analytics Dashboard",
    description: "This interactive Tableau dashboard provides a comprehensive view of HR data to help organizations understand employee trends and make data-driven decisions. The dashboard focuses on key areas such as Employee Attrition (identify which age groups, genders, and job roles have the highest turnover), Job Satisfaction & Training (analyze employee satisfaction levels and the impact of training participation on promotions), and Actionable Insights (highlight patterns and trends that HR can act upon to improve retention and engagement).",
    image: hrAnalyticsDashboard,
    technologies: ["Tableau Desktop", "Data Visualization", "HR Analytics", "Data Cleaning"],
    githubUrl: "https://github.com/mernanabil1012-eng/Tableau-HR-Dashboard.git",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32">
      <div className="container max-w-7xl 2xl:max-w-screen-xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-2">
          My <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12">
          Work & Portfolio
        </p>

        {projects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-secondary rounded-xl overflow-hidden card-hover group"
              >
                {project.image && (
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-primary/20 text-primary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-primary hover:underline"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Project
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <FolderKanban className="w-16 h-16 mx-auto text-primary/50 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Projects Coming Soon</h3>
            <p className="text-muted-foreground">
              I'm currently working on adding my projects. Check back soon!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
