import LegalPage from "../components/LegalPage";
import { useLang } from "../i18n/LanguageProvider";

const UPDATED = "18 July 2026";

function BodyEN() {
  return (
    <>
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
    </>
  );
}

function BodyTR() {
  return (
    <>
      <h2>1. Rezervasyon</h2>
      <p>
        Rezervasyonunuz, yalnızca gerekli ödemenin alınması ve Dimitris Isaris
        Experiences'tan yazılı bir rezervasyon onayının gelmesiyle kesinleşir.
      </p>
      <p>
        Rezervasyonunuzu tamamlayarak bu Şartlar ve Koşulları okuduğunuzu ve
        kabul ettiğinizi onaylamış olursunuz.
      </p>

      <h2>2. Fiyata Dahil Olanlar</h2>
      <p>Deneyiminize şunlar dahildir:</p>
      <ul>
        <li>Butik Mağara Otel konaklaması (3 gece)</li>
        <li>Günlük kahvaltı</li>
        <li>Hoş geldin yemeği</li>
        <li>VIP havalimanı transferleri</li>
        <li>Programlanan tüm etkinlikler boyunca VIP transferler</li>
        <li>Programda açıklanan özenle seçilmiş etkinlikler</li>
        <li>Dimitris Isaris'in özel canlı akustik konseri</li>
        <li>Deneyim boyunca profesyonel fotoğraf ve video çekimi</li>
      </ul>
      <p>
        Aksi belirtilmedikçe, uluslararası uçuşlar, seyahat sigortası, kişisel
        harcamalar, isteğe bağlı etkinlikler ve özellikle listelenmeyen öğünler
        dahil değildir.
      </p>

      <h2>3. Ödemeler</h2>
      <p>
        Yazılı olarak aksi kararlaştırılmadıkça, rezervasyonunuzu güvence altına
        almak için tam ödeme gereklidir.
      </p>
      <p>Tüm ödemeler Stripe aracılığıyla güvenli şekilde işlenir.</p>
      <p>
        Rezervasyonunuz yalnızca başarılı ödeme ve Dimitris Isaris Experiences'tan
        gelen yazılı onaydan sonra kesinleşir.
      </p>

      <h2>4. İptal Politikası</h2>
      <p>
        <b>Hareket tarihinden 60 günden fazla önce:</b>
        <br />
        İade edilmeyen depozito düşülerek tam iade.
      </p>
      <p>
        <b>Hareket tarihinden 30–59 gün önce:</b>
        <br />
        Toplam rezervasyon tutarının %50'si iade edilir.
      </p>
      <p>
        <b>Hareket tarihinden 30 günden az önce:</b>
        <br />
        İade yapılmaz.
      </p>
      <p>
        Rezervasyonlar, yazılı onaya tabi olarak, hareket tarihinden en geç 14
        gün öncesine kadar başka bir misafire devredilebilir.
      </p>

      <h2>5. Deneyimdeki Değişiklikler</h2>
      <p>
        Program ilan edildiği şekilde sunulmaya azami özen gösterilecek olmakla
        birlikte, Dimitris Isaris Experiences; hava koşulları, güvenlik
        değerlendirmeleri, operasyonel gereklilikler veya kontrolümüz dışındaki
        durumlar nedeniyle gerektiğinde etkinlikleri, konaklamayı, programı veya
        mekânları değiştirme hakkını saklı tutar.
      </p>
      <p>
        Makul ölçüde mümkün olan her durumda eşdeğer alternatifler daima
        sağlanacaktır.
      </p>

      <h2>6. Seyahat Sigortası</h2>
      <p>
        Misafirlerin, aşağıdakileri kapsayan kapsamlı bir seyahat sigortası
        yaptırmaları şiddetle tavsiye edilir:
      </p>
      <ul>
        <li>Tıbbi masraflar</li>
        <li>Seyahat iptali</li>
        <li>Kişisel eşyalar</li>
        <li>Uçuş aksaklıkları</li>
      </ul>

      <h2>7. Misafir Sorumlulukları</h2>
      <p>Misafirler şunlardan sorumludur:</p>
      <ul>
        <li>Geçerli seyahat belgelerine sahip olmak</li>
        <li>Yerel yasa ve düzenlemelere uymak</li>
        <li>Etkinlikler sırasında verilen güvenlik talimatlarına uymak</li>
        <li>Diğer misafirlere, yerel topluluklara ve mülke saygı göstermek</li>
      </ul>
      <p>
        Kişisel ihmalden kaynaklanan her türlü masraf misafirin sorumluluğunda
        kalır.
      </p>

      <h2>8. Fotoğraf ve Medya</h2>
      <p>
        Deneyim sırasında profesyonel fotoğraf ve video çekimi
        gerçekleştirilebilir.
      </p>
      <p>
        Katılarak, misafirler Dimitris Isaris Experiences'a; sosyal medya, web
        sitesi ve pazarlama materyalleri de dahil olmak üzere tanıtım amacıyla
        seçilmiş fotoğraf ve video görüntülerini kullanma izni verir.
      </p>
      <p>
        Tanıtım içeriklerinde yer almak istemeyen misafirlerin, deneyim
        başlamadan önce bize yazılı olarak bildirmeleri gerekir.
      </p>

      <h2>9. Sorumluluk</h2>
      <p>
        Dimitris Isaris Experiences, deneyimin organizatörü olarak hareket eder
        ve özenle seçilmiş yerel tedarikçilerle çalışır.
      </p>
      <p>
        Misafirlerin güvenliğini ve keyfini sağlamak için her makul çaba
        gösterilmekle birlikte; hava koşulları, havayolu gecikmeleri, hükümet
        eylemleri, doğal olaylar ya da bağımsız üçüncü taraf sağlayıcıların eylem
        veya ihmalleri dahil ancak bunlarla sınırlı olmamak üzere, makul
        kontrolümüz dışındaki olaylardan sorumluluk kabul edemeyiz.
      </p>

      <h2>10. Mücbir Sebep</h2>
      <p>
        Hiçbir taraf; doğal afetler, ağır hava koşulları, hükümet kısıtlamaları,
        savaş, salgın hastalıklar, ulaşım aksaklıkları veya diğer mücbir sebep
        olayları dahil olmak üzere makul kontrol dışındaki durumlardan kaynaklanan
        yükümlülüklerin yerine getirilmemesinden veya gecikmesinden sorumlu
        tutulamaz.
      </p>

      <h2>11. Geçerli Hukuk</h2>
      <p>
        Bu Şartlar ve Koşullar, zorunlu yerel tüketici koruma yasalarının aksini
        gerektirdiği durumlar dışında, Aurelian Experiences FZE için geçerli olan
        yasalara tabidir.
      </p>

      <h2>12. Kabul</h2>
      <p>
        Rezervasyonunuzu tamamlayarak bu Rezervasyon Şartlar ve Koşullarını
        okuduğunuzu, anladığınızı ve kabul ettiğinizi beyan edersiniz.
      </p>
      <p>
        Sizi Kapadokya'da ağırlamayı ve unutulmaz bir yolculuğu birlikte
        paylaşmayı dört gözle bekliyoruz.
      </p>

      <p className="legal__sign">
        Dimitris Isaris
        <span>Kurucu</span>
        <span>Dimitris Isaris Experiences</span>
      </p>
    </>
  );
}

export default function TermsAndConditions() {
  const { lang } = useLang();
  const title =
    lang === "tr" ? "Rezervasyon Şartlar ve Koşulları" : "Booking Terms & Conditions";
  return (
    <LegalPage title={title} updated={UPDATED}>
      {lang === "tr" ? <BodyTR /> : <BodyEN />}
    </LegalPage>
  );
}
