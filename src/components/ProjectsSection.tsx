import { Play, Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useInView } from '@/hooks/useInView';
import facevideo from '@/assets/videos/face-recognition-demo.mp4';
import ecommercevideo from '@/assets/videos/ecommerce-demo.mp4';
import voicevideo from '@/assets/videos/audio-recording-demo.mp4';
import edtechdemo from '@/assets/videos/edtech-demo.mp4';

interface Project {
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  videoUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  isFeatured?: boolean;
}

const projects: Project[] = [
  {
    title: 'School Bus Tracking System',
    description: 'Capstone project featuring a comprehensive school bus tracking solution with real-time GPS tracking, secure check-in/out, and emergency features.',
    features: [
      'Real-time GPS tracking using OSM Maps',
      'Parent and driver interfaces',
      'Secure student check-in/check-out system',
      'Notification reminders and emergency alerts',
      'Admin dashboard for database management',
    ],
    technologies: ['Flutter', 'Spring Boot', 'MySQL', 'REST API', 'OSM Maps'],
    isFeatured: true,
  },
  {
    title: 'Audio Recording & Transcription App',
    description: 'Flutter application for audio recording with Arabic speech-to-text transcription and local data management.',
    features: [
      'Audio recording functionality',
      'Arabic STT transcription',
      'Local data management with SQLite',
      'Clean UI/UX design',
    ],
    technologies: ['Flutter', 'Dart', 'SQLite', 'Speech-to-Text'],
    videoUrl: voicecideo,
  },
  {
    title: 'Face Recognition App',
    description: 'Mobile app using ML-kit for real-time face recognition and expression tracking.',
    features: [
      'Live camera face tracking',
      'Facial expression detection',
      'Gesture recognition',
      'ML-kit integration',
    ],
    technologies: ['Flutter', 'ML-kit', 'Dart', 'Camera API'],
    videoUrl: facevideo,
  },
  {
    title: 'EdTech Syndicate App',
    description: 'Educational technology app with membership management and card generation features.',
    features: [
      'Form-based membership application',
      'Membership card generation',
      'User management',
      'Clean interface design',
    ],
    technologies: ['Flutter', 'Firebase', 'Dart'],
    videoUrl : edtechdemo,
  },
  {
    title: 'E-commerce Website',
    description: 'Full-featured e-commerce website built with ASP.NET Core MVC.',
    features: [
      'Product catalog management',
      'Shopping cart functionality',
      'User authentication',
      'Admin dashboard',
    ],
    technologies: ['ASP.NET Core MVC', 'C#', 'SQL Server', 'Bootstrap'],
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`group relative glass rounded-2xl border border-border/50 overflow-hidden transition-all duration-700 hover-lift ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${project.isFeatured ? 'md:col-span-2' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {project.isFeatured && (
        <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-gradient-to-r from-primary to-secondary text-xs font-medium text-primary-foreground">
          Featured Project
        </div>
      )}


      {/* Content */}
      <div className="p-6 space-y-4">
        <h4 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
          {project.title}
        </h4>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Features */}
        <ul className="space-y-2">
          {project.features.slice(0, 3).map((feature, i) => (
            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        {/* Technologies */}
        <div className="pt-4 border-t border-border/50">
          <p className="text-xs text-muted-foreground mb-3">Technologies Used</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action buttons */}
        {project.videoUrl && (
            <video
              src={project.videoUrl}
              controls
              className="w-full rounded-xl mt-4 border border-border/50"
            />
          )}
        <div className="flex items-center gap-3 pt-4">
          {project.githubUrl && (
            <Button variant="outline" size="sm" className="border-primary/30 hover:bg-primary/10" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                Code
              </a>
            </Button>
          )}
          {project.liveUrl && (
            <Button variant="outline" size="sm" className="border-primary/30 hover:bg-primary/10" asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.05 });

  return (
    <section id="projects" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-secondary/5 to-transparent" />

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
              Portfolio
            </h2>
            <h3 className="text-4xl sm:text-5xl font-bold gradient-text mb-6">
              Featured Projects
            </h3>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              A collection of projects showcasing my skills in mobile and web development, 
              from real-time tracking systems to ML-powered applications.
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
