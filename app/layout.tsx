import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("http://localhost:3000"),

	title: "Priyanshu",
	authors: {
		name: "chensokheng",
	},

	description:
		"I'm a Front-end Developer and a Btech(CSE) 4th year student learning DSA.",
	openGraph: {
		title: "Priyanshu",
		description:
			"I'm a Front-end Developer and a Btech(CSE) 4th year student learning DSA.",
		url: "http://localhost:3000",
		siteName: "Priyanshu",
		images: "/Screenshot(23).png",
		type: "website",
	},
	keywords: ["daily web coding", "chensokheng", "dailywebcoding"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
