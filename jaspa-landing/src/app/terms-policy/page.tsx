import { Container } from '@/components/ui/Container';

export default function TermsPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Container>
        <div className="py-16 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-jaspa-blue mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Last updated: January 2025
            </p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-jaspa-blue mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing and using Jaspa MFB services, you agree to be bound by these Terms of Service. 
                If you do not agree to these terms, please do not use our services.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-jaspa-blue mb-4">2. Use of Services</h2>
              <p className="text-gray-700 mb-4">
                You may use our services only in compliance with these Terms and all applicable laws and regulations. 
                You are responsible for all activities that occur under your account.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-jaspa-blue mb-4">3. Account Security</h2>
              <p className="text-gray-700 mb-4">
                You are responsible for maintaining the confidentiality of your account credentials. 
                You agree to notify us immediately of any unauthorized use of your account.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-jaspa-blue mb-4">4. Fees and Charges</h2>
              <p className="text-gray-700 mb-4">
                Certain services may be subject to fees and charges. All fees will be clearly disclosed 
                to you before you incur any charges.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-jaspa-blue mb-4">5. Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                To the maximum extent permitted by law, Jaspa MFB shall not be liable for any indirect, 
                incidental, special, consequential, or punitive damages.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-jaspa-blue mb-4">6. Changes to Terms</h2>
              <p className="text-gray-700 mb-4">
                We reserve the right to modify these Terms at any time. We will notify you of any material 
                changes through appropriate channels.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-jaspa-blue mb-4">7. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                If you have questions about these Terms of Service, please contact us at:
              </p>
              <p className="text-gray-700">
                Email: legal@jaspa.com<br />
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