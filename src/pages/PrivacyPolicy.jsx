import LegalPage from "../components/LegalPage";
import { EMAIL } from "../config";

const UPDATED = "18 July 2026";

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy" updated={UPDATED}>
      <p className="legal__lede">
        This policy explains what personal data this website collects, why it is
        processed, and the rights you have over it. It covers the reservation
        request form and nothing else — there is no account system, no
        advertising network and no visitor tracking on this site.
      </p>

      <p className="legal__placeholder">
        [LEGAL ENTITY NAME TO BE CONFIRMED] is the data controller for the
        processing described below. [REGISTERED BUSINESS ADDRESS TO BE
        CONFIRMED].
      </p>

      <h2>1. What we collect</h2>
      <p>
        The reservation form on this website collects only the fields you fill
        in yourself:
      </p>
      <ul>
        <li>First name</li>
        <li>Surname</li>
        <li>Email address</li>
        <li>Phone number</li>
        <li>Country</li>
        <li>Number of guests</li>
        <li>Special requests — a free-text field</li>
      </ul>
      <p>
        The special requests field is optional and free-form. If you choose to
        enter dietary, medical, accessibility or other sensitive details there,
        they are processed solely to arrange your participation. Please share
        only what is necessary for us to help you.
      </p>
      <p>
        We do not ask for and do not want payment card details. No payment is
        taken through this website.
      </p>

      <h2>2. Why we process it</h2>
      <ul>
        <li>
          To respond to your reservation request and tell you whether places are
          available.
        </li>
        <li>
          To send you reservation and confirmation emails relating to your
          request.
        </li>
        <li>
          To organise the practical details of the experience — transfers,
          accommodation, group numbers and any requirements you have told us
          about.
        </li>
      </ul>
      <p>
        We do not use your details for marketing unless you separately subscribe
        to the newsletter, and we do not sell or share them for advertising.
      </p>

      <h2>3. Legal basis</h2>
      <p>
        Where the GDPR applies, we rely on the following bases. Handling your
        reservation request and the correspondence that follows is processed to
        take steps at your request prior to entering into a contract, and to
        perform that contract if you go on to book. Keeping records for
        accounting or dispute purposes rests on our legitimate interests.
        Anything you volunteer in the special requests field that constitutes
        health data is processed on the basis of your explicit consent, which
        you may withdraw at any time.
      </p>

      <h2>4. How submissions are handled</h2>
      <p>
        The form is submitted to Netlify Forms, the form-handling service
        provided by our website host, Netlify. Your submission is stored in the
        site's Netlify account and notified to us by email so that we can reply.
        Netlify acts as a processor on our behalf and its infrastructure is
        located in the United States.
      </p>
      <p className="legal__placeholder">
        [NOTE FOR THE SITE OWNER — TO BE CONFIRMED BEFORE PUBLICATION: this
        section describes Netlify Forms because that is what the website
        currently uses. If reservation data is later moved to Google Sheets and
        Google Apps Script, or to any other system, this section and section 8
        must be rewritten to name the actual processor before this policy is
        published.]
      </p>

      <h2>5. Who can access your data</h2>
      <p>
        Access is limited to the people organising this experience who need the
        information to answer your request and run the trip, and to the service
        providers named in this policy acting on our instructions. Where a
        detail must be passed to a supplier — for example a hotel rooming list
        or a transfer manifest — only the minimum necessary is shared.
      </p>
      <p className="legal__placeholder">
        [SUPPLIER LIST AND CONTRACTUAL ARRANGEMENTS TO BE CONFIRMED]
      </p>

      <h2>6. How long we keep it</h2>
      <p className="legal__placeholder">
        [RETENTION PERIOD TO BE CONFIRMED]. Our intention is to keep reservation
        requests only as long as needed to answer them and to run the experience
        you booked, together with any period required for accounting or legal
        obligations, after which they are deleted. The exact periods must be
        confirmed before this policy is published.
      </p>

      <h2>7. Security</h2>
      <p>
        The website is served over HTTPS, so what you type into the form is
        encrypted in transit. Access to stored submissions is restricted to
        accounts belonging to the organisers and protected by the authentication
        controls of the services described above. No method of transmission or
        storage is completely secure, and we cannot guarantee absolute security.
      </p>

      <h2>8. International transfers</h2>
      <p>
        Netlify processes data on infrastructure in the United States, so a
        submission made from the European Economic Area or the United Kingdom is
        transferred outside that area. Such transfers rely on the safeguards
        offered by the provider, typically the European Commission's standard
        contractual clauses.
      </p>
      <p>
        This site also loads its typefaces from Google Fonts. When a page loads,
        your browser requests those files from Google's servers, which means your
        IP address is visible to Google. No cookie is set by this and no account
        is required.
      </p>

      <h2>9. Cookies</h2>
      <p>
        This website sets no cookies and stores nothing in your browser's local
        storage. There is no analytics, advertising or tracking technology
        installed. See the Cookie Policy for the full detail.
      </p>

      <h2>10. Your rights</h2>
      <p>
        Where the GDPR or comparable law applies, you have the right to ask for a
        copy of the personal data we hold about you, to have inaccurate data
        corrected, to have your data deleted, to restrict or object to how it is
        processed, to receive it in a portable format, and to withdraw any
        consent you have given. You also have the right to complain to your
        national data protection authority.
      </p>

      <h2>11. How to exercise them</h2>
      <p>
        Write to <a href={`mailto:${EMAIL}`}>{EMAIL}</a> stating what you would
        like us to do. We will respond within one month. We may need to ask a
        question or two to confirm your identity before acting on a request.
      </p>

      <h2>12. Children</h2>
      <p>
        This experience is arranged for adults. We do not knowingly collect data
        from children through this website. Bookings that include a minor are
        made by the responsible adult.
      </p>

      <h2>13. Changes</h2>
      <p>
        If this policy changes, the revised version will appear on this page with
        a new "last updated" date.
      </p>

      <h2>14. Contact</h2>
      <p>
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
      </p>
    </LegalPage>
  );
}
