import LegalPage from "../components/LegalPage";
import { useLang } from "../i18n/LanguageProvider";
import { EMAIL } from "../config";

const UPDATED = "18 July 2026";

function BodyEN() {
  return (
    <>
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
    </>
  );
}

function BodyTR() {
  return (
    <>
      <p className="legal__lede">
        Bu web sitesi çerez kullanmaz. Hiçbir analiz, reklam veya ziyaretçi
        takibi yoktur; dolayısıyla kabul edeceğiniz ya da reddedeceğiniz bir şey
        ve kapatmanız gereken bir onay bildirimi bulunmaz.
      </p>

      <h2>1. Bu sitenin yapmadıkları</h2>
      <p>
        Bu sayfayı yazmadan önce web sitesinin kodunu inceledik. Kendine ait
        hiçbir çerez ayarlamaz ve tarayıcınızın yerel depolamasında veya oturum
        depolamasında hiçbir şey saklamaz. Özellikle şunlar yoktur:
      </p>
      <ul>
        <li>analiz yok — Google Analytics veya benzeri yok;</li>
        <li>reklam veya yeniden pazarlama etiketi yok;</li>
        <li>sosyal medya takip pikseli yok;</li>
        <li>oturum tanımlayıcısı yok, hesap veya oturum açma sistemi yok;</li>
        <li>siteler arası veya davranışsal profil çıkarma yok.</li>
      </ul>
      <p>
        Zorunlu olmayan hiçbir teknoloji kurulu olmadığından, bu sayfa pazarlama
        veya analiz kategorilerini listelemez. Bu durum ileride değişirse bu
        sayfayı güncelleyeceğiz ve zorunlu olmayan hiçbir betik, yalnızca siz
        onay verdikten sonra yüklenecek.
      </p>

      <h2>2. Rezervasyon formu</h2>
      <p>
        Rezervasyon formu, web sitesi barındırıcımızın sağladığı form hizmeti
        olan Netlify Forms'a gönderilir. Doldurduğunuz alanları iletir. Bunun
        çalışması için cihazınıza herhangi bir çerez yerleştirilmez ve ziyaretinize
        dair hiçbir şey sonrasında tarayıcınızda tutulmaz.
      </p>

      <h2>3. Google'dan yüklenen yazı tipleri</h2>
      <p>
        Sitenin yazı tipleri Google Fonts'tan yüklenir. Bir sayfa açıldığında
        tarayıcınız bu yazı tipi dosyalarını Google'ın sunucularından ister; bu
        da IP adresinizin ve temel istek bilgilerinizin Google tarafından
        görülebileceği anlamına gelir.
      </p>
      <p>
        Bu bir çerez değil, bir ağ isteğidir: Google Fonts bu yolla cihazınıza
        çerez yerleştirmez ve tarayıcınızda hiçbir tanımlayıcı saklanmaz. Bunu,
        üçüncü bir tarafa veri aktarımı olduğu ve gerçekleştiğini bilme hakkınız
        bulunduğu için belirtiyoruz. Bu konu Gizlilik Politikası'nda ayrıntılı
        olarak açıklanmıştır.
      </p>

      <h2>4. Gömülü harita</h2>
      <p>
        Konum bölümü, Ürgüp'ü gösteren bir Google Haritalar çerçevesi içerir.
        Google, bu siteden bağımsız olarak, kendi politikaları kapsamında bu
        gömülü çerçeve içinde kendi çerezlerini yerleştirebilir. Çerçeve yalnızca
        sayfanın o bölümünün bir parçası olarak yüklenir. Bundan tamamen
        kaçınmak isterseniz, "Google Haritalar'da Aç" düğmesi aynı konumu yeni bir
        sekmede açar ve üçüncü taraf çerezlerini tarayıcı ayarlarınızdan
        engelleyebilirsiniz.
      </p>

      <h2>5. Tarayıcınızda çerezleri yönetme</h2>
      <p>
        Bu site hiçbir çerez ayarlamadığından, burada temizlemeniz gereken bir
        şey yoktur. Harita çerçevesi gibi gömülü üçüncü taraflarca ayarlanan
        çerezleri yönetmek isterseniz, her büyük tarayıcı bunları gizlilik
        ayarları üzerinden engellemenize veya silmenize olanak tanır ve üçüncü
        taraf çerezlerini tümüyle reddetme seçeneği sunar.
      </p>

      <h2>6. Değişiklikler</h2>
      <p>
        İleride analiz veya zorunlu olmayan başka bir teknoloji eklersek, bu
        sayfayı güncelleyecek, uygun onay kontrollerini ekleyecek ve siz onay
        vermeden zorunlu olmayan hiçbir şeyi yüklemeyeceğiz.
      </p>

      <h2>7. İletişim</h2>
      <p>
        Bu sayfayla ilgili sorularınız mı var? Bize yazın:{" "}
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
      </p>
    </>
  );
}

export default function CookiePolicy() {
  const { lang } = useLang();
  const title = lang === "tr" ? "Çerez Politikası" : "Cookie Policy";
  return (
    <LegalPage title={title} updated={UPDATED}>
      {lang === "tr" ? <BodyTR /> : <BodyEN />}
    </LegalPage>
  );
}
