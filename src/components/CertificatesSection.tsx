import { Award, ExternalLink } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const certificates = [
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
              Courses & Certificates
            </h3>
          </div>

          {/* Certificates grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {certificates.map((cert, index) => (
              <div
                key={cert.title}
                className={`group skill-card flex items-start gap-4 transition-all duration-700 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                  <span className="text-xs text-primary mt-1 inline-block">{cert.year}</span>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
