import { useState } from 'react';
import { Briefcase, Calendar, CheckCircle2, Award, Users, ExternalLink } from 'lucide-react';
import certificateImage from '@/assets/images/aya-certificate.jpeg';

// To use your certificate, place your PNG in src/assets/ and update the import below:
// import certificateImage from '@/assets/auvia-certificate.png';

import { useInView } from '@/hooks/useInView';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const experiences = [
  {
    title: 'Full-Stack Developer',
    company: 'EKTIDAR',
    period: 'Jan 2026 – Present',
    status: 'In Progress',
    type: 'Freelance',
    teamNote: 'Collaborating with a professional development team on a freelance basis',
    responsibilities: [
      'Maintaining and enhancing a university platform built with Angular (TypeScript) frontend and Java backend',
      'Fixing bugs, testing features, and writing clean, maintainable code',
      'Building additional features for student support sessions, instructor management, and activity scheduling',
      'Supporting platform modules including classes, activities, and session management for university students',
      'Collaborating on ideas to improve user experience and platform functionality',
    ],
  },
  {
    title: 'Mobile Developer Intern',
    company: 'Auvia Company – Office',
    period: 'Sep 2025 – Dec 2025',
    status: 'Done',
    type: 'Internship',
    hasCertificate: true,
    responsibilities: [
      'Built a full-featured Flutter app for audio recording, transcription (STT in Arabic), and local data management',
      'Developed face recognition app using ML-kit with live camera tracking of facial expressions and gestures',
      'Created edtech syndicate app with membership form and card generation features',
      'Collaborated in team using Git for version control',
      'Set up iOS development environment using VMware macOS',
      'Integrated Firebase and Supabase backend services',
      'Utilized SQLite and shared preferences for efficient local data management',
      'Focused on clean UI/UX principles throughout development',
    ],
  },
];

const additionalExperience = [
  {
    title: 'E-commerce Website Development',
    description: 'Designed and developed a full e-commerce website using ASP.NET Core MVC',
  },
  {
    title: 'Data Structures Tutor',
    description: 'Served as a data structures tutor and organized coding support sessions for school students',
  },
];

const ExperienceSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [certificateOpen, setCertificateOpen] = useState(false);

  return (
    <section id="experience" className="py-16 sm:py-24 relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />

      <div className="section-container relative">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Section header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Experience
            </h2>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text">
              Work History
            </h3>
          </div>

          {/* Main experience */}
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className={`glass rounded-2xl p-5 sm:p-8 border border-border/50 mb-6 sm:mb-8 transition-all duration-700 ${
                  isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Header */}
                <div className="flex flex-col gap-4 mb-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shrink-0">
                      <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg sm:text-xl font-semibold text-foreground">{exp.title}</h4>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-medium">
                      {exp.status}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Team collaboration note for EKTIDAR */}
                {exp.teamNote && (
                  <div className="flex items-center gap-2 mb-5 p-3 rounded-lg bg-primary/5 border border-primary/20">
                    <Users className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-sm text-muted-foreground">{exp.teamNote}</span>
                  </div>
                )}

                {/* Responsibilities */}
                <ul className="space-y-2 sm:space-y-3">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 sm:gap-3 text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Certificate button for Auvia */}
                {exp.hasCertificate && (
                  <div className="mt-6 pt-4 border-t border-border/50">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setCertificateOpen(true)}
                      className="border-primary/30 hover:bg-primary/10 hover:border-primary"
                    >
                      <Award className="w-4 h-4 mr-2" />
                      View Internship Certificate
                      <ExternalLink className="w-3 h-3 ml-2" />
                    </Button>
                  </div>
                )}
              </div>
            ))}

            {/* Additional experience */}
            <h4 className="text-lg sm:text-xl font-semibold text-foreground mb-4 sm:mb-6 mt-8 sm:mt-12">Additional Experience</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {additionalExperience.map((item, index) => (
                <div
                  key={item.title}
                  className={`skill-card transition-all duration-700 ${
                    isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${(index + 1) * 200}ms` }}
                >
                  <h5 className="text-base sm:text-lg font-semibold text-foreground mb-2">{item.title}</h5>
                  <p className="text-muted-foreground text-xs sm:text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Dialog */}
      <Dialog open={certificateOpen} onOpenChange={setCertificateOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              Internship Certificate
            </DialogTitle>
            <DialogDescription>
              Auvia Company – Mobile Developer Intern
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
           <img 
              src={certificateImage} 
              alt="Auvia Internship Certificate" 
              className="w-full rounded-xl border border-border/50 shadow-lg"
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ExperienceSection;
