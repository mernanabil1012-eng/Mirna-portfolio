import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "mernanabil1012@gmail.com",
    href: "mailto:mernanabil1012@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "01210106042",
    href: "tel:+201210106042",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Cairo, Egypt",
    href: "#",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Mirna Nabil",
    href: "https://www.linkedin.com/in/mirna-nabil-27781030b",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-8 lg:px-16">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-2">
          Contact <span className="text-gradient">Me</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12">Get in Touch</p>

        <div className="text-center mb-12">
          <h3 className="text-xl font-semibold mb-4">
            I'm available for entry-level and internship positions
          </h3>
          <p className="text-muted-foreground">
            Have an opportunity in mind? Let's talk!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {contactInfo.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-4 p-6 bg-secondary rounded-xl card-hover group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                <item.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{item.label}</p>
                <p className="font-semibold">{item.value}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            © 2024 Mirna Nabil. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
