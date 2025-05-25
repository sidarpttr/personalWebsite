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
    title: "Sidar Adıgüzel",
    description: "Sidar Adıgüzel Portfolio",
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

    updateVisitorCount();

    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
