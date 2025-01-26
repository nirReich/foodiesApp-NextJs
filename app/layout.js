import './globals.css';
import MainHeader from '@/components/mainHeader/MainHeader';
import MainHeaderBg from '@/components/mainHeader/MainHeaderBg';

export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeaderBg/>
        <MainHeader/>
        {children}
      </body>
    </html>
  );
}
