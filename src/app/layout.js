import "./globals.css";



export const metadata = {
  title: "iPlayMusic",
  description: "A Music Player Based on Spotify's API",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-white dark:bg-purple max-w-full max-h-full">
      <body className="bg-white dark:bg-purple max-w-full max-h-full">{children}</body>
    </html>
  );
}
