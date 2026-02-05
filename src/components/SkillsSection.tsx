import { useInView } from '@/hooks/useInView';
import { 
  Code2, 
  Smartphone, 
  Server, 
  Database, 
  GitBranch, 
  Layers, 
  Cpu, 
  Globe,
  Braces,
  FileCode,
  Box,
  Workflow,
  Languages
} from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ReactNode;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    icon: <Code2 className="w-6 h-6" />,
    skills: [
      { name: 'Dart', icon: <Smartphone className="w-5 h-5" /> },
      { name: 'Java', icon: <FileCode className="w-5 h-5" /> },
      { name: 'C#', icon: <Braces className="w-5 h-5" /> },
      { name: 'JavaScript', icon: <Globe className="w-5 h-5" /> },
      { name: 'C++', icon: <Cpu className="w-5 h-5" /> },
    ],
  },
  {
    title: 'Frameworks & Tools',
    icon: <Layers className="w-6 h-6" />,
    skills: [
      { name: 'Flutter', icon: <Smartphone className="w-5 h-5" /> },
      { name: 'ASP.NET Core MVC', icon: <Server className="w-5 h-5" /> },
      { name: 'Spring Boot', icon: <Box className="w-5 h-5" /> },
      { name: 'Git', icon: <GitBranch className="w-5 h-5" /> },
      { name: 'REST APIs', icon: <Workflow className="w-5 h-5" /> },
    ],
  },
  {
    title: 'Databases',
    icon: <Database className="w-6 h-6" />,
    skills: [
      { name: 'MySQL', icon: <Database className="w-5 h-5" /> },
      { name: 'SQLite', icon: <Database className="w-5 h-5" /> },
      { name: 'Database Design', icon: <Layers className="w-5 h-5" /> },
    ],
  },
  {
    title: 'Concepts & Practices',
    icon: <Workflow className="w-6 h-6" />,
    skills: [
      { name: 'Clean Architecture', icon: <Box className="w-5 h-5" /> },
      { name: 'OOP', icon: <Braces className="w-5 h-5" /> },
      { name: 'Data Structures', icon: <Layers className="w-5 h-5" /> },
      { name: 'Problem Solving', icon: <Cpu className="w-5 h-5" /> },
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className={`skill-card transition-all duration-700 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${categoryIndex * 100}ms` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    {category.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-foreground">{category.title}</h4>
                </div>
                
                {/* Skills with icons */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/50 
                        transition-all duration-300 hover:border-primary/50 hover:bg-primary/10 group ${
                        isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                      }`}
                      style={{ transitionDelay: `${categoryIndex * 100 + skillIndex * 50}ms` }}
                    >
                      <span className="text-muted-foreground group-hover:text-primary transition-colors">
                        {skill.icon}
                      </span>
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Backend capabilities */}
          <div className="mb-16">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Server className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-bold text-foreground">
                Backend Capabilities
              </h4>
            </div>
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
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Languages className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-bold text-foreground">
                Languages
              </h4>
            </div>
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
