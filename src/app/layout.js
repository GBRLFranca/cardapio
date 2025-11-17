import "./globals.css";

export const metadata = {
  title: "Cardápio",
  description: "Cardápio digital online",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
