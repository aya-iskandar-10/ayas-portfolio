import { useInView } from '@/hooks/useInView';

interface SkillCategory {
  title: string;
  skills: { name: string; level: number }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Dart', level: 95 },
      { name: 'Java', level: 85 },
      { name: 'C#', level: 80 },
      { name: 'JavaScript', level: 75 },
      { name: 'C++', level: 70 },
    ],
  },
  {
    title: 'Frameworks & Tools',
    skills: [
      { name: 'Flutter', level: 95 },
      { name: 'ASP.NET Core MVC', level: 80 },
      { name: 'Spring Boot', level: 75 },
      { name: 'Git', level: 85 },
      { name: 'REST APIs', level: 90 },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MySQL', level: 85 },
      { name: 'SQLite', level: 90 },
      { name: 'Database Design', level: 80 },
    ],
  },
  {
    title: 'Concepts & Practices',
    skills: [
      { name: 'Clean Architecture', level: 85 },
      { name: 'OOP', level: 90 },
      { name: 'Data Structures', level: 85 },
      { name: 'Problem Solving', level: 90 },
    ],
  },
];

const backendCapabilities = [
  'RESTful API Development',
  'Database Design & Optimization',
  'Authentication & Authorization',
  'Firebase & Supabase Integration',
  'Spring Boot Microservices',
  'ASP.NET Core Backend',
  'API Documentation (Postman)',
  'Server-side Logic',
];

const languages = [
  { name: 'Arabic', level: 'Native' },
  { name: 'English', level: 'Fluent' },
];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
  const { ref, isInView } = useInView({ threshold: 0.5 });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full transition-all duration-1000 ease-out"
          style={{
            width: isInView ? `${level}%` : '0%',
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="section-container relative">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Skills & Expertise
            </h2>
            <h3 className="text-4xl sm:text-5xl font-bold gradient-text">
              Technical Proficiency
            </h3>
          </div>

          {/* Skills grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className={`skill-card transition-all duration-700 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${categoryIndex * 100}ms` }}
              >
                <h4 className="text-lg font-semibold text-foreground mb-6">{category.title}</h4>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      delay={categoryIndex * 100 + skillIndex * 50}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Backend capabilities */}
          <div className="mb-16">
            <h4 className="text-2xl font-bold text-foreground text-center mb-8">
              Backend Capabilities
            </h4>
            <div className="flex flex-wrap justify-center gap-3">
              {backendCapabilities.map((capability, index) => (
                <span
                  key={capability}
                  className={`px-4 py-2 rounded-full glass border border-primary/30 text-sm font-medium text-foreground transition-all duration-500 hover:border-primary hover:bg-primary/10 ${
                    isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {capability}
                </span>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <h4 className="text-2xl font-bold text-foreground text-center mb-8">
              Languages
            </h4>
            <div className="flex justify-center gap-6">
              {languages.map((lang, index) => (
                <div
                  key={lang.name}
                  className={`skill-card text-center min-w-[150px] transition-all duration-700 ${
                    isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <h5 className="text-lg font-semibold text-foreground mb-1">{lang.name}</h5>
                  <span className="text-primary text-sm font-medium">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
