"use client";
import { useEffect } from "react";
import Terms from "./components/terms";
export default function PrivacyPolicy() {
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash?.replace("#", "");
      if (!hash) return;
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    // Scroll on initial load if hash present
    scrollToHash();

    // Listen for hash changes
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);
  
  return (
    <>
      <div className="container mx-auto max-w-[800px] p-5 font-sans text-[#333333] leading-relaxed h-screen overflow-y-auto scrollbar-hide">
        <h1 className="mt-6 mb-2 font-bold text-4xl">Kai Privacy Policy and Terms of Use: </h1>
        <p className="mb-4">
          <strong>Privacy Policy: </strong>{" "}
        </p>
        <p className="mb-4">
          <strong>Introduction</strong>{" "}
        </p>
        <p className="mb-4">
          {" "}
          Welcome to <strong>Kai Vocabulary</strong> (“<strong>we</strong>”
          or “<strong>the App</strong>”). This Privacy Policy describes how we
          collect, use, and protect your personal information when you sign in
          and use our app to learn and practice English through movie scenes. By
          creating an account and using Kai Vocabulary, you agree to the
          data practices described here, and to comply with all relevant data
          protection laws (e.g., GDPR, CCPA) as well as the policies of the
          Apple App Store and Google Play.
        </p>

        <h2 className="mt-6 mb-2 font-bold">1. Information We Collect</h2>
        <p className="mb-4">
          We collect different types of information to deliver and improve our
          service:
        </p>
        <ul className="mb-4 pl-5 space-y-2">
          <li>
            <strong>Account Information: Name or Username:</strong> When you
            sign up, you may provide a name or username.
          </li>
          <li>
            <strong>Email Address:</strong> We require an email address for
            account creation, password resets, and account recovery.
          </li>
          <li>
            <strong>Password:</strong> If you create a password-based account
            (unless you sign in through Google or Apple), we store it securely
            using hashing and salt. We do <strong>not</strong> have access to
            your raw password.
          </li>
          <li>
            <strong>English Proficiency Level:</strong> Upon sign-up or first
            use, you may indicate your proficiency level (e.g., A1–C2) or take
            an assessment quiz to help us personalize learning material. This
            information is stored in your profile.
          </li>
          <li>
            <strong>
              User Preferences and Learning Behavior: Vocabulary Selections:
            </strong>{" "}
            Words you choose to learn, custom word lists, or flagged terms.
          </li>
          <li>
            <strong>Quizzes and Exercises:</strong> Quiz responses, completion
            status, scores, or performance metrics.
          </li>
          <li>
            <strong>Activity Logs:</strong> Movie clips you watch, how many
            times you replay them, your selected playback speeds, or other
            interactions within the app.
          </li>
          <li>
            <strong>Personalization:</strong> We track which areas you spend
            more time on to tailor content recommendations (e.g., focusing on
            grammar, pronunciation, or advanced vocabulary).
          </li>
          <li>
            <strong>Technical Information: Device Details:</strong> Non-personal
            data like your device model, operating system version, unique device
            identifiers (e.g., Google Advertising ID or Apple ID for advertising
            if applicable), and app version.
          </li>
          <li>
            <strong>Log Data:</strong> IP address, timestamps, error logs, and
            crash reports for troubleshooting and improving the service.
          </li>
          <li>
            <strong>Cookies and Similar Technologies:</strong> If using a
            web-based portal or website component, we may use cookies to
            remember your sign-in session and preferences. On mobile, we may
            store small pieces of data for session management.
          </li>
        </ul>
        <p className="mb-4">
          We do not knowingly collect or solicit{" "}
          <strong>sensitive personal information</strong> such as financial,
          health, or biometric data. If you believe we have any sensitive info
          in error, please contact us to remove it.
        </p>

        <h2 className="mt-6 mb-2 font-bold">2. How We Use Your Information</h2>
        <p className="mb-4">We use the collected data to:</p>
        <ul className="mb-4 pl-5 space-y-2">
          <li>
            <strong>Provide and Maintain Our Service:</strong> Authenticate your
            account login. Keep track of your progress, word bank, quiz results,
            and watch history to deliver continuous learning. Ensure the app
            functions properly across different devices and platforms.
          </li>
          <li>
            <strong>Personalize Learning Experiences:</strong> Recommend new
            words, movie clips, or quizzes based on your stated proficiency
            level and observed performance. Customize content difficulty to keep
            you challenged without overwhelming you. Refine suggestions over
            time using AI algorithms that analyze your preferences and
            interactions.
          </li>
          <li>
            <strong>Analytics and Improvements:</strong> Analyze aggregated
            usage patterns (e.g., which clips are most popular, common pain
            points) to enhance our features and user interface. Use performance
            data (e.g., quiz scores, replay frequency) to optimize exercises and
            ensure the Spaced Repetition System (SRS) is effective.
          </li>
          <li>
            <strong>Communications:</strong> Send account-related notifications,
            such as password reset instructions, progress reminders, or updates
            to this policy. With your consent, send occasional tips,
            newsletters, or promotional materials. You can opt-out at any time
            via unsubscribe links or account settings.
          </li>
          <li>
            <strong>Security, Compliance, and Enforcement:</strong> Monitor for
            suspicious activity or misuse of the app to protect against fraud.
            Enforce our Terms of Service and comply with legal obligations or
            requests from authorities.
          </li>
        </ul>
        
        <h2 className="mt-6 mb-2 font-bold">3. Data Sharing and Disclosure</h2>
        <p className="mb-4">
          We do <strong>not</strong> sell or rent your personal information to
          third parties. We only share data in these circumstances:
        </p>
        <ul className="mb-4 pl-5 space-y-2">
          <li>
            <strong>Service Providers:</strong> Trusted third parties (e.g.,
            cloud hosting, analytics tools, email delivery services) process
            your data for us under strict confidentiality and only as needed to
            help operate or improve the app.
          </li>
          <li>
            <strong>Single Sign-On (SSO) via Google or Apple:</strong> If you
            sign up or log in with Google or Apple, we receive a secure token
            verifying your identity (instead of a raw password). We also may
            receive your email or profile name if you grant permission. We do
            not receive any further personal data from these providers.
          </li>
          <li>
            <strong>Legal Compliance:</strong> If required by law or a valid
            legal request, we may disclose data to authorities.
          </li>
          <li>
            <strong>Business Transactions:</strong> In the event of a merger,
            acquisition, or sale of assets, user data may be transferred. We’ll
            notify you of such changes and your options at that time.
          </li>
          <li>
            <strong>Aggregate or De-Identified Data:</strong> We may share usage
            patterns or aggregated statistics (e.g., “50% of users are
            intermediate”) publicly or with partners, as this data does not
            identify individual users.
          </li>
        </ul>
        
        <h2 className="mt-6 mb-2 font-bold">4. Data Security</h2>
        <p className="mb-4">
          We apply industry-standard security measures to safeguard personal
          data:
        </p>
        <ul className="mb-4 pl-5 space-y-2">
          <li>
            <strong>Encryption:</strong> All communication with our servers is
            secured via HTTPS (TLS), and sensitive data (like passwords) is
            stored encrypted or hashed.
          </li>
          <li>
            <strong>Access Controls:</strong> Only authorized personnel with a
            legitimate need to process or analyze data can access your personal
            information.
          </li>
          <li>
            <strong>Monitoring:</strong> We monitor for suspicious activity and
            vulnerabilities, and regularly update our systems.
          </li>
          <li>
            <strong>Data Breach Response:</strong> If we learn of unauthorized
            access or breach involving personal data, we will promptly notify
            impacted users and relevant regulatory authorities, consistent with
            legal requirements.
          </li>
        </ul>
        
        <h2 className="mt-6 mb-2 font-bold">5. Your Rights</h2>
        <p className="mb-4">
          Depending on your jurisdiction, you may have specific privacy rights.
          These can include:
        </p>
        <ul className="mb-4 pl-5 space-y-2">
          <li>
            <strong>Access &amp; Portability:</strong> Request a copy of the
            personal data we store about you and how it’s processed.
          </li>
          <li>
            <strong>Correction:</strong> Update or rectify inaccurate or
            out-of-date info.
          </li>
          <li>
            <strong>Deletion:</strong> Ask us to delete your account and
            associated personal data (subject to legal or business retention
            requirements).
          </li>
          <li>
            <strong>Objection / Restriction:</strong> In certain cases, request
            we stop or limit processing your data.
          </li>
          <li>
            <strong>Withdrawal of Consent:</strong> If processing is based on
            consent (e.g., marketing emails), withdraw consent at any time.
          </li>
          <li>
            <strong>Non-Discrimination:</strong> We do not treat users
            differently for exercising their rights.
          </li>
        </ul>
        <p className="mb-4">
          To exercise any of these rights, please contact{" "}
          <a className="text-[#0066cc] no-underline hover:underline" href="mailto:hi@dailydoses.ai">hi@dailydoses.ai</a>. We may need to
          verify your identity before fulfilling requests. We typically respond
          within 30 days as required by law. You also have the right to lodge
          complaints with your local data protection authority if you believe we
          violated applicable privacy laws.
        </p>
        
        <h2 className="mt-6 mb-2 font-bold">6. Data Retention</h2>
        <p className="mb-4">
          We retain personal data{" "}
          <strong>as long as your account remains active</strong> or as needed
          to provide the service. If you delete your account or request data
          erasure, we will remove or anonymize your personal data unless we must
          keep it for legal or legitimate business reasons (like dispute
          resolution, compliance, or security audits).
        </p>
        
        <h2 className="mt-6 mb-2 font-bold">7. International Transfers</h2>
        <p className="mb-4">
          Your data may be processed or stored on servers located in different
          countries. We take steps to ensure an adequate level of data
          protection wherever we process your information (e.g., using
          EU-approved model clauses if transferring from the EU). By using
          Kai Vocabulary, you consent to the transfer of data to countries
          outside of your residence, subject to appropriate safeguards.
        </p>
        
        <h2 className="mt-6 mb-2 font-bold">8. Children’s Privacy</h2>
        <p className="mb-4">
          We do not knowingly allow children under 13 to create accounts. If you
          are under 13, do not sign up or submit personal info. If we discover
          personal data from a child under 13, we will promptly delete it. For
          users aged 13–17, please ensure a parent or guardian reviews and
          consents to this Policy on your behalf.
        </p>
        
        <h2 className="mt-6 mb-2 font-bold">9. Changes to This Policy</h2>
        <p className="mb-4">
          We may update our Privacy Policy to reflect changes in the app, legal
          requirements, or data practices. When we do, we’ll revise the “Last
          Updated” date above. If there are significant changes, we’ll notify
          you via email or in-app prompts. Your continued use after we post any
          modifications means you agree to the updated policy.
        </p>
        
        <h2 className="mt-6 mb-2 font-bold">10. Contact Us</h2>
        <p className="mb-4">
          For questions, concerns, or requests regarding privacy, please
          contact:
        </p>
        <ul className="mb-4 pl-5 space-y-2">
          <li>
            <strong>Email:</strong>{" "}
            <a className="text-[#0066cc] no-underline hover:underline" href="mailto:hi@dailydoses.ai">hi@dailydoses.ai</a>
          </li>
          <li>
            <strong>Mail:</strong> 18th Floor, WeWork – Marine Gateway, 450 SW
            Marine Dr, Vancouver, BC V5X 0C3, Canada
          </li>
        </ul>
        <p className="mb-4">
          We’re committed to transparent and fair data practices, and we
          appreciate you trusting us with your information as you learn English
          through Kai Vocabulary.
        </p>
        <Terms />
      </div>
    </>
  );
}
