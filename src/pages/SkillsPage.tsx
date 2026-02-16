import SkillsSection from '@/components/SkillsSection';
import PageLayout from '@/components/PageLayout';

const SkillsPage = () => {
  return (
    <PageLayout currentPath="/skills">
      <div className="pt-20">
        <SkillsSection />
      </div>
    </PageLayout>
  );
};

export default SkillsPage;
