import { ExternalLink, Github, FolderKanban, BarChart3, PieChart, Brain, FileSpreadsheet } from "lucide-react";
import hrAnalyticsDashboard from "@/assets/hr-analytics-dashboard.png";
import pharmacyInventoryDashboard from "@/assets/pharmacy-inventory-dashboard.png";
import rfmAnalysisImage from "@/assets/rfm-analysis.png";
import sallaCallCenterImage from "@/assets/salla-call-center.png";
import misuoDashboard from "@/assets/misuo-dashboard.png";
interface Project {
  title: string;
  subtitle?: string;
  description: string;
  image?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  icon: "tableau" | "powerbi" | "rfm" | "excel";
  badge?: string;
}

const projects: Project[] = [
  {
    title: "📊 MISUO Sales Dashboard – Excel Project",
    description: "An interactive Sales Dashboard using Microsoft Excel to analyze and visualize sales performance for MISUO. The main objective was to transform raw sales data into clear, actionable insights that support data-driven decision-making. The dashboard highlights: Total Sales, Total Orders, and Average Selling Price; Best Seller Products to identify top-performing items; Best-Selling Colors to understand customer preferences; On-time Delivery Rate vs delayed deliveries; Delivery Status Breakdown (Delivered vs Canceled); Orders by Area to analyze regional demand; Sales by Platform to evaluate platform performance. Built using Excel Pivot Tables and Pivot Charts with Interactive Slicers, Clear KPI cards, and consistent design for better readability and storytelling.",
    image: misuoDashboard,
    technologies: ["Microsoft Excel", "Pivot Tables", "Pivot Charts", "Data Analysis", "KPI Design", "Dashboard Storytelling"],
    githubUrl: "https://github.com/mernanabil1012-eng/MISUO-Sales-Dashboard-Excel.git",
    icon: "excel",
  },
  {
    title: "Tableau Project HR Analytics Dashboard",
    description: "This interactive Tableau dashboard provides a comprehensive view of HR data to help organizations understand employee trends and make data-driven decisions. The dashboard focuses on key areas such as Employee Attrition (identify which age groups, genders, and job roles have the highest turnover), Job Satisfaction & Training (analyze employee satisfaction levels and the impact of training participation on promotions), and Actionable Insights (highlight patterns and trends that HR can act upon to improve retention and engagement).",
    image: hrAnalyticsDashboard,
    technologies: ["Tableau Desktop", "Data Visualization", "HR Analytics", "Data Cleaning"],
    githubUrl: "https://github.com/mernanabil1012-eng/Tableau-HR-Dashboard.git",
    icon: "tableau",
  },
  {
    title: "Power BI Pharmacy Inventory Dashboard",
    description: "An interactive Power BI dashboard designed to monitor inventory performance, track stock availability, and analyze supplier-related risks. The project transforms raw inventory data into clear KPIs and actionable insights to support operational and strategic decision-making. Key Features include Inventory Overview with KPI cards, Stock Monitoring for low-stock items, Supplier Analysis, Risk Insights, and Interactive Filters. Improves inventory visibility, reduces stock-out risk, and supports data-driven supplier decisions.",
    image: pharmacyInventoryDashboard,
    technologies: ["Power BI", "DAX", "Data Modeling", "KPI Design", "Inventory Analytics"],
    githubUrl: "https://github.com/mernanabil1012-eng/Pharmacy-Inventory-Dashboard-PowerBI.git",
    icon: "powerbi",
  },
  {
    title: "Power BI Salla Call Center Dashboard",
    description: "An interactive Power BI dashboard designed to analyze and monitor call center performance and support data-driven decision making. The dashboard provides a clear overview of call volumes, service quality, and agent performance, helping management identify trends, strengths, and areas for improvement. Key Features: Monitors critical KPIs such as Total Calls, Handling Rate, Abandon Rate, and Average Speed of Answer (ASA). Analyzes agent performance, tracks call trends over time, compares handled vs. abandoned calls, and includes fully dynamic slicers for Agent, Project, and Month. Helps improve service level, identify top-performing agents, reduce call abandonment, and make faster data-driven operational decisions.",
    image: sallaCallCenterImage,
    technologies: ["Power BI", "DAX", "Data Modeling", "Interactive Visualizations", "KPI Design", "Dashboard Storytelling"],
    githubUrl: "https://github.com/mernanabil1012-eng/PowerBI-Call-Center-Dashboard.git",
    icon: "powerbi",
  },
  {
    title: "🤖 RFM-Based Customer Analytics & Machine Learning Project",
    subtitle: "Graduation Project",
    description: "An advanced analytics web application focused on customer behavior modeling and prediction using RFM analysis and machine learning techniques. I led the machine learning and data analysis pipeline, transforming transactional data into predictive insights that support customer retention and targeted marketing strategies. The project leverages Python-based ML models for customer segmentation, churn prediction, and repurchase probability, integrated with a React frontend and Node.js backend to deliver interactive, business-ready dashboards across Customer, Revenue, Product, and Predictive views.",
    image: rfmAnalysisImage,
    technologies: ["Machine Learning", "RFM Analysis", "Churn Prediction", "Python", "Scikit-learn", "Data Analytics"],
    githubUrl: "https://github.com/Ziadali20/customer-segmentation.git",
    icon: "rfm",
    badge: "Grade: Excellent",
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
                <div className="p-6 pb-4 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                  {project.icon === "tableau" ? (
                      <BarChart3 className="w-8 h-8 text-primary" />
                    ) : project.icon === "powerbi" ? (
                      <PieChart className="w-8 h-8 text-primary" />
                    ) : project.icon === "excel" ? (
                      <FileSpreadsheet className="w-8 h-8 text-primary" />
                    ) : (
                      <Brain className="w-8 h-8 text-primary" />
                    )}
                  </div>
                  {project.subtitle && (
                    <span className="text-2xl font-bold text-primary mb-2">{project.subtitle}</span>
                  )}
                  {project.badge && (
                    <span className="px-3 py-1 text-xs bg-green-500/20 text-green-400 rounded-full mb-2 font-semibold">
                      {project.badge}
                    </span>
                  )}
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
                {project.image && (
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-6 pt-4">
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
