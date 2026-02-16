import AboutSection from '@/components/AboutSection';
import PageLayout from '@/components/PageLayout';

const AboutPage = () => {
  return (
    <PageLayout currentPath="/about">
      <div className="pt-20">
        <AboutSection />
      </div>
    </PageLayout>
  );
};

export default AboutPage;
