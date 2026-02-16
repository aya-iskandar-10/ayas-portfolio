import ProjectsSection from '@/components/ProjectsSection';
import PageLayout from '@/components/PageLayout';

const ProjectsPage = () => {
  return (
    <PageLayout currentPath="/projects">
      <div className="pt-20">
        <ProjectsSection />
      </div>
    </PageLayout>
  );
};

export default ProjectsPage;
