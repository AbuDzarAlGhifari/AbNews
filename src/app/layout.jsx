import Header from '@/components/Header';
import '../style/globals.css';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'AbNewsPortal',
  description: 'Stay Updated with the Latest News',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
