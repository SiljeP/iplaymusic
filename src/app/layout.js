import "./globals.css";



export const metadata = {
  title: "iPlayMusic",
  description: "A Music Player Based on Spotify's API",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
