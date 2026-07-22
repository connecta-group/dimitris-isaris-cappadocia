/**
 * Site copy in English and Turkish.
 *
 * `en` values are exact copies of the approved English strings — the rendered
 * English must stay identical. `tr` is professional Turkish (natural tone,
 * correct characters and punctuation, "Türkiye" not "Turkey").
 *
 * Structured content (programme, services, gallery, FAQ) lives here too so a
 * page is never a mix of the two languages. Non-text fields (icons, image
 * paths, ids, focal points) are identical across languages by design.
 */

export const translations = {
  en: {
    langName: "English",
    selector: { label: "Select language", current: "Language: English" },

    nav: {
      links: [
        { id: "program", label: "Programme" },
        { id: "gallery", label: "Gallery" },
        { id: "services", label: "Included" },
        { id: "location", label: "Location" },
        { id: "artist", label: "Dimitris" },
        { id: "faq", label: "Questions" },
        { id: "contact", label: "Contact" },
      ],
      brandTag: "Exclusive Event",
      reserve: "Reserve your place",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      sections: "Sections",
    },

    cta: {
      reserve: "Reserve your place",
      downloadBrochure: "Download Brochure",
      watchFilm: "Watch the film",
      openMaps: "Open in Google Maps",
    },

    hero: {
      eyebrow: "Exclusive Event",
      titleTop: "Where Music Meets Cappadocia",
      titleEm: "Imagine Yourself Here.",
      blurb1: "Four unforgettable days. One intimate concert. Endless memories.",
      blurb2:
        "Discover hidden valleys, breathtaking sunrises and an exclusive live acoustic evening with Dimitris Isaris.",
      scroll: "Scroll",
      scrollAria: "Scroll to the programme",
      heroAlt:
        "Dimitris Isaris playing classical guitar on a terrace as hot air balloons rise over the Cappadocia valley at sunrise",
    },

    countdown: {
      done: "The experience has begun.",
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds",
      aria: "Time until the experience begins",
    },

    strip: [
      "Göreme Open Air Museum",
      "Paşabağ Monks Valley",
      "Devrent Imagination Valley",
      "Avanos pottery",
      "Sunrise balloons",
      "Private acoustic night",
      "Rose Valley at golden hour",
    ],

    program: {
      eyebrow: "The programme",
      titleTop: "Day by day,",
      titleEm: "hour by hour",
      lede: "Open any day to see what is planned. Timings move with the weather — the balloon corridor and the valley light decide, not the schedule.",
      badge: "The main event",
      days: [
        {
          day: "01",
          title: "Welcome to Cappadocia",
          tagline: "Arrive slowly. Watch the rock turn gold.",
          blocks: [
            { icon: "car", label: "Arrival", items: ["VIP meet & greet at the airport or bus terminal", "Private Mercedes Vito & Sprinter transfers", "Hotel check-in"] },
            { icon: "leaf", label: "Afternoon", items: ["Leisure time and rest before the first evening"] },
            { icon: "sun", label: "Sunset", items: ["A panoramic viewpoint chosen for the light that evening", "Sunset photography with the group"] },
            { icon: "glass", label: "Evening", items: ["Welcome dinner", "Overnight at the hotel"] },
          ],
        },
        {
          day: "02",
          title: "Discover the magic",
          tagline: "Balloons at first light, clay by afternoon, valleys at dusk.",
          blocks: [
            { icon: "balloon", label: "Morning", items: ["Sunrise balloon viewing experience (weather permitting)", "Valley walk — sunrise or daytime, depending on conditions"] },
            { icon: "compass", label: "Afternoon", items: ["Full-day guided Cappadocia tour", "Göreme Open Air Museum", "Paşabağ (Monks Valley)", "Devrent (Imagination Valley)", "Avanos on the Kızılırmak river"] },
            { icon: "pottery", label: "Culture", items: ["Traditional pottery workshop in Avanos", "Hands-on session at the kick wheel"] },
            { icon: "atv", label: "Sunset", items: ["ATV safari through the valleys as the light drops"] },
            { icon: "moon", label: "Evening", items: ["Free time", "Overnight stay"] },
          ],
        },
        {
          day: "03",
          title: "Live Performance with Dimitris Isaris",
          tagline: "The evening the journey was built around.",
          featured: true,
          blocks: [
            { icon: "coffee", label: "Morning", items: ["Breakfast at the hotel"] },
            { icon: "leaf", label: "At leisure", items: ["Free time", "Relax at the hotel", "Optional personal activities on request"] },
            { icon: "guitar", label: "Evening highlight", items: ["Welcome cocktail", "Exclusive acoustic guitar performance by Dimitris Isaris", "Full event production and staging", "Photo session with the artist", "Overnight stay"] },
          ],
        },
        {
          day: "04",
          title: "Farewell Cappadocia",
          tagline: "An unhurried morning. Nothing rushed.",
          blocks: [
            { icon: "coffee", label: "Morning", items: ["Breakfast at the hotel", "Free time", "Optional shopping in Göreme", "Hotel check-out"] },
            { icon: "car", label: "Departure", items: ["Private transfer to the airport or bus terminal"] },
          ],
        },
      ],
    },

    gallery: {
      eyebrow: "Gallery",
      titleTop: "What four days in",
      titleEm: "Cappadocia",
      titleEnd: "look like.",
      lede: "Select any frame to open it full size. Use the arrow keys to move through the set.",
      openImage: "Open image:",
      closeImage: "Close image",
      prevImage: "Previous image",
      nextImage: "Next image",
      of: "of",
      items: [
        { title: "ATV Sunset Experience", alt: "Guided ATV experience through Cappadocia during golden hour" },
        { title: "Private Transfers", alt: "Private Mercedes transfer outside a Cappadocia cave hotel at sunrise" },
        { title: "Pottery Workshop", alt: "Traditional Cappadocia pottery artisan working by hand" },
        { title: "Cappadocia Heritage", alt: "Historic rock-cut church with preserved frescoes in Cappadocia" },
        { title: "Balloon Sunrise", alt: "Terrace overlooking Cappadocia during a hot-air balloon sunrise" },
        { title: "Cave Dinner", alt: "Elegant candlelit private dinner inside a Cappadocia cave venue" },
        { title: "Live Performance", alt: "Dimitris Isaris performing an intimate candlelit acoustic concert" },
        { title: "Epic Cappadocia golden hour sunrise with hundreds of hot air balloons, high depth of field.", alt: "Epic Cappadocia golden-hour sunrise with hundreds of hot-air balloons and high depth of field" },
      ],
    },

    services: {
      eyebrow: "What is included",
      titleTop: "Everything but the",
      titleEm: "flight",
      lede: "One price covers the transfers, the rooms, the guide, the workshops and the performance. You arrange the flight; we handle the rest from the moment you land.",
      badge: "The main event",
      priceBody: "Single occupancy and extended stays are available on request. Flights, travel insurance and personal spending are not included.",
      items: [
        { icon: "car", title: "Private Mercedes fleet", body: "Vito and Sprinter vehicles at your disposal for the entire programme." },
        { icon: "plane", title: "Airport transfers", body: "Arrival and departure, airport and bus terminal." },
        { icon: "guide", title: "Licensed guide", body: "A professional Cappadocia guide with you throughout the touring days." },
        { icon: "bed", title: "3 nights accommodation", body: "Cave suites in Ürgüp with valley-facing terraces." },
        { icon: "coffee", title: "Daily breakfast", body: "Served on the terrace, balloons overhead if the wind agrees." },
        { icon: "glass", title: "Welcome dinner", body: "The first evening, the whole group, one long table." },
        { icon: "pottery", title: "Pottery workshop", body: "Hands-on session with a master potter in Avanos." },
        { icon: "atv", title: "ATV safari", body: "Guided run through the valleys at golden hour." },
        { icon: "balloon", title: "Balloon viewing", body: "Sunrise viewing experience, subject to weather conditions." },
        { icon: "guitar", title: "Live Performance with Dimitris Isaris", body: "An intimate live acoustic performance created exclusively for this journey, accompanied by a cocktail and professional photo session.", featured: true },
        { icon: "camera", title: "Photo session", body: "Professional images from the performance evening." },
        { icon: "star", title: "Event coordination", body: "A dedicated host managing every detail on the ground." },
      ],
    },

    location: {
      eyebrow: "Getting there",
      titleTop: "Cappadocia, in the heart of the",
      titleEm: "valleys",
      lede: "Nevşehir Kapadokya Airport is the recommended arrival airport for this experience. Send us your flight number and a driver will be waiting in arrivals with your name.",
      mapTitle: "Map of Ürgüp, Cappadocia, Türkiye",
      airportsHeading: "Recommended airport",
      stayHeading: "Where you stay",
      airports: [
        { code: "NAV", name: "Nevşehir Kapadokya Airport", distance: "Approximately 40 minutes by private transfer.", note: "The recommended arrival airport for this experience." },
      ],
      hotels: [
        { name: "Cave Suite Collection", detail: "Hand-carved stone suites in the heart of Ürgüp." },
      ],
      base: "Ürgüp, Cappadocia, Türkiye",
      baseNote: "Three nights in Ürgüp. No hotel changes during the programme.",
    },

    artist: {
      eyebrow: "The artist",
      heading: "About Dimitris Isaris",
      paragraphs: [
        "“I don’t create concerts. I create spaces where people can feel what words cannot express.”",
        "I believe music exists to give voice to our deepest unspoken emotions—the ones we carry within us but rarely find the words to say.",
        "For me, a performance is never just about music. It’s about creating a space where breathtaking landscapes, silence and melody become one. A space where time slows down, memories resurface, emotions awaken, and people reconnect with themselves.",
        "As a Greek artist based in Dubai, performing Turkish instrumental melodies for audiences around the world, I’ve learned that emotion has no nationality. It belongs to all of us.",
        "That’s why this journey exists.",
        "— Dimitris Isaris",
      ],
      portraitAlt: "Portrait of Dimitris Isaris with his guitar above the Cappadocia valley",
      socialOn: "Dimitris Isaris on",
    },

    faq: {
      eyebrow: "Questions",
      titleTop: "Frequently Asked",
      titleEm: "Questions",
      lede: "If something is not covered here, write to us directly — we answer personally.",
      footPre: "Still deciding? Write to",
      items: [
        { q: "Are flights included?", a: "No. Flights are not included, allowing you the flexibility to choose the airline, schedule and travel class that best suits your preferences." },
        { q: "Is the hot-air balloon ride included?", a: "No. The hot-air balloon flight is optional and can be arranged separately, subject to weather conditions and availability." },
        { q: "Can I book a private room?", a: "Yes. A limited number of private rooms are available for an additional supplement, subject to availability." },
        { q: "What happens if I need to cancel?", a: "Our cancellation policy is outlined in the Booking Terms & Conditions. If you have any questions before booking, we'll be happy to assist you." },
        { q: "Do I need travel insurance?", a: "Travel insurance is highly recommended to protect you against unexpected events before or during your journey." },
      ],
    },

    booking: {
      eyebrow: "Reserve",
      titleTop: "Reserve Your Cappadocia",
      titleEm: "Experience",
      lede: "Secure your place through our encrypted Stripe checkout. Your booking is confirmed only after successful payment and written confirmation from Dimitris Isaris Experiences.",
      datesLabel: "Dates",
      durationLabel: "Duration",
      cta: "Reserve & Pay Securely",
      configNote1: "Online booking is not available yet — the payment link has not been configured. Please write to",
      configNote2: "and we will arrange your place directly.",
      secure: "Payment is processed by Stripe. Card details are never entered on this website.",
      after: "After completing your payment, you will receive a Stripe payment confirmation. Our team will then contact you with the final booking confirmation and travel details.",
      contactPre: "Questions before booking?",
    },

    contact: {
      eyebrow: "Contact",
      titleTop: "Questions before you",
      titleEm: "commit",
      lede: "We answer between 09:00 and 21:00 Türkiye time, seven days a week.",
      write: "Write",
      call: "Call",
      hours: "09:00 – 21:00 TRT, daily",
      find: "Find",
      email: "Email",
      phone: "Phone",
      maps: "Google Maps",
    },

    availability: {
      label: "Very Limited Availability",
      note: "A small group experience",
    },

    footer: {
      markEm: "A Cappadocia Experience ·",
      newsletterHeading: "Newsletter",
      newsletterBody: "Future editions are announced to this list first, usually before they go public. Roughly four emails a year.",
      subscribe: "Subscribe to the mailing list",
      legalAria: "Legal",
    },

    legalLinks: {
      privacy: "Privacy Policy",
      terms: "Terms & Conditions",
      cookies: "Cookies",
    },

    legalChrome: {
      eyebrow: "Legal",
      back: "Back to the experience",
      returnCta: "Return to the experience",
      lastUpdated: "Last updated:",
      contactPre: "Questions about this page? Write to",
    },

    bookBar: {
      reserve: "Reserve your place",
    },
  },

  tr: {
    langName: "Türkçe",
    selector: { label: "Dil seçin", current: "Dil: Türkçe" },

    nav: {
      links: [
        { id: "program", label: "Program" },
        { id: "gallery", label: "Galeri" },
        { id: "services", label: "Dahil Olanlar" },
        { id: "location", label: "Konum" },
        { id: "artist", label: "Dimitris" },
        { id: "faq", label: "Sorular" },
        { id: "contact", label: "İletişim" },
      ],
      brandTag: "Özel Etkinlik",
      reserve: "Yerinizi Ayırtın",
      openMenu: "Menüyü aç",
      closeMenu: "Menüyü kapat",
      sections: "Bölümler",
    },

    cta: {
      reserve: "Yerinizi Ayırtın",
      downloadBrochure: "Broşürü İndirin",
      watchFilm: "Filmi İzleyin",
      openMaps: "Google Haritalar'da Aç",
    },

    hero: {
      eyebrow: "Özel Etkinlik",
      titleTop: "Müziğin Kapadokya ile Buluştuğu Yer",
      titleEm: "Kendinizi Burada Hayal Edin.",
      blurb1: "Unutulmaz dört gün. Bir samimi konser. Sonsuz anılar.",
      blurb2:
        "Saklı vadileri, nefes kesen gün doğumlarını ve Dimitris Isaris ile özel bir canlı akustik geceyi keşfedin.",
      scroll: "Kaydırın",
      scrollAria: "Programa kaydırın",
      heroAlt:
        "Dimitris Isaris, gün doğumunda Kapadokya vadisinin üzerinde sıcak hava balonları yükselirken bir terasta klasik gitar çalıyor",
    },

    countdown: {
      done: "Deneyim başladı.",
      days: "Gün",
      hours: "Saat",
      minutes: "Dakika",
      seconds: "Saniye",
      aria: "Deneyimin başlamasına kalan süre",
    },

    strip: [
      "Göreme Açık Hava Müzesi",
      "Paşabağ Vadisi",
      "Devrent Hayal Vadisi",
      "Avanos çömlekçiliği",
      "Gün doğumu balonları",
      "Özel akustik gece",
      "Altın saatte Güllü Vadi",
    ],

    program: {
      eyebrow: "Program",
      titleTop: "Gün gün,",
      titleEm: "saat saat",
      lede: "Planlananları görmek için herhangi bir günü açın. Zamanlamalar hava koşullarıyla değişir — programı değil, balon koridoru ve vadi ışığı belirler.",
      badge: "Ana Etkinlik",
      days: [
        {
          day: "01",
          title: "Kapadokya'ya Hoş Geldiniz",
          tagline: "Yavaşça varın. Kayaların altına dönüşünü izleyin.",
          blocks: [
            { icon: "car", label: "Varış", items: ["Havalimanı veya otogarda VIP karşılama", "Özel Mercedes Vito & Sprinter transferleri", "Otele giriş"] },
            { icon: "leaf", label: "Öğleden Sonra", items: ["İlk akşamdan önce dinlenme ve serbest zaman"] },
            { icon: "sun", label: "Gün Batımı", items: ["O akşamın ışığına göre seçilen panoramik bir manzara noktası", "Grupla birlikte gün batımı fotoğrafçılığı"] },
            { icon: "glass", label: "Akşam", items: ["Hoş geldin yemeği", "Otelde konaklama"] },
          ],
        },
        {
          day: "02",
          title: "Büyüyü Keşfedin",
          tagline: "Şafakta balonlar, öğleden sonra çömlek, alacakaranlıkta vadiler.",
          blocks: [
            { icon: "balloon", label: "Sabah", items: ["Gün doğumu balon izleme deneyimi (hava koşullarına bağlı)", "Vadi yürüyüşü — koşullara göre gün doğumu veya gündüz"] },
            { icon: "compass", label: "Öğleden Sonra", items: ["Tam gün rehberli Kapadokya turu", "Göreme Açık Hava Müzesi", "Paşabağ (Keşişler Vadisi)", "Devrent (Hayal Vadisi)", "Kızılırmak kıyısında Avanos"] },
            { icon: "pottery", label: "Kültür", items: ["Avanos'ta geleneksel çömlek atölyesi", "Ayak çarkında uygulamalı deneyim"] },
            { icon: "atv", label: "Gün Batımı", items: ["Işık azalırken vadilerde ATV safari"] },
            { icon: "moon", label: "Akşam", items: ["Serbest zaman", "Konaklama"] },
          ],
        },
        {
          day: "03",
          title: "Dimitris Isaris ile Canlı Performans",
          tagline: "Bütün yolculuğun etrafında kurulduğu akşam.",
          featured: true,
          blocks: [
            { icon: "coffee", label: "Sabah", items: ["Otelde kahvaltı"] },
            { icon: "leaf", label: "Serbest Zaman", items: ["Serbest zaman", "Otelde dinlenme", "Talep üzerine isteğe bağlı kişisel etkinlikler"] },
            { icon: "guitar", label: "Akşamın Öne Çıkanı", items: ["Hoş geldin kokteyli", "Dimitris Isaris'in özel akustik gitar performansı", "Tam etkinlik prodüksiyonu ve sahne düzeni", "Sanatçıyla fotoğraf çekimi", "Konaklama"] },
          ],
        },
        {
          day: "04",
          title: "Kapadokya'ya Veda",
          tagline: "Telaşsız bir sabah. Hiçbir şey aceleye gelmez.",
          blocks: [
            { icon: "coffee", label: "Sabah", items: ["Otelde kahvaltı", "Serbest zaman", "Göreme'de isteğe bağlı alışveriş", "Otelden çıkış"] },
            { icon: "car", label: "Ayrılış", items: ["Havalimanına veya otogara özel transfer"] },
          ],
        },
      ],
    },

    gallery: {
      eyebrow: "Galeri",
      titleTop: "Kapadokya'da dört gün",
      titleEm: "nasıl",
      titleEnd: "görünür.",
      lede: "Tam boyutta açmak için herhangi bir kareyi seçin. Set içinde gezinmek için ok tuşlarını kullanın.",
      openImage: "Görseli aç:",
      closeImage: "Görseli kapat",
      prevImage: "Önceki görsel",
      nextImage: "Sonraki görsel",
      of: "/",
      items: [
        { title: "ATV Gün Batımı Deneyimi", alt: "Altın saatte Kapadokya'da rehberli ATV deneyimi" },
        { title: "Özel Transferler", alt: "Gün doğumunda bir Kapadokya mağara otelinin önünde özel Mercedes transferi" },
        { title: "Çömlek Atölyesi", alt: "Elleriyle çalışan geleneksel Kapadokyalı çömlek ustası" },
        { title: "Kapadokya Mirası", alt: "Kapadokya'da korunmuş freskleriyle tarihi kaya kilise" },
        { title: "Balonlu Gün Doğumu", alt: "Sıcak hava balonlu bir gün doğumunda Kapadokya'ya bakan teras" },
        { title: "Mağara Yemeği", alt: "Bir Kapadokya mağara mekânında zarif, mum ışığında özel akşam yemeği" },
        { title: "Canlı Performans", alt: "Dimitris Isaris, mum ışığında samimi bir akustik konser veriyor" },
        { title: "Yüzlerce sıcak hava balonuyla görkemli Kapadokya altın saati gün doğumu, yüksek alan derinliği.", alt: "Yüzlerce sıcak hava balonu ve yüksek alan derinliğiyle görkemli Kapadokya altın saati gün doğumu" },
      ],
    },

    services: {
      eyebrow: "Neler dahil",
      titleTop: "Uçuş dışında",
      titleEm: "her şey",
      lede: "Tek fiyat; transferleri, odaları, rehberi, atölyeleri ve performansı kapsar. Uçuşu siz ayarlarsınız; indiğiniz andan itibaren gerisini biz hallederiz.",
      badge: "Ana Etkinlik",
      priceBody: "Tek kişilik konaklama ve uzatılmış kalışlar talep üzerine mevcuttur. Uçuşlar, seyahat sigortası ve kişisel harcamalar dahil değildir.",
      items: [
        { icon: "car", title: "Özel Mercedes filosu", body: "Tüm program boyunca hizmetinizde Vito ve Sprinter araçlar." },
        { icon: "plane", title: "Havalimanı transferleri", body: "Varış ve ayrılış, havalimanı ve otogar." },
        { icon: "guide", title: "Lisanslı rehber", body: "Tur günleri boyunca yanınızda profesyonel bir Kapadokya rehberi." },
        { icon: "bed", title: "3 gece konaklama", body: "Ürgüp'te vadiye bakan teraslı mağara süitleri." },
        { icon: "coffee", title: "Günlük kahvaltı", body: "Terasta servis edilir, rüzgâr izin verirse başınızın üzerinde balonlarla." },
        { icon: "glass", title: "Hoş geldin yemeği", body: "İlk akşam, tüm grup, tek uzun masa." },
        { icon: "pottery", title: "Çömlek atölyesi", body: "Avanos'ta bir usta çömlekçiyle uygulamalı çalışma." },
        { icon: "atv", title: "ATV safari", body: "Altın saatte vadilerde rehberli sürüş." },
        { icon: "balloon", title: "Balon izleme", body: "Hava koşullarına bağlı gün doğumu izleme deneyimi." },
        { icon: "guitar", title: "Dimitris Isaris ile Canlı Performans", body: "Bu yolculuk için özel olarak hazırlanmış, bir kokteyl ve profesyonel fotoğraf çekimi eşliğinde samimi bir canlı akustik performans.", featured: true },
        { icon: "camera", title: "Fotoğraf çekimi", body: "Performans akşamından profesyonel görüntüler." },
        { icon: "star", title: "Etkinlik koordinasyonu", body: "Sahadaki her ayrıntıyı yöneten özel bir ev sahibi." },
      ],
    },

    location: {
      eyebrow: "Ulaşım",
      titleTop: "Kapadokya, vadilerin",
      titleEm: "kalbinde",
      lede: "Bu deneyim için önerilen varış havalimanı Nevşehir Kapadokya Havalimanı'dır. Uçuş numaranızı bize gönderin; bir şoför, adınızın yazılı olduğu tabelayla varışta sizi bekliyor olacak.",
      mapTitle: "Ürgüp, Kapadokya, Türkiye haritası",
      airportsHeading: "Önerilen havalimanı",
      stayHeading: "Nerede kalıyorsunuz",
      airports: [
        { code: "NAV", name: "Nevşehir Kapadokya Havalimanı", distance: "Özel transferle yaklaşık 40 dakika.", note: "Bu deneyim için önerilen varış havalimanı." },
      ],
      hotels: [
        { name: "Cave Suite Collection", detail: "Ürgüp'ün kalbinde elde oyulmuş taş süitler." },
      ],
      base: "Ürgüp, Kapadokya, Türkiye",
      baseNote: "Ürgüp'te üç gece. Program boyunca otel değişikliği yok.",
    },

    artist: {
      eyebrow: "Sanatçı",
      heading: "Dimitris Isaris Hakkında",
      paragraphs: [
        "“Ben konser yaratmıyorum. İnsanların kelimelerin ifade edemediğini hissedebileceği alanlar yaratıyorum.”",
        "Müziğin, içimizde taşıdığımız ama nadiren dile getirecek kelimeleri bulduğumuz en derin, sözsüz duygularımıza ses vermek için var olduğuna inanıyorum.",
        "Benim için bir performans hiçbir zaman yalnızca müzikle ilgili değildir. Nefes kesen manzaraların, sessizliğin ve ezginin bir olduğu bir alan yaratmakla ilgilidir. Zamanın yavaşladığı, anıların yeniden canlandığı, duyguların uyandığı ve insanların kendileriyle yeniden bağ kurduğu bir alan.",
        "Dubai'de yaşayan, dünyanın dört bir yanındaki dinleyicilere Türk enstrümantal ezgileri seslendiren Yunan bir sanatçı olarak öğrendim ki duygunun milliyeti yoktur. O hepimize aittir.",
        "Bu yolculuk işte bu yüzden var.",
        "— Dimitris Isaris",
      ],
      portraitAlt: "Dimitris Isaris'in Kapadokya vadisi üzerinde gitarıyla portresi",
      socialOn: "Dimitris Isaris —",
    },

    faq: {
      eyebrow: "Sorular",
      titleTop: "Sıkça Sorulan",
      titleEm: "Sorular",
      lede: "Burada yer almayan bir konu varsa doğrudan bize yazın — kişisel olarak yanıtlıyoruz.",
      footPre: "Hâlâ karar veriyor musunuz? Bize yazın:",
      items: [
        { q: "Uçuşlar dahil mi?", a: "Hayır. Uçuşlar dahil değildir; böylece tercihlerinize en uygun havayolunu, tarifeyi ve seyahat sınıfını seçme esnekliğine sahip olursunuz." },
        { q: "Sıcak hava balonu turu dahil mi?", a: "Hayır. Sıcak hava balonu uçuşu isteğe bağlıdır ve hava koşulları ile uygunluğa bağlı olarak ayrıca ayarlanabilir." },
        { q: "Özel oda ayırtabilir miyim?", a: "Evet. Uygunluğa bağlı olarak, ek bir ücret karşılığında sınırlı sayıda özel oda mevcuttur." },
        { q: "İptal etmem gerekirse ne olur?", a: "İptal politikamız Rezervasyon Şartlar ve Koşulları'nda belirtilmiştir. Rezervasyon öncesinde herhangi bir sorunuz olursa memnuniyetle yardımcı oluruz." },
        { q: "Seyahat sigortasına ihtiyacım var mı?", a: "Yolculuğunuzdan önce veya sırasında beklenmedik durumlara karşı sizi korumak için seyahat sigortası şiddetle önerilir." },
      ],
    },

    booking: {
      eyebrow: "Rezervasyon",
      titleTop: "Kapadokya Deneyiminizi",
      titleEm: "Ayırtın",
      lede: "Yerinizi şifreli Stripe ödeme sayfamız üzerinden güvence altına alın. Rezervasyonunuz yalnızca başarılı ödeme ve Dimitris Isaris Experiences'tan gelen yazılı onaydan sonra kesinleşir.",
      datesLabel: "Tarihler",
      durationLabel: "Süre",
      cta: "Güvenle Ayırtın ve Ödeyin",
      configNote1: "Çevrimiçi rezervasyon henüz kullanılamıyor — ödeme bağlantısı yapılandırılmadı. Lütfen şu adrese yazın:",
      configNote2: "yerinizi doğrudan ayarlayalım.",
      secure: "Ödeme Stripe tarafından işlenir. Kart bilgileri bu web sitesine asla girilmez.",
      after: "Ödemenizi tamamladıktan sonra bir Stripe ödeme onayı alacaksınız. Ekibimiz daha sonra nihai rezervasyon onayı ve seyahat ayrıntılarıyla sizinle iletişime geçecek.",
      contactPre: "Rezervasyondan önce sorularınız mı var?",
    },

    contact: {
      eyebrow: "İletişim",
      titleTop: "Karar vermeden önce",
      titleEm: "sorularınız",
      lede: "Haftanın yedi günü, Türkiye saatiyle 09.00 ile 21.00 arasında yanıt veriyoruz.",
      write: "Yazın",
      call: "Arayın",
      hours: "09.00 – 21.00 TSİ, her gün",
      find: "Bulun",
      email: "E-posta",
      phone: "Telefon",
      maps: "Google Haritalar",
    },

    availability: {
      label: "Çok Sınırlı Kontenjan",
      note: "Küçük bir grup deneyimi",
    },

    footer: {
      markEm: "A Cappadocia Experience ·",
      newsletterHeading: "Bülten",
      newsletterBody: "Gelecek etkinlikler ilk olarak bu listeye, genellikle kamuya açıklanmadan önce duyurulur. Yılda yaklaşık dört e-posta.",
      subscribe: "Listeye Abone Olun",
      legalAria: "Yasal",
    },

    legalLinks: {
      privacy: "Gizlilik Politikası",
      terms: "Şartlar ve Koşullar",
      cookies: "Çerezler",
    },

    legalChrome: {
      eyebrow: "Yasal",
      back: "Deneyime geri dön",
      returnCta: "Deneyime geri dön",
      lastUpdated: "Son güncelleme:",
      contactPre: "Bu sayfayla ilgili sorularınız mı var? Bize yazın:",
    },

    bookBar: {
      reserve: "Yerinizi Ayırtın",
    },
  },
};
