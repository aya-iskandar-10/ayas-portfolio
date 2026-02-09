import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'ayaiskandar.inbox@gmail.com',
    href: 'mailto:ayaiskandar.inbox@gmail.com',
  },
  {
    icon: Phone,
    label: 'WhatsApp',
    value: '+961 81 099 183',
    href: 'https://wa.me/+96181099183',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Beirut, Lebanon',
    href: '#',
  },
];

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/aya-iskandar-10',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com',
  },
];

const ContactSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

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
              Get In Touch
            </h2>
            <h3 className="text-4xl sm:text-5xl font-bold gradient-text mb-6">
              Let's Work Together
            </h3>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              I'm currently open to new opportunities. Whether you have a project in mind 
              or just want to connect, I'd love to hear from you!
            </p>
          </div>

          <div className="max-w-2xl mx-auto space-y-8">
            {/* Contact info */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`flex items-center gap-4 p-4 glass rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-500 group ${
                    isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social links */}
            <div
              className={`transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <p className="text-sm text-muted-foreground mb-4">Connect with me</p>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl glass border border-border/50 flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
                  >
                    <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
