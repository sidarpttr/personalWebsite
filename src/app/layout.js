import { Geist, Geist_Mono, Anton, Archivo_Black, Syne } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const anton = Anton({
    variable: "--font-anton",
    subsets: ["latin"],
    weight: "400",
});

const archivoBlack = Archivo_Black({
    variable: "--font-archivo-black",
    subsets: ["latin"],
    weight: "400",
});

const syne = Syne({
    variable: "--font-syne",
    subsets: ["latin"],
    weight: ["800"],
});

export const metadata = {
    metadataBase: new URL("https://www.sidaradguzel.online"),
    title: "Sidar Adıgüzel | Full Stack Developer",
    description: "Sidar Adıgüzel'in kişisel web sitesi...",
    openGraph: {
        title: "Sidar Adıgüzel | Full Stack Developer",
        description: "React ve Next.js ile geliştirilmiş portfolyo sitesi.",
        url: "https://www.sidaradguzel.online",
        siteName: "Sidar Portfolio",
        images: [
            {
                url: "/og-image.png",
                width: 800,
                height: 600,
            },
        ],
        locale: "tr_TR",
        type: "website",
    },
    icons: {
        icon: "/favicon.ico",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                {/* Scroll to top on page load */}
                <script dangerouslySetInnerHTML={{
                    __html: `
                        if (typeof window !== 'undefined') {
                            window.scrollTo(0, 0);
                            history.scrollRestoration = 'manual';
                        }
                    `
                }} />
                
                {/* Google Fonts için performans iyileştirmesi */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="true"
                />
                <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
                <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${anton.variable} ${archivoBlack.variable} ${syne.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
