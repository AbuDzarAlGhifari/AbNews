import '../style/globals.css';

export const metadata = {
  title: 'AbNews',
  description: '',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-poppins">{children}</body>
    </html>
  );
}
