import LegalPage from "../components/LegalPage";

const UPDATED = "18 July 2026";

export default function TermsAndConditions() {
  return (
    <LegalPage title="Booking Terms & Conditions" updated={UPDATED}>
      <h2>1. Booking</h2>
      <p>
        Your reservation is confirmed only upon receipt of the required payment
        and a written booking confirmation from Dimitris Isaris Experiences.
      </p>
      <p>
        By completing your booking, you confirm that you have read and accepted
        these Terms &amp; Conditions.
      </p>

      <h2>2. What's Included</h2>
      <p>Your experience includes:</p>
      <ul>
        <li>Boutique Cave Hotel accommodation (3 nights)</li>
        <li>Daily breakfast</li>
        <li>Welcome Dinner</li>
        <li>VIP airport transfers</li>
        <li>VIP transfers throughout the scheduled programme</li>
        <li>Curated activities as described in the itinerary</li>
        <li>Exclusive live acoustic concert by Dimitris Isaris</li>
        <li>Professional photo and video coverage during the experience</li>
      </ul>
      <p>
        Unless otherwise stated, international flights, travel insurance,
        personal expenses, optional activities and meals not specifically listed
        are not included.
      </p>

      <h2>3. Payments</h2>
      <p>
        Full payment is required to secure your reservation unless otherwise
        agreed in writing.
      </p>
      <p>All payments are securely processed through Stripe.</p>
      <p>
        Your booking is confirmed only after successful payment and written
        confirmation from Dimitris Isaris Experiences.
      </p>

      <h2>4. Cancellation Policy</h2>
      <p>
        <b>More than 60 days before departure:</b>
        <br />
        Full refund minus the non-refundable deposit.
      </p>
      <p>
        <b>30–59 days before departure:</b>
        <br />
        50% of the total booking amount will be refunded.
      </p>
      <p>
        <b>Less than 30 days before departure:</b>
        <br />
        No refund.
      </p>
      <p>
        Reservations may be transferred to another guest up to 14 days before
        departure, subject to written approval.
      </p>

      <h2>5. Changes to the Experience</h2>
      <p>
        While every effort will be made to deliver the itinerary as advertised,
        Dimitris Isaris Experiences reserves the right to modify activities,
        accommodation, schedules or venues where necessary due to weather,
        safety considerations, operational requirements or circumstances beyond
        our control.
      </p>
      <p>
        Equivalent alternatives will always be provided whenever reasonably
        possible.
      </p>

      <h2>6. Travel Insurance</h2>
      <p>
        Guests are strongly advised to obtain comprehensive travel insurance
        covering:
      </p>
      <ul>
        <li>Medical expenses</li>
        <li>Trip cancellation</li>
        <li>Personal belongings</li>
        <li>Flight disruptions</li>
      </ul>

      <h2>7. Guest Responsibilities</h2>
      <p>Guests are responsible for:</p>
      <ul>
        <li>Holding valid travel documents</li>
        <li>Complying with local laws and regulations</li>
        <li>Following safety instructions provided during activities</li>
        <li>Respecting fellow guests, local communities and property</li>
      </ul>
      <p>
        Any costs arising from personal negligence remain the responsibility of
        the guest.
      </p>

      <h2>8. Photography &amp; Media</h2>
      <p>
        Professional photography and videography may take place during the
        experience.
      </p>
      <p>
        By participating, guests grant Dimitris Isaris Experiences permission to
        use selected photographs and video footage for promotional purposes,
        including social media, website and marketing materials.
      </p>
      <p>
        Guests who prefer not to appear in promotional content should notify us
        in writing before the experience begins.
      </p>

      <h2>9. Liability</h2>
      <p>
        Dimitris Isaris Experiences acts as the organiser of the experience and
        works with carefully selected local suppliers.
      </p>
      <p>
        While every reasonable effort is made to ensure guest safety and
        enjoyment, we cannot accept responsibility for events beyond our
        reasonable control, including but not limited to weather conditions,
        airline delays, government actions, natural events or the acts or
        omissions of independent third-party providers.
      </p>

      <h2>10. Force Majeure</h2>
      <p>
        Neither party shall be liable for failure or delay in performing
        obligations resulting from circumstances beyond reasonable control,
        including natural disasters, severe weather, government restrictions,
        war, epidemics, transportation disruptions or other force majeure
        events.
      </p>

      <h2>11. Governing Law</h2>
      <p>
        These Terms &amp; Conditions shall be governed by the laws applicable to
        Aurelian Experiences FZE, unless mandatory local consumer protection
        laws require otherwise.
      </p>

      <h2>12. Acceptance</h2>
      <p>
        By completing your booking, you acknowledge that you have read,
        understood and accepted these Booking Terms &amp; Conditions.
      </p>
      <p>
        We look forward to welcoming you to Cappadocia and sharing an
        unforgettable journey together.
      </p>

      <p className="legal__sign">
        Dimitris Isaris
        <span>Founder</span>
        <span>Dimitris Isaris Experiences</span>
      </p>
    </LegalPage>
  );
}
