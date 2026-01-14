import { Calendar, MapPin, Phone } from "lucide-react";
import profileImage from "@/assets/mirna-profile.png";

const stats = [
  { value: "2003", label: "Born" },
  { value: "IS", label: "Major" },
  { value: "Cairo", label: "Location" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-8 lg:px-16 bg-card/50">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-2">
          About <span className="text-gradient">Me</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12">My Introduction</p>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center section-fade">
            <div className="w-80 h-80 rounded-2xl overflow-hidden border-2 border-primary/30 card-hover">
              <img
                src={profileImage}
                alt="Mirna Nabil"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 section-fade">
            <p className="text-muted-foreground leading-relaxed">
              A motivated Information Systems graduate from Helwan University with a strong foundation in data analysis and programming. I'm passionate about transforming raw data into meaningful insights and solving business problems using technology.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With proficiency in SQL, Python, Power BI, and Machine Learning, I'm always eager to learn new technologies and contribute to innovative projects. I thrive in collaborative environments and bring strong problem-solving and analytical skills to every challenge.
            </p>

            {/* Info Items */}
            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Calendar className="w-5 h-5 text-primary" />
                <span>Date of Birth: December 10, 2003</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Location: Cairo, Egypt</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <span>Mobile: 01210106042</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 bg-secondary rounded-xl card-hover"
                >
                  <p className="text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
