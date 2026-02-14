import React from 'react';

export const LegalTerms: React.FC = () => {
  return (
    <section aria-labelledby="legal-heading" className="bg-white py-8 md:py-12">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1196px]">
        <header>
          <h2 id="legal-heading" className="text-[#044ea4] font-extrabold text-[30px] md:text-[44px] leading-[1.1] text-center">
            Legal & Compliance
          </h2>
          <div role="separator" aria-hidden="true" className="mx-auto mt-4 h-[4px] w-full bg-[#df2202] rounded-full" />
          <h3 className="mt-6 text-[#044ea4] font-bold text-[18px] md:text-[22px]">Terms & Conditions</h3>
          <p className="text-[#012e6d] text-[13px] md:text-[15px] italic">Last Updated — Nov, 2025</p>
        </header>

        <article className="mt-8 space-y-6 text-[#012e6d]">
          <p className="leading-[28px] text-[16px] md:text-[18px]">
            These Terms & Conditions govern your access and use of Jaspa Microfinance Bank’s digital banking services including our website,
            mobile application, electronic banking channels, products, tools, platforms, and all features provided directly or indirectly by
            Jaspa Microfinance Bank Limited (“Jaspa MFB”, “we”, “our”, “us”). By accessing or using any Jaspa platform, you agree that you
            have read, understood, and accepted these Terms.
          </p>

          <section aria-labelledby="regulatory-status">
            <h3 id="regulatory-status" className="text-[#044ea4] font-semibold text-[18px] md:text-[22px]">1. Regulatory Status</h3>
            <p className="leading-[26px] md:leading-[30px]">
              Jaspa Microfinance Bank Limited is a fully licensed Microfinance Bank regulated by the Central Bank of Nigeria (CBN). All qualifying
              deposits are protected by the Nigeria Deposit Insurance Corporation (NDIC) to the statutory limits set under Nigerian law.
            </p>
          </section>

          <div role="separator" aria-hidden="true" className="mx-auto mt-8 h-[3px] w-full bg-[#df2202]" />

          <section aria-labelledby="cookie-heading" className="mt-8">
            <h3 id="cookie-heading" className="text-[#044ea4] font-extrabold text-[28px] md:text-[32px]">Cookie Policy</h3>
            <p className="text-[#012e6d] text-[13px] md:text-[15px] italic">Last Updated — Nov, 2025</p>

            <p className="mt-6 text-[16px] md:text-[18px] leading-[28px]">
              This Cookie Policy explains how Jaspa Microfinance Bank Limited (“Jaspa MFB”, “we”, “our”, “us”) uses cookies and similar tracking
              technologies on our website and digital platforms. By continuing to browse or use our website, you consent to our use of cookies in
              accordance with this policy.
            </p>

            <h4 className="mt-6 text-[#044ea4] font-semibold text-[18px] md:text-[22px]">1. What Are Cookies?</h4>
            <p className="leading-[26px] md:leading-[30px]">
              Cookies are small text files stored on your device when you visit a website. They help websites work properly, improve security,
              remember your preferences and provide a better user experience.
            </p>

            <h4 className="mt-6 text-[#044ea4] font-semibold text-[18px] md:text-[22px]">2. Types of Cookies We Use</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-medium">Essential Cookies:</span> required for security, navigation, fraud prevention, login, load balancing
                and basic functionality. You cannot disable these cookies because the platform cannot function without them.
              </li>
              <li>
                <span className="font-medium">Performance & Analytics Cookies:</span> help us understand how users interact with the website —
                which pages are visited most, how users navigate and how we may improve speed, flow, UI structure, accessibility and usability.
                These cookies generally do not identify you personally.
              </li>
              <li>
                <span className="font-medium">Functional Cookies:</span> allow the website to remember selections or preferences (e.g. language,
                last page visited, UI display preferences).
              </li>
              <li>
                <span className="font-medium">Marketing & Personalization Cookies:</span> where applicable, used to show relevant offers, improve
                personalization or measure the effectiveness of communications and campaigns. These may be implemented by Jaspa or trusted partners.
              </li>
            </ul>

            <h4 className="mt-6 text-[#044ea4] font-semibold text-[18px] md:text-[22px]">3. Third-Party Cookies</h4>
            <p className="leading-[26px] md:leading-[30px]">
              We may allow certain trusted third parties (e.g. analytics providers, measurement partners and advertising technology providers) to
              set cookies on our website to help us analyze usage and improve our digital services. These third parties must comply with applicable
              data protection and privacy laws.
            </p>

            <h4 className="mt-6 text-[#044ea4] font-semibold text-[18px] md:text-[22px]">4. How You Can Manage or Disable Cookies</h4>
            <p className="leading-[26px] md:leading-[30px]">
              Most browsers allow you to manage or block cookies through their settings. Disabling some cookies may affect your ability to use
              certain website features or impact performance. Instructions can be found in your browser’s “Settings” or “Privacy” menu.
            </p>

            <h4 className="mt-6 text-[#044ea4] font-semibold text-[18px] md:text-[22px]">5. Updates to This Policy</h4>
            <p className="leading-[26px] md:leading-[30px]">
              We may update this Cookie Policy periodically to reflect changes in legislation, technology or product features. We encourage you to
              review this page regularly.
            </p>

            <h4 className="mt-6 text-[#044ea4] font-semibold text-[18px] md:text-[22px]">6. Contact</h4>
            <p className="leading-[26px] md:leading-[30px]">
              For questions or concerns about our use of cookies, please contact us through official support channels displayed on the website or
              mobile app.
            </p>
          </section>

          <section aria-labelledby="eligibility">
            <h3 id="eligibility" className="text-[#044ea4] font-semibold text-[18px] md:text-[22px]">2. Eligibility to Use Our Services</h3>
            <ul className="list-disc pl-6 space-y-1 md:space-y-2">
              <li>Be at least 18 years old (or the legal age of majority in your jurisdiction).</li>
              <li>Reside within Nigeria or in any jurisdiction legally permitted to use our products.</li>
              <li>Comply with all KYC/BVN identity verification and anti-money laundering requirements mandated by CBN regulations.</li>
            </ul>
            <p className="mt-2 text-[15px] md:text-[16px]">Some products may require additional eligibility.</p>
          </section>

          <section aria-labelledby="channels">
            <h3 id="channels" className="text-[#044ea4] font-semibold text-[18px] md:text-[22px]">3. Digital Banking Channels</h3>
            <p className="leading-[26px] md:leading-[30px]">
              Jaspa’s products and services are primarily accessed via the Jaspa Mobile App. The website may provide supporting tools, resources,
              guides, calculators, or links to our digital banking channels, but account creation, onboarding, identity verification, and most
              transactional services currently occur within the Jaspa Mobile App. Where future access is made available directly via the website,
              these Terms will continue to apply.
            </p>
          </section>

          <section aria-labelledby="responsibilities">
            <h3 id="responsibilities" className="text-[#044ea4] font-semibold text-[18px] md:text-[22px]">4. User Responsibilities</h3>
            <ul className="list-disc pl-6 space-y-1 md:space-y-2">
              <li>Keep your login credentials secure.</li>
              <li>Do not share your PIN, password, BVN, or one-time password codes with anyone.</li>
              <li>Immediately report any suspected fraudulent activity.</li>
              <li>Ensure all information provided to Jaspa is accurate.</li>
            </ul>
            <p className="mt-2 text-[15px] md:text-[16px]">
              Jaspa will not be liable for losses resulting from compromised devices, shared credentials, or negligence in safeguarding personal
              access details.
            </p>
          </section>

          <section aria-labelledby="fees">
            <h3 id="fees" className="text-[#044ea4] font-semibold text-[18px] md:text-[22px]">5. Fees, Charges & Limits</h3>
            <p className="leading-[26px] md:leading-[30px]">
              By using Jaspa services, you consent to all applicable charges, limits, interest rules, account restrictions, and fees associated
              with our services. Certain services may be free while others may attract fees. Fees are subject to review based on regulatory
              guidelines, market realities, and compliance requirements.
            </p>
          </section>

          <section aria-labelledby="international">
            <h3 id="international" className="text-[#044ea4] font-semibold text-[18px] md:text-[22px]">6. International Transfers</h3>
            <p className="leading-[26px] md:leading-[30px]">
              International money transfers, where provided, may be subject to FX availability, settlement limits, compliance with sanctions, and
              cross-border regulations. Processing times, FX rates, and fees may vary.
            </p>
          </section>

          <section aria-labelledby="security">
            <h3 id="security" className="text-[#044ea4] font-semibold text-[18px] md:text-[22px]">7. Security & Fraud Monitoring</h3>
            <p className="leading-[26px] md:leading-[30px]">
              We apply multi-layered security, encryption, authentication, fraud detection, and monitoring systems. For fraud prevention and
              compliance, transactions may be delayed, reversed, frozen, or canceled where suspicious activity is detected or required by law.
            </p>
          </section>

          <section aria-labelledby="prohibited">
            <h3 id="prohibited" className="text-[#044ea4] font-semibold text-[18px] md:text-[22px]">8. Prohibited Use</h3>
            <ul className="list-disc pl-6 space-y-1 md:space-y-2">
              <li>Money laundering or terrorist financing.</li>
              <li>Illegal betting or unlicensed gambling.</li>
              <li>Fraud or financial crime.</li>
              <li>Sanctions-restricted activity.</li>
              <li>Any activity prohibited by CBN, NDIC, or Nigerian law.</li>
            </ul>
          </section>

          <section aria-labelledby="liability">
            <h3 id="liability" className="text-[#044ea4] font-semibold text-[18px] md:text-[22px]">9. Liability</h3>
            <p className="leading-[26px] md:leading-[30px]">
              To the maximum extent permitted by law, Jaspa is not liable for indirect, incidental, or consequential damages including loss of
              income, profits, savings, business opportunities, or third-party claims resulting from the use of our services.
            </p>
          </section>

          <section aria-labelledby="modification">
            <h3 id="modification" className="text-[#044ea4] font-semibold text-[18px] md:text-[22px]">10. Service Modification & Suspension</h3>
            <p className="leading-[26px] md:leading-[30px]">
              Jaspa may modify, update, suspend, or discontinue any service or feature at any time to comply with laws, improve security, or
              upgrade functionality.
            </p>
          </section>

          <section aria-labelledby="law">
            <h3 id="law" className="text-[#044ea4] font-semibold text-[18px] md:text-[22px]">11. Governing Law</h3>
            <p className="leading-[26px] md:leading-[30px]">
              These Terms are governed by the laws of the Federal Republic of Nigeria. Legal disputes shall be resolved under Nigerian
              jurisdiction.
            </p>
          </section>

          <section aria-labelledby="updates">
            <h3 id="updates" className="text-[#044ea4] font-semibold text-[18px] md:text-[22px]">12. Updates to Terms</h3>
            <p className="leading-[26px] md:leading-[30px]">
              We may update these Terms periodically. Continued use of our services after changes means you accept the updated Terms.
            </p>
          </section>

          <section aria-labelledby="contact">
            <h3 id="contact" className="text-[#044ea4] font-semibold text-[18px] md:text-[22px]">13. Contact Information</h3>
            <p className="leading-[26px] md:leading-[30px]">
              For complaints, support, or inquiries, please contact us through verified channels displayed on our official website or mobile app.
            </p>
          </section>
          
          <div role="separator" aria-hidden="true" className="mx-auto mt-8 h-[3px] w-full bg-[#df2202]" />
          
          <section aria-labelledby="privacy-heading" className="mt-8">
            <h3 id="privacy-heading" className="text-[#044ea4] font-extrabold text-[28px] md:text-[32px]">Privacy Policy</h3>
            <p className="text-[#012e6d] text-[13px] md:text-[15px] italic">Last Updated — Nov, 2025</p>
            
            <h4 className="mt-6 text-[#044ea4] font-semibold text-[18px] md:text-[22px]">1. Information We Collect</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li><span className="font-medium">Identity & Personal Data:</span> name, date of birth, address, phone, email, BVN, government ID.</li>
              <li><span className="font-medium">Device & Technical Data:</span> device type, OS, browser, IP (approx.), usage logs.</li>
              <li><span className="font-medium">Financial & Transaction Data:</span> account details, transfers, card usage, loans.</li>
              <li><span className="font-medium">Behavioral Data:</span> search, navigation and feature interaction preferences.</li>
            </ul>
            
            <h4 className="mt-6 text-[#044ea4] font-semibold text-[18px] md:text-[22px]">2. How We Use Your Information</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>KYC / BVN verification and core banking operations.</li>
              <li>Fraud prevention, regulatory notifications and support.</li>
              <li>Product recommendations, updates and educational messages (opt-out available).</li>
              <li>Security and user experience improvements; anonymized analytics.</li>
            </ul>
            
            <h4 className="mt-6 text-[#044ea4] font-semibold text-[18px] md:text-[22px]">3. Sharing & Disclosure</h4>
            <p>We share data with regulators and vetted service partners where required; we do not sell personal data.</p>
            
            <h4 className="mt-6 text-[#044ea4] font-semibold text-[18px] md:text-[22px]">4. International Transfers</h4>
            <p>Cross-border processing complies with Nigerian data protection laws.</p>
            
            <h4 className="mt-6 text-[#044ea4] font-semibold text-[18px] md:text-[22px]">5. Data Retention</h4>
            <p>Data is retained while accounts are active or as required by law; statutory records may persist after closure.</p>
            
            <h4 className="mt-6 text-[#044ea4] font-semibold text-[18px] md:text-[22px]">6. Your Rights</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>Access, update, correct or request deletion (subject to legal retention).</li>
              <li>Opt out of marketing communications.</li>
            </ul>
            
            <h4 className="mt-6 text-[#044ea4] font-semibold text-[18px] md:text-[22px]">7. Cookies & Tracking</h4>
            <p>Used for recognizing users, personalizing content, analyzing trends and improving performance. See Cookie Policy.</p>
            
            <h4 className="mt-6 text-[#044ea4] font-semibold text-[18px] md:text-[22px]">8. Security & Protection</h4>
            <p>We use encryption and access controls; users must keep credentials secure and report suspicious activity.</p>
            
            <h4 className="mt-6 text-[#044ea4] font-semibold text-[18px] md:text-[22px]">9. Updates to Privacy Policy</h4>
            <p>Policy may be updated; continued use indicates acceptance.</p>
            
            <h4 className="mt-6 text-[#044ea4] font-semibold text-[18px] md:text-[22px]">10. Contact</h4>
            <p>Reach us via official support channels in the app or website.</p>
          </section>
        </article>
      </div>
    </section>
  );
}
