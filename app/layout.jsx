import { Inter } from "next/font/google";
import "./globals.css";
import ConvexClientProvider from "@/provider/convex-client-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: " IdeaMaple",
  description: "Collabrative real time board",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConvexClientProvider>{children}</ConvexClientProvider>
      </body>
    </html>
  );
}
