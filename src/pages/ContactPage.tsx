import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import PageLayout from '@/components/PageLayout';

const ContactPage = () => {
  return (
    <PageLayout currentPath="/contact">
      <div className="pt-20">
        <ContactSection />
      </div>
      <Footer />
    </PageLayout>
  );
};

export default ContactPage;
