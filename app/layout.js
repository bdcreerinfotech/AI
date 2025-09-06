import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], // Include desired weights
});

export const metadata = {
  title: "AI Development Services | Creer Infotech",
  description:
    "Creer Infotech provides AI development services including machine learning, NLP, computer vision, and AI-powered automation. We build custom AI solutions to help businesses scale and innovate.",
  keywords: [
    "AI development services",
    "custom AI solutions",
    "machine learning development",
    "AI automation",
    "natural language processing",
    "computer vision solutions",
    "enterprise AI services",
    "AI consulting",
    "business AI integration",
    "AI software development",
    "Creer Infotech",
  ],
  openGraph: {
    title: "AI Development Services | Creer Infotech",
    description:
      "Transform your business with AI solutions from Creer Infotech. We specialize in machine learning, NLP, computer vision, and AI automation for enterprises.",
    url: "https://creerinfotech.com/ai-development",
    siteName: "Creer Infotech",
    images: [
      {
        url: "https://creerinfotech.com/assets/ai-services-banner.webp",
        width: 1200,
        height: 630,
        alt: "AI Development Services - Creer Infotech",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Development Services | Creer Infotech",
    description:
      "Creer Infotech delivers custom AI development services: machine learning, NLP, computer vision, and automation for business growth.",
    images: ["https://creerinfotech.com/assets/ai-services-banner.webp"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
