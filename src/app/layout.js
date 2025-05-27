import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    metadataBase: new URL("https://www.sidaradguzel.online"),
    title: "Sidar Adıgüzel | Frontend Developer",
    description:
        "Sidar Adıgüzel'in kişisel web sitesi. React ve Next.js projeleri, blog yazıları ve daha fazlası.",
    keywords: "Sidar Adıgüzel, React, Flutter, firebase, unity, Next.js, frontend, portfolyo",
    authors: [
        { name: "Sidar Adıgüzel", url: "https://www.sidaradguzel.online" },
    ],
    openGraph: {
        title: "Sidar Adıgüzel | Frontend Developer",
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
    const updateVisitorCount = async () => {
        try {
            // Mevcut sayıyı çek
            const res = await fetch(
                "https://6833083fc3f2222a8cb4b55f.mockapi.io/api/logs/count/1"
            );
            const data = await res.json();
            const newCount = (data.count || 0) + 1;

            // Sayacı güncelle
            await fetch(
                "https://6833083fc3f2222a8cb4b55f.mockapi.io/api/logs/count/1",
                {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ count: newCount }),
                }
            );
        } catch (error) {
            console.error("Ziyaretçi sayısı güncellenemedi:", error);
        }
    };

    //updateVisitorCount();

    return (
        <html lang="en">
            <head />
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
