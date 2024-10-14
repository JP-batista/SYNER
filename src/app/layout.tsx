// src/app/layout.tsx

import './globals.css';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'Syner',
  description: 'Plataforma de aprendizado personalizada',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="flex">
        <Navbar />
        <main className="ml-24 w-full p-8 bg-gray-100 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
