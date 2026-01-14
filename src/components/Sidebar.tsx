import { Home, User, GraduationCap, Briefcase, Mail } from "lucide-react";

const navItems = [
  { icon: Home, label: "Home", href: "#home" },
  { icon: User, label: "About", href: "#about" },
  { icon: GraduationCap, label: "Journey", href: "#journey" },
  { icon: Briefcase, label: "Skills", href: "#skills" },
  { icon: Mail, label: "Contact", href: "#contact" },
];

const Sidebar = () => {
  return (
    <nav className="fixed left-0 top-0 h-screen w-20 bg-sidebar flex flex-col items-center justify-center gap-2 z-50 nav-glow border-r border-border">
      {navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="group relative flex items-center justify-center w-12 h-12 rounded-xl text-muted-foreground hover:text-primary hover:bg-secondary transition-all duration-300"
          title={item.label}
        >
          <item.icon className="w-5 h-5" />
          <span className="absolute left-16 px-3 py-1 bg-card rounded-lg text-sm text-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {item.label}
          </span>
        </a>
      ))}
    </nav>
  );
};

export default Sidebar;
