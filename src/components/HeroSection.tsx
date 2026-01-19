import { Download, FolderOpen } from "lucide-react";
import profileImage from "@/assets/mirna-profile.png";
import { useTypewriter } from "@/hooks/useTypewriter";
// استيراد الـ CV مباشرة
import cvFile from "/public/Mirna_Nabil_CV.pdf";

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/mirna-nabil-27781030b",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/share/1DcdGgcV6b/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    name: "Email",
    url: "mailto:mernanabil1012@gmail.com",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>
    ),
  },
];

const roles = ["Power BI Engineer", "Dashboard Designer", "Data Analyst"];

const HeroSection = () => {
  const { text } = useTypewriter({ words: roles });

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      
      <div className="container max-w-7xl 2xl:max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center relative z-10">
        {/* Text Content */}
        <div className="space-y-6 section-fade">
          <p className="text-muted-foreground text-lg xl:text-xl">Hello, It's Me</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold">
            <span className="text-foreground">Mirna </span>
            <span className="text-gradient glow-text">Nabil</span>
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold text-muted-foreground">
            And I'm a <span className="text-primary">{text}</span>
            <span className="animate-pulse text-primary">|</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-lg">
            A motivated Data Analyst with expertise in Power BI, Tableau, and data visualization. Passionate about transforming raw data into meaningful insights and solving business problems using analytics and technology.
          </p>

          {/* Social Links */}
          <div className="flex gap-4 pt-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                title={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href={cvFile}
              download="Mirna_Nabil_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 flex items-center gap-2 inline-flex"
              aria-label="Download CV"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
            <a
              href="#skills"
              className="px-8 py-3 border border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center gap-2"
            >
              <FolderOpen className="w-4 h-4" />
              View Skills
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-72 h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary glow-border animate-float">
              <img
                src={profileImage}
                alt="Mirna Nabil"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative circles */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border border-primary/30 rounded-full" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 border border-primary/20 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
