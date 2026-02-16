import CertificatesSection from '@/components/CertificatesSection';
import PageLayout from '@/components/PageLayout';

const CertificatesPage = () => {
  return (
    <PageLayout currentPath="/certificates">
      <div className="pt-20">
        <CertificatesSection />
      </div>
    </PageLayout>
  );
};

export default CertificatesPage;
