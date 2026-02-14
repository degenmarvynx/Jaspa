import { Container } from '@/components/ui/Container';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Container>
        <div className="py-16 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-jaspa-blue mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Last updated: January 2025
            </p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-jaspa-blue mb-4">1. Information We Collect</h2>
              <p className="text-gray-700 mb-4">
                We collect information you provide directly to us, such as when you create an account, 
                apply for a loan, or contact customer support. This may include your name, email address, 
                phone number, and financial information.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-jaspa-blue mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">
                We use the information we collect to provide, maintain, and improve our services, 
                process transactions, send you technical notices and support messages, and comply with legal obligations.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-jaspa-blue mb-4">3. Information Sharing</h2>
              <p className="text-gray-700 mb-4">
                We do not sell your personal information. We may share information with third parties 
                who perform services on our behalf, when required by law, or with your consent.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-jaspa-blue mb-4">4. Security</h2>
              <p className="text-gray-700 mb-4">
                We implement reasonable security measures to protect your information from unauthorized access, 
                alteration, disclosure, or destruction.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-jaspa-blue mb-4">5. Your Rights</h2>
              <p className="text-gray-700 mb-4">
                You have the right to access, correct, or delete your personal information. 
                You may also opt out of certain communications from us.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-jaspa-blue mb-4">6. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-gray-700">
                Email: privacy@jaspa.com<br />
                Phone: +234 800 000 0000<br />
                Address: Jaspa MFB Headquarters, Lagos, Nigeria
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}