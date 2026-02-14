import { Container } from '@/components/ui/Container';

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Container>
        <div className="py-16 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-jaspa-blue mb-8">Cookie Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Last updated: January 2025
            </p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-jaspa-blue mb-4">1. What Are Cookies</h2>
              <p className="text-gray-700 mb-4">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
                They are widely used to make websites work more efficiently and provide information to website owners.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-jaspa-blue mb-4">2. How We Use Cookies</h2>
              <p className="text-gray-700 mb-4">
                We use cookies to improve your browsing experience, analyze site traffic, personalize content, 
                and serve targeted advertisements. We also use cookies to understand how our website is being used.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-jaspa-blue mb-4">3. Types of Cookies We Use</h2>
              <div className="text-gray-700 mb-4">
                <p className="mb-2"><strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly.</p>
                <p className="mb-2"><strong>Analytics Cookies:</strong> These cookies help us understand how visitors interact with our website.</p>
                <p className="mb-2"><strong>Functionality Cookies:</strong> These cookies allow us to remember your preferences and choices.</p>
                <p className="mb-2"><strong>Advertising Cookies:</strong> These cookies are used to deliver relevant advertisements to you.</p>
              </div>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-jaspa-blue mb-4">4. Managing Cookies</h2>
              <p className="text-gray-700 mb-4">
                Most web browsers allow you to control cookies through their settings. You can choose to accept 
                or reject cookies, or to be notified when cookies are being sent to your device.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-jaspa-blue mb-4">5. Changes to This Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update this Cookie Policy from time to time. We will notify you of any changes by 
                posting the new policy on this page and updating the effective date.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-jaspa-blue mb-4">6. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have questions about this Cookie Policy, please contact us at:
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