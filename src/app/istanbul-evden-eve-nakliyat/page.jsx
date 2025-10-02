// app/istanbul-evden-eve-nakliyat/page.tsx
import Link from "next/link";

export const metadata = {
    title: "İstanbul Evden Eve Nakliyat | Katlım Nakliyat Rehberi",
    description:
        "İstanbul'da evden eve nakliyat sürecinde doğru firma seçimi, paketleme, asansörlü taşıma ve fiyatlandırma hakkında pratik rehber.",
    alternates: {
        canonical: "https://sidaradguzel.online/istanbul-evden-eve-nakliyat",
    },
    openGraph: {
        title: "İstanbul Evden Eve Nakliyat | Katlım Nakliyat Rehberi",
        description:
            "Kurumsal standartlarda güvenli taşımacılık için ipuçları, checklist ve İstanbul odaklı pratik bir kılavuz.",
        url: "https://sidaradguzel.online/istanbul-evden-eve-nakliyat",
        type: "article",
        locale: "tr_TR",
    },
    robots: { index: true, follow: true },
};

export default function NakliyatLanding() {
    const katilimUrl = "https://katilimnakliyat.com/"; // hedef site (alan adını kesinleştir)
    const tel1 = "tel:+902163700734";
    const tel2 = "tel:+902128770734";
    const whatsapp = "https://wa.me/905305758436";
    const email = "mailto:info@katilimnakliyat.com";

    const jsonLdArticle = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "İstanbul Evden Eve Nakliyat | Katlım Nakliyat Rehberi",
        description:
            "İstanbul'da evden eve nakliyat için firma seçimi, paketleme, asansörlü taşıma ve fiyatlandırma ipuçları.",
        inLanguage: "tr-TR",
        author: { "@type": "Person", name: "Sidar Adgüzel" },
        publisher: { "@type": "Organization", name: "sidaradguzel.online" },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://sidaradguzel.online/istanbul-evden-eve-nakliyat",
        },
    };

    const jsonLdFaq = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "Asansörlü nakliyat ne zaman gerekir?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yüksek katlı binalarda merdiven boşluğu dar ise, geniş hacimli eşyaların güvenli ve hızlı taşınması için asansörlü nakliyat tercih edilir.",
                },
            },
            {
                "@type": "Question",
                name: "Evden eve nakliyat fiyatı nasıl belirlenir?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Kat sayısı, oda sayısı, paketleme ihtiyacı, asansör kullanımı ve mesafe gibi faktörlere göre belirlenir. Ücretsiz ekspertiz doğru fiyatı sağlar.",
                },
            },
            {
                "@type": "Question",
                name: "Taşıma sigortası neleri kapsar?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Standart sigorta; taşıma sırasında oluşabilecek olası hasarlara karşı eşyalarınızı teminat altına alır. Kapsam poliçeye göre genişletilebilir.",
                },
            },
        ],
    };

    return (
        <main className="mx-auto max-w-3xl px-6 py-16 text-neutral-200">
            {/* JSON-LD (rich results) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jsonLdArticle),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
            />

            {/* Hero */}
            <header className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
                <h1 className="text-3xl font-semibold tracking-tight text-neutral-100">
                    İstanbul Evden Eve Nakliyat – Pratik Rehber
                </h1>
                <p className="mt-3 text-neutral-400">
                    Profesyonellik ve güvenin buluştuğu bir taşınma deneyimi
                    için doğru planlama, şeffaf fiyatlandırma ve uzman ekip
                    şart. Bu sayfada İstanbul odağında ev taşıma sürecini adım
                    adım özetliyoruz.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                    <Link
                        href={katilimUrl}
                        target="_blank"
                        className="inline-flex items-center rounded-full border border-neutral-700 px-5 py-2 text-sm hover:bg-neutral-800"
                    >
                        Katılım Nakliyat Ana Sayfa
                    </Link>
                    <Link
                        href={tel1}
                        className="inline-flex items-center rounded-full border border-neutral-700 px-5 py-2 text-sm hover:bg-neutral-800"
                    >
                        7/24 Destek: 0216 370 07 34
                    </Link>
                </div>
            </header>

            {/* Neden kurumsal standartlar? */}
            <section className="mt-10">
                <h2 className="text-xl font-semibold text-neutral-100">
                    Kurumsal Standartlarda Güvenilir Taşımacılık
                </h2>
                <p className="mt-3 text-neutral-300">
                    Taşınma; planlama, iletişim ve dikkatli uygulama gerektirir.
                    Kurumsal süreçlerle yönetilen bir nakliyat; ekspertiz,
                    paketleme, sigorta ve zamanında teslim aşamalarının her
                    birini ölçülebilir kalite standartlarına bağlar. Bu da
                    sürpriz maliyetleri önler ve stresi azaltır.
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6 text-neutral-300">
                    <li>Ücretsiz ekspertiz ve net planlama</li>
                    <li>Şeffaf fiyatlandırma – gizli maliyet yok</li>
                    <li>Sigortalı taşıma ve deneyimli ekip</li>
                    <li>Sürecin her adımında bilgilendirme</li>
                </ul>
            </section>

            {/* Hizmetler (benzer başlıkları kapsayan özgün anlatım) */}
            <section className="mt-10">
                <h2 className="text-xl font-semibold text-neutral-100">
                    Hizmetler
                </h2>
                <div className="mt-4 grid gap-4">
                    <div className="rounded-xl border border-neutral-800 p-4">
                        <h3 className="font-semibold text-neutral-100">
                            Evden Eve Nakliyat
                        </h3>
                        <p className="mt-2 text-neutral-300">
                            İstanbul’un tüm ilçelerinde oda sayısı, kat bilgisi
                            ve bina koşullarına göre planlanan, paketlemeli veya
                            müşterinin hazırlık yaptığı modellere uygun esnek
                            çözümler.
                        </p>
                    </div>
                    <div className="rounded-xl border border-neutral-800 p-4">
                        <h3 className="font-semibold text-neutral-100">
                            Ofis Taşıma
                        </h3>
                        <p className="mt-2 text-neutral-300">
                            İş sürekliliğini aksatmadan; BT ekipmanı, arşiv ve
                            mobilyaların envanterli şekilde sökülüp yeni
                            lokasyona kurulduğu kurumsal taşımalar.
                        </p>
                    </div>
                    <div className="rounded-xl border border-neutral-800 p-4">
                        <h3 className="font-semibold text-neutral-100">
                            Şehirler Arası Nakliyat
                        </h3>
                        <p className="mt-2 text-neutral-300">
                            İstanbul çıkışlı haftalık sevkiyatlarla İzmir,
                            Antalya, Ankara ve çevre illere zamanında teslimat.
                        </p>
                    </div>
                    <div className="rounded-xl border border-neutral-800 p-4">
                        <h3 className="font-semibold text-neutral-100">
                            Parça Eşya Taşıma
                        </h3>
                        <p className="mt-2 text-neutral-300">
                            Birkaç parça eşya veya beyaz eşya için ekonomik ve
                            planlı taşımalar; apartman ve site kurallarına
                            uyumlu randevulu hizmet.
                        </p>
                    </div>
                    <div className="rounded-xl border border-neutral-800 p-4">
                        <h3 className="font-semibold text-neutral-100">
                            Arşiv Taşıma
                        </h3>
                        <p className="mt-2 text-neutral-300">
                            Sınıflandırılmış kutulama, numaralandırma ve güvenli
                            sevkiyat prosedürleriyle düzenli aktarım.
                        </p>
                    </div>
                    <div className="rounded-xl border border-neutral-800 p-4">
                        <h3 className="font-semibold text-neutral-100">
                            Eşya Depolama
                        </h3>
                        <p className="mt-2 text-neutral-300">
                            Kısa ve orta vadeli depolama için temiz, kuru ve
                            kontrollü alanlar; erişim kolaylığı.
                        </p>
                    </div>
                </div>
            </section>

            {/* Neden Katılım Nakliyat? */}
            <section className="mt-10 rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
                <h2 className="text-xl font-semibold text-neutral-100">
                    Neden Katılım Nakliyat?
                </h2>
                <ul className="mt-3 list-disc space-y-2 pl-6 text-neutral-300">
                    <li>Sigortalı taşıma ve eğitimli personel</li>
                    <li>
                        Asansörlü nakliyat ile yüksek katlarda hasar riskinin
                        düşmesi
                    </li>
                    <li>Şeffaf teklif – sabit fiyat garantisi</li>
                    <li>Süreç boyunca düzenli bilgilendirme</li>
                </ul>
                <p className="mt-4">
                    Detaylar için{" "}
                    <Link
                        href={katilimUrl}
                        target="_blank"
                        className="underline underline-offset-4 hover:text-neutral-100"
                    >
                        Katılım Nakliyat web sitesini
                    </Link>{" "}
                    ziyaret edin.
                </p>
            </section>

            {/* İstanbul odağı + Asansörlü nakliyat vurgusu */}
            <section className="mt-10">
                <h2 className="text-xl font-semibold text-neutral-100">
                    İstanbul’da Profesyonel Ev Taşıma
                </h2>
                <p className="mt-3 text-neutral-300">
                    Kadıköy, Üsküdar, Beşiktaş, Fatih ve Beyoğlu başta olmak
                    üzere tüm ilçelerde; apartman yönetmeliği, park alanı ve
                    asansör erişimi önceden kontrol edilerek planlanan taşıma
                    hizmeti sunulur. Yüksek katlı binalarda asansörlü nakliyat
                    hem hızı artırır hem de dar merdiven boşluklarındaki
                    riskleri azaltır.
                </p>
            </section>

            {/* Haftalık sevkiyatlar & hizmet bölgeleri */}
            <section className="mt-10">
                <h3 className="text-lg font-semibold text-neutral-100">
                    Haftalık Sevkiyatlar
                </h3>
                <ul className="mt-3 list-disc space-y-2 pl-6 text-neutral-300">
                    <li>İstanbul ⇄ İzmir (parça eşya dahil)</li>
                    <li>İstanbul ⇄ Antalya (parça eşya dahil)</li>
                    <li>İstanbul ⇄ Ankara (parça eşya dahil)</li>
                </ul>

                <h3 className="mt-8 text-lg font-semibold text-neutral-100">
                    Başlıca Hizmet Bölgeleri
                </h3>
                <ul className="mt-3 grid grid-cols-1 gap-2 pl-6 text-neutral-300 sm:grid-cols-2 list-disc">
                    <li>İstanbul Anadolu Yakası</li>
                    <li>İstanbul Avrupa Yakası</li>
                    <li>Antalya</li>
                    <li>İzmir</li>
                    <li>Ankara</li>
                </ul>
            </section>

            {/* Checklist */}
            <section className="mt-10">
                <h3 className="text-lg font-semibold text-neutral-100">
                    Taşınma Checklist’i
                </h3>
                <ol className="mt-3 list-decimal space-y-2 pl-6 text-neutral-300">
                    <li>Ekspertiz randevusu ve sabit fiyat teklifi</li>
                    <li>Asansör & park uygunluğu teyidi</li>
                    <li>Oda bazlı etiketlenmiş paketleme planı</li>
                    <li>Kırılgan eşyalar için çift kat koruma</li>
                    <li>Yeni adrese teslim ve yerleşim şeması</li>
                </ol>
            </section>

            {/* Müşteri yorumları – kısa alıntılar */}
            <section className="mt-10">
                <h2 className="text-xl font-semibold text-neutral-100">
                    Müşteri Görüşleri
                </h2>
                <div className="mt-4 grid gap-4">
                    {[
                        {
                            name: "Ahmet Yılmaz",
                            text: "Profesyonel ve titiz çalıştılar. Eşyalarım zamanında ve eksiksiz teslim edildi.",
                        },
                        {
                            name: "Elif Demir",
                            text: "Hasarsız ve planlı bir süreçti. İletişim kalitesi sayesinde taşınma çok rahat geçti.",
                        },
                        {
                            name: "Deniz Çelik",
                            text: "Ofis taşımamız organize ilerledi, ekip profesyoneldi. Tavsiye ederim.",
                        },
                    ].map((t, i) => (
                        <figure
                            key={i}
                            className="rounded-xl border border-neutral-800 p-4"
                        >
                            <blockquote className="text-neutral-300">
                                “{t.text}”
                            </blockquote>
                            <figcaption className="mt-2 text-sm text-neutral-400">
                                — {t.name}
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </section>

            {/* İletişim / CTA */}
            <section className="mt-10 rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
                <h2 className="text-xl font-semibold text-neutral-100">
                    İletişim ve Hızlı Teklif
                </h2>
                <p className="mt-2 text-neutral-300">
                    Hemen fiyat teklifi almak veya ücretsiz ekspertiz randevusu
                    oluşturmak için iletişime geçin.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                    <Link
                        href={tel2}
                        className="inline-flex items-center rounded-full border border-neutral-700 px-5 py-2 text-sm hover:bg-neutral-800"
                    >
                        0212 877 07 34
                    </Link>
                    <Link
                        href={whatsapp}
                        target="_blank"
                        className="inline-flex items-center rounded-full border border-neutral-700 px-5 py-2 text-sm hover:bg-neutral-800"
                    >
                        WhatsApp: 0530 575 84 36
                    </Link>
                    <Link
                        href={email}
                        className="inline-flex items-center rounded-full border border-neutral-700 px-5 py-2 text-sm hover:bg-neutral-800"
                    >
                        info@katilimnakliyat.com
                    </Link>
                    <Link
                        href={katilimUrl}
                        target="_blank"
                        className="inline-flex items-center rounded-full border border-neutral-700 px-5 py-2 text-sm hover:bg-neutral-800"
                    >
                        Katılım Nakliyat’a Git
                    </Link>
                </div>
                <address className="mt-4 not-italic text-sm text-neutral-400">
                    Merkez: Cevizli Mah. Giresun Sk. No:13/8 Maltepe / İstanbul
                </address>
            </section>

            {/* SSS – metinsel (JSON-LD yukarıda) */}
            <section className="mt-10">
                <h2 className="text-xl font-semibold text-neutral-100">
                    Sık Sorulanlar
                </h2>
                <div className="mt-4 space-y-4">
                    <details className="rounded-lg border border-neutral-800 p-4">
                        <summary className="cursor-pointer font-medium text-neutral-100">
                            Asansörlü nakliyat ne zaman gerekir?
                        </summary>
                        <p className="mt-2 text-neutral-300">
                            Yüksek katlı binalarda geniş eşyaların güvenle
                            indirilip çıkarılması için tercih edilir; hız ve
                            güvenlik sağlar.
                        </p>
                    </details>
                    <details className="rounded-lg border border-neutral-800 p-4">
                        <summary className="cursor-pointer font-medium text-neutral-100">
                            Fiyat nasıl belirlenir?
                        </summary>
                        <p className="mt-2 text-neutral-300">
                            Oda sayısı, kat durumu, asansör erişimi, paketleme
                            ihtiyacı ve mesafeye göre. Ücretsiz ekspertiz doğru
                            teklif için önemlidir.
                        </p>
                    </details>
                    <details className="rounded-lg border border-neutral-800 p-4">
                        <summary className="cursor-pointer font-medium text-neutral-100">
                            Sigorta kapsamı nedir?
                        </summary>
                        <p className="mt-2 text-neutral-300">
                            Standart poliçe taşıma sırasında oluşabilecek
                            hasarları kapsar. İhtiyaca göre teminat
                            genişletilebilir.
                        </p>
                    </details>
                </div>
            </section>
        </main>
    );
}
