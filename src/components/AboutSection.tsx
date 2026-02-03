import { Code, Smartphone, Server, GraduationCap } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const highlights = [
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Flutter expert building cross-platform apps with clean architecture',
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Full-stack web apps using ASP.NET Core MVC and modern frontend',
  },
  {
    icon: Server,
    title: 'Backend Services',
    description: 'RESTful APIs with Spring Boot, database design, and integrations',
  },
  {
    icon: GraduationCap,
    title: 'Continuous Learning',
    description: 'Always expanding skills through courses and hands-on projects',
  },
];

const AboutSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="about" className="py-24 relative">
      <div className="section-container">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              About Me
            </h2>
            <h3 className="text-4xl sm:text-5xl font-bold gradient-text mb-6">
              Turning Ideas Into Reality
            </h3>
            <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
              Motivated developer with strong fundamentals in mobile and web app development. 
              I'm passionate about crafting clean, maintainable code and delivering exceptional user experiences.
            </p>
          </div>

          {/* Highlights grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className={`skill-card group transition-all duration-700 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Education card */}
          <div className="mt-16 glass rounded-2xl p-8 border border-border/50">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shrink-0">
                <GraduationCap className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-semibold text-foreground mb-1">
                  Bachelor of Science in Computer Science
                </h4>
                <p className="text-primary font-medium mb-2">Maaref University — Beirut, Lebanon</p>
                <p className="text-muted-foreground text-sm">
                  Graduated March 2025 • Technical Electives: Artificial Intelligence, Mobile Application Development (Native Java)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
