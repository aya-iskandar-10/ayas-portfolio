import { useState } from 'react';
import { Award, ExternalLink, Briefcase } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import certificateImage from '@/assets/images/aya-certificate.jpeg';

const courses = [
  {
    title: 'Flutter and Dart Complete Guide',
    issuer: 'Udemy',
    year: '2025',
  },
  {
    title: 'The Complete Flutter Development Bootcamp',
    issuer: 'Dr. Angela Yu',
    year: '2025',
  },
  {
    title: '.NET Courses',
    issuer: 'YouTube',
    year: '2025',
  },
  {
    title: 'Flutter BloC – Zero to Hero Complete Course',
    issuer: 'Tiberiu Potec',
    year: '2025',
  },
];

const CertificatesSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [certificateOpen, setCertificateOpen] = useState(false);

  return (
    <section className="py-24 relative">
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
              Certifications
            </h2>
            <h3 className="text-4xl sm:text-5xl font-bold gradient-text">
              Certificates & Courses
            </h3>
          </div>

          {/* Internship Certificate */}
          <div className="max-w-4xl mx-auto mb-12">
            <div
              className={`skill-card transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shrink-0">
                  <Briefcase className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-foreground">
                    Mobile Developer Intern
                  </h4>
                  <p className="text-primary font-medium">Auvia Company</p>
                  <p className="text-muted-foreground text-sm mt-1">
                    Sep 2025 – Dec 2025 · Built Flutter apps including audio transcription, face recognition, and edtech platforms. Integrated Firebase, Supabase, and local storage solutions.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-3 border-primary/30 hover:bg-primary/10 hover:border-primary"
                    onClick={() => setCertificateOpen(true)}
                  >
                    <Award className="w-4 h-4 mr-2" />
                    View Certificate
                    <ExternalLink className="w-3 h-3 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Courses */}
          <div className="max-w-4xl mx-auto">
            <h4 className="text-xl font-semibold text-foreground mb-6 text-center">Courses</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {courses.map((cert, index) => (
                <div
                  key={cert.title}
                  className={`skill-card flex items-start gap-4 transition-all duration-700 ${
                    isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center shrink-0">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-foreground">
                      {cert.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                    <span className="text-xs text-primary mt-1 inline-block">{cert.year}</span>
                  </div>
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

export default CertificatesSection;
