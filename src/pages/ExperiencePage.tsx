import ExperienceSection from '@/components/ExperienceSection';
import PageLayout from '@/components/PageLayout';

const ExperiencePage = () => {
  return (
    <PageLayout currentPath="/experience">
      <div className="pt-20">
        <ExperienceSection />
      </div>
    </PageLayout>
  );
};

export default ExperiencePage;
