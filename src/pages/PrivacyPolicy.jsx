import LegalPage from "../components/LegalPage";
import { useLang } from "../i18n/LanguageProvider";
import { EMAIL } from "../config";

const UPDATED = "18 July 2026";

function BodyEN() {
  return (
    <>
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
    </>
  );
}

function BodyTR() {
  return (
    <>
      <p className="legal__lede">
        Bu politika, bu web sitesinin hangi kişisel verileri topladığını, bunların
        neden işlendiğini ve bu veriler üzerindeki haklarınızı açıklar. Yalnızca
        rezervasyon talep formunu kapsar — bu sitede hesap sistemi, reklam ağı
        veya ziyaretçi takibi yoktur.
      </p>

      <p className="legal__placeholder">
        [DOĞRULANACAK YASAL KURULUŞ ADI], aşağıda açıklanan işleme faaliyetinin
        veri sorumlusudur. [DOĞRULANACAK TESCİLLİ İŞ ADRESİ].
      </p>

      <h2>1. Neleri topluyoruz</h2>
      <p>
        Bu web sitesindeki rezervasyon formu yalnızca sizin doldurduğunuz alanları
        toplar:
      </p>
      <ul>
        <li>Ad</li>
        <li>Soyad</li>
        <li>E-posta adresi</li>
        <li>Telefon numarası</li>
        <li>Ülke</li>
        <li>Misafir sayısı</li>
        <li>Özel istekler — serbest metin alanı</li>
      </ul>
      <p>
        Özel istekler alanı isteğe bağlı ve serbest biçimlidir. Buraya beslenme,
        sağlık, erişilebilirlik veya diğer hassas ayrıntıları girmeyi seçerseniz,
        bunlar yalnızca katılımınızı düzenlemek için işlenir. Lütfen yalnızca size
        yardımcı olmamız için gerekli olanı paylaşın.
      </p>
      <p>
        Ödeme kartı bilgilerinizi istemiyoruz ve talep etmiyoruz. Bu web sitesi
        üzerinden hiçbir ödeme alınmaz.
      </p>

      <h2>2. Neden işliyoruz</h2>
      <ul>
        <li>
          Rezervasyon talebinize yanıt vermek ve yer olup olmadığını size
          bildirmek için.
        </li>
        <li>
          Talebinizle ilgili rezervasyon ve onay e-postalarını size göndermek
          için.
        </li>
        <li>
          Deneyimin pratik ayrıntılarını — transferler, konaklama, grup sayıları
          ve bize bildirdiğiniz gereksinimleri — düzenlemek için.
        </li>
      </ul>
      <p>
        Ayrıca bültene abone olmadığınız sürece bilgilerinizi pazarlama için
        kullanmayız ve reklam amacıyla satmaz veya paylaşmayız.
      </p>

      <h2>3. Hukuki dayanak</h2>
      <p>
        GDPR'ın uygulandığı durumlarda aşağıdaki dayanaklara güveniriz.
        Rezervasyon talebinizin ve onu izleyen yazışmaların işlenmesi, bir sözleşme
        yapılmadan önce talebiniz üzerine adım atmak ve rezervasyon yapmaya devam
        etmeniz halinde bu sözleşmeyi yerine getirmek amacıyla gerçekleştirilir.
        Muhasebe veya uyuşmazlık amacıyla kayıt tutulması meşru menfaatlerimize
        dayanır. Özel istekler alanında gönüllü olarak paylaştığınız ve sağlık
        verisi niteliğindeki her şey, istediğiniz zaman geri çekebileceğiniz açık
        rızanıza dayanılarak işlenir.
      </p>

      <h2>4. Gönderimler nasıl ele alınır</h2>
      <p>
        Form, web sitesi barındırıcımız Netlify tarafından sağlanan form işleme
        hizmeti olan Netlify Forms'a gönderilir. Gönderiminiz, sitenin Netlify
        hesabında saklanır ve yanıt verebilmemiz için bize e-posta ile bildirilir.
        Netlify, bizim adımıza bir veri işleyen olarak hareket eder ve altyapısı
        Amerika Birleşik Devletleri'nde bulunur.
      </p>
      <p className="legal__placeholder">
        [SİTE SAHİBİNE NOT — YAYINLANMADAN ÖNCE DOĞRULANACAK: bu bölüm, web
        sitesinin şu anda kullandığı sistem olduğu için Netlify Forms'u
        açıklamaktadır. Rezervasyon verileri daha sonra Google E-Tablolar ve
        Google Apps Script'e veya başka bir sisteme taşınırsa, bu politika
        yayınlanmadan önce bu bölüm ve 8. bölüm gerçek veri işleyeni belirtecek
        şekilde yeniden yazılmalıdır.]
      </p>

      <h2>5. Verilerinize kimler erişebilir</h2>
      <p>
        Erişim; talebinizi yanıtlamak ve geziyi yürütmek için bilgiye ihtiyaç
        duyan, bu deneyimi düzenleyen kişilerle ve bu politikada adı geçen,
        talimatlarımızla hareket eden hizmet sağlayıcılarla sınırlıdır. Bir
        ayrıntının bir tedarikçiye iletilmesi gerektiğinde — örneğin bir otel oda
        listesi veya transfer manifestosu — yalnızca gereken asgari bilgi
        paylaşılır.
      </p>
      <p className="legal__placeholder">
        [DOĞRULANACAK TEDARİKÇİ LİSTESİ VE SÖZLEŞMESEL DÜZENLEMELER]
      </p>

      <h2>6. Verileri ne kadar süre saklıyoruz</h2>
      <p className="legal__placeholder">
        [DOĞRULANACAK SAKLAMA SÜRESİ]. Amacımız, rezervasyon taleplerini yalnızca
        yanıtlamak ve rezervasyonunu yaptığınız deneyimi yürütmek için gereken
        süre boyunca, muhasebe veya yasal yükümlülükler için gereken süreyle
        birlikte saklamak ve ardından silmektir. Kesin süreler bu politika
        yayınlanmadan önce doğrulanmalıdır.
      </p>

      <h2>7. Güvenlik</h2>
      <p>
        Web sitesi HTTPS üzerinden sunulur; dolayısıyla forma yazdıklarınız aktarım
        sırasında şifrelenir. Saklanan gönderimlere erişim, organizatörlere ait
        hesaplarla sınırlıdır ve yukarıda açıklanan hizmetlerin kimlik doğrulama
        kontrolleriyle korunur. Hiçbir aktarım veya saklama yöntemi tümüyle
        güvenli değildir ve mutlak güvenliği garanti edemeyiz.
      </p>

      <h2>8. Uluslararası aktarımlar</h2>
      <p>
        Netlify, verileri Amerika Birleşik Devletleri'ndeki altyapıda işler;
        dolayısıyla Avrupa Ekonomik Alanı'ndan veya Birleşik Krallık'tan yapılan
        bir gönderim, bu bölgenin dışına aktarılır. Bu tür aktarımlar,
        sağlayıcının sunduğu güvencelere — tipik olarak Avrupa Komisyonu'nun
        standart sözleşme maddelerine — dayanır.
      </p>
      <p>
        Bu site ayrıca yazı tiplerini Google Fonts'tan yükler. Bir sayfa
        yüklendiğinde tarayıcınız bu dosyaları Google'ın sunucularından ister; bu
        da IP adresinizin Google tarafından görülebileceği anlamına gelir. Bununla
        hiçbir çerez ayarlanmaz ve hesap gerekmez.
      </p>

      <h2>9. Çerezler</h2>
      <p>
        Bu web sitesi hiçbir çerez ayarlamaz ve tarayıcınızın yerel depolamasında
        hiçbir şey saklamaz. Kurulu hiçbir analiz, reklam veya takip teknolojisi
        yoktur. Ayrıntıların tamamı için Çerez Politikası'na bakın.
      </p>

      <h2>10. Haklarınız</h2>
      <p>
        GDPR veya benzeri bir yasanın uygulandığı durumlarda; hakkınızda tuttuğumuz
        kişisel verilerin bir kopyasını isteme, yanlış verilerin düzeltilmesini
        sağlama, verilerinizin silinmesini isteme, işlenme biçimini kısıtlama veya
        buna itiraz etme, verileri taşınabilir bir biçimde alma ve verdiğiniz
        herhangi bir rızayı geri çekme hakkına sahipsiniz. Ayrıca ulusal veri
        koruma otoritenize şikâyette bulunma hakkınız da vardır.
      </p>

      <h2>11. Haklarınızı nasıl kullanırsınız</h2>
      <p>
        Ne yapmamızı istediğinizi belirterek <a href={`mailto:${EMAIL}`}>{EMAIL}</a>{" "}
        adresine yazın. Bir ay içinde yanıt vereceğiz. Bir talep üzerine işlem
        yapmadan önce kimliğinizi doğrulamak için bir iki soru sormamız
        gerekebilir.
      </p>

      <h2>12. Çocuklar</h2>
      <p>
        Bu deneyim yetişkinler için düzenlenmiştir. Bu web sitesi aracılığıyla
        bilerek çocuklardan veri toplamayız. Bir reşit olmayanı içeren
        rezervasyonlar, sorumlu yetişkin tarafından yapılır.
      </p>

      <h2>13. Değişiklikler</h2>
      <p>
        Bu politika değişirse, gözden geçirilmiş sürüm bu sayfada yeni bir "son
        güncelleme" tarihiyle görünecektir.
      </p>

      <h2>14. İletişim</h2>
      <p>
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
      </p>
    </>
  );
}

export default function PrivacyPolicy() {
  const { lang } = useLang();
  const title = lang === "tr" ? "Gizlilik Politikası" : "Privacy Policy";
  return (
    <LegalPage title={title} updated={UPDATED}>
      {lang === "tr" ? <BodyTR /> : <BodyEN />}
    </LegalPage>
  );
}
