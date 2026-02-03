import { ArrowDown, Download, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-blob animation-delay-400" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl animate-pulse-glow" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="section-container relative z-10 text-center">
        <div className="space-y-8">
          {/* Main heading */}
          <div className="space-y-4 animate-fade-up">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="text-foreground">Hi, I'm </span>
              <span className="gradient-text">Aya Iskandar</span>
            </h1>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-muted-foreground">
              Mobile & Web Developer
            </p>
          </div>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed animate-fade-up animation-delay-200">
            Crafting clean architectures, responsive UIs, and scalable backend integrations. 
            Passionate about building efficient, user-friendly apps with Flutter, ASP.NET Core, and Spring Boot.
          </p>

          {/* Location + Status badge */}
          <div className="flex flex-col items-center gap-3 animate-fade-up animation-delay-400">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Beirut, Lebanon</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm text-muted-foreground">Available for opportunities</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up animation-delay-800">
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="group bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-xl glow-pink transition-all duration-300"
            >
              Get Started
              <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 hover:bg-primary/10 hover:border-primary px-8 py-6 text-lg rounded-xl transition-all duration-300"
              asChild
            >
              <a href="#contact">
                <Download className="mr-2 w-5 h-5" />
                Get in Touch
              </a>
            </Button>
          </div>

          {/* Tech stack preview */}
          <div className="pt-12 animate-fade-up animation-delay-1000">
            <p className="text-sm text-muted-foreground mb-4">Tech I work with</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {['Flutter', 'Dart', 'Spring Boot', 'ASP.NET', 'Java', 'MySQL'].map((tech) => (
                <span key={tech} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
