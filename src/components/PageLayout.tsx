import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const pages = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/experience', label: 'Experience' },
  { path: '/projects', label: 'Projects' },
  { path: '/skills', label: 'Skills' },
  { path: '/certificates', label: 'Certificates' },
  { path: '/contact', label: 'Contact' },
];

interface PageLayoutProps {
  children: ReactNode;
  currentPath: string;
}

const PageLayout = ({ children, currentPath }: PageLayoutProps) => {
  const navigate = useNavigate();
  const currentIndex = pages.findIndex(p => p.path === currentPath);
  const prevPage = currentIndex > 0 ? pages[currentIndex - 1] : null;
  const nextPage = currentIndex < pages.length - 1 ? pages[currentIndex + 1] : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="min-h-screen flex flex-col"
    >
      <div className="flex-1">{children}</div>

      {/* Bottom navigation */}
      <div className="section-container pb-8 pt-4">
        <div className="flex items-center justify-between">
          {prevPage ? (
            <Button
              variant="ghost"
              onClick={() => navigate(prevPage.path)}
              className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <div className="text-left">
                <p className="text-xs text-muted-foreground">Previous</p>
                <p className="text-sm font-medium text-foreground group-hover:text-primary">{prevPage.label}</p>
              </div>
            </Button>
          ) : <div />}

          {/* Page dots */}
          <div className="hidden sm:flex items-center gap-2">
            {pages.map((page, i) => (
              <button
                key={page.path}
                onClick={() => navigate(page.path)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? 'w-6 bg-primary'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/60'
                }`}
                aria-label={`Go to ${page.label}`}
              />
            ))}
          </div>

          {nextPage ? (
            <Button
              variant="ghost"
              onClick={() => navigate(nextPage.path)}
              className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300"
            >
              <div className="text-right">
                <p className="text-xs text-muted-foreground">Next</p>
                <p className="text-sm font-medium text-foreground group-hover:text-primary">{nextPage.label}</p>
              </div>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          ) : <div />}
        </div>
      </div>
    </motion.div>
  );
};

export { pages };
export default PageLayout;
