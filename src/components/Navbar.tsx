import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/ThemeProvider';
import { pages } from '@/components/PageLayout';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

  const navigateTo = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass py-3 shadow-lg shadow-primary/5">
      <div className="section-container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => navigateTo('/')}
            className="text-xl lg:text-2xl font-bold gradient-text hover:opacity-80 transition-opacity font-mono"
          >
            &lt;AYA /&gt;
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {pages.map((page) => (
              <button
                key={page.path}
                onClick={() => navigateTo(page.path)}
                className={`px-3 xl:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  location.pathname === page.path
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                {page.label}
              </button>
            ))}
          </div>

          {/* Theme toggle + Social Links - Desktop */}
          <div className="hidden lg:flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="hover:text-primary hover:bg-primary/10">
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:text-primary hover:bg-primary/10">
              <a href="https://github.com/aya-iskandar-10" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:text-primary hover:bg-primary/10">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:text-primary hover:bg-primary/10">
              <a href="mailto:ayaiskandar.inbox@gmail.com">
                <Mail className="w-5 h-5" />
              </a>
            </Button>
          </div>

          {/* Mobile: Theme toggle + Menu Button */}
          <div className="flex lg:hidden items-center gap-1">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="hover:text-primary hover:bg-primary/10">
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px] mt-4' : 'max-h-0'}`}>
          <div className="glass rounded-xl p-4 space-y-2">
            {pages.map((page) => (
              <button
                key={page.path}
                onClick={() => navigateTo(page.path)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  location.pathname === page.path
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                {page.label}
              </button>
            ))}
            <div className="flex items-center gap-2 pt-4 border-t border-border/50">
              <Button variant="ghost" size="icon" asChild className="hover:text-primary hover:bg-primary/10">
                <a href="https://github.com/aya-iskandar-10" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="hover:text-primary hover:bg-primary/10">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="hover:text-primary hover:bg-primary/10">
                <a href="mailto:ayaiskandar.inbox@gmail.com">
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
