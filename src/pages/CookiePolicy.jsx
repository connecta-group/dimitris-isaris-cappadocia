import LegalPage from "../components/LegalPage";
import { EMAIL } from "../config";

const UPDATED = "18 July 2026";

export default function CookiePolicy() {
  return (
    <LegalPage title="Cookie Policy" updated={UPDATED}>
      <p className="legal__lede">
        This website does not use cookies. There is no analytics, no advertising
        and no visitor tracking of any kind, so there is nothing for you to
        accept or reject and no consent banner to dismiss.
      </p>

      <h2>1. What this site does not do</h2>
      <p>
        We audited the code of this website before writing this page. It sets no
        cookies of its own, and it stores nothing in your browser's local storage
        or session storage. Specifically, there is:
      </p>
      <ul>
        <li>no analytics — no Google Analytics or equivalent;</li>
        <li>no advertising or remarketing tag;</li>
        <li>no social media tracking pixel;</li>
        <li>no session identifier, and no account or login system;</li>
        <li>no cross-site or behavioural profiling.</li>
      </ul>
      <p>
        Because no non-essential technology is installed, this page does not
        list marketing or analytics categories. If that ever changes we will
        update this page, and any non-essential script will be loaded only after
        you have agreed to it.
      </p>

      <h2>2. The reservation form</h2>
      <p>
        The reservation form submits to Netlify Forms, the form service provided
        by our website host. It transmits the fields you filled in. No cookie is
        set on your device to make this work, and nothing about your visit is
        retained in your browser afterwards.
      </p>

      <h2>3. Fonts loaded from Google</h2>
      <p>
        The site's typefaces are loaded from Google Fonts. When a page opens,
        your browser requests those font files from Google's servers, which means
        your IP address and basic request information are visible to Google.
      </p>
      <p>
        This is a network request, not a cookie: Google Fonts does not set a
        cookie on your device through this, and no identifier is stored in your
        browser. We mention it because it is a transfer of data to a third party
        and you are entitled to know it happens. It is described further in the
        Privacy Policy.
      </p>

      <h2>4. The embedded map</h2>
      <p>
        The Location section embeds a Google Maps frame showing Ürgüp. Google may
        set its own cookies within that embedded frame under its own policies,
        independently of this site. The frame loads only as part of that section
        of the page. If you would rather avoid it entirely, the "Open in Google
        Maps" button opens the same location in a new tab instead, and you can
        block third-party cookies in your browser settings.
      </p>

      <h2>5. Controlling cookies in your browser</h2>
      <p>
        Since this site sets none, there is nothing here for you to clear. Should
        you wish to manage cookies set by embedded third parties such as the map
        frame, every major browser lets you block or delete them through its
        privacy settings, and offers a setting to reject third-party cookies
        outright.
      </p>

      <h2>6. Changes</h2>
      <p>
        If we ever introduce analytics or any other non-essential technology, we
        will update this page, add the appropriate consent controls, and load
        nothing non-essential before you have agreed to it.
      </p>

      <h2>7. Contact</h2>
      <p>
        Questions about this page? Write to{" "}
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
      </p>
    </LegalPage>
  );
}
