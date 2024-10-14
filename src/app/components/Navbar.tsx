// src/app/components/Navbar.tsx

"use client"; // Informa ao Next.js que este é um Client Component

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <aside className="bg-white shadow-lg w-24 h-full fixed top-0 left-0 flex flex-col items-center py-4 z-50">
      {/* Botão de menu com 3 barrinhas */}
      <div className="relative mb-6">
        <button
          onClick={toggleDropdown}
          className="flex flex-col items-center px-1 py-1 rounded-md hover:bg-gray-200 transition-colors duration-300 "
        >
          <div className="mb-8"></div>
          <div className="w-8 h-1 bg-[#4E74F9] mb-1"></div>
          <div className="w-8 h-1 bg-[#4E74F9] mb-1"></div>
          <div className="w-8 h-1 bg-[#4E74F9] mb-4"></div>
        </button>

        {isDropdownOpen && (
          <div className="absolute top-10 left-0 w-32 bg-white shadow-lg rounded-lg">
            <Link href="/more-info" className="block px-4 py-2 text-sm text-[#4E74F9] hover:bg-gray-200">
              Mais Informações
            </Link>
            <Link href="/settings" className="block px-4 py-2 text-sm text-[#4E74F9] hover:bg-gray-200">
              Configurações
            </Link>
          </div>
        )}
      </div>

      {/* Botão "+" */}
      <button className="bg-[#D8DCFF] text-[#4E74F9] text-3xl font-bold rounded-2xl w-16 h-16 mb-6 flex items-center justify-center shadow-lg hover:bg-blue-600 transition-colors duration-300">
        +
      </button>

      <nav className="w-full relative">
        <ul className="flex flex-col space-y-4 px-1">
          <li>
            <Link href="/" className="flex flex-col items-center space-y-1 px-2 py-2 rounded-md hover:bg-gray-200 transition-colors duration-300">
              <Image src="/icons/home.png" alt="Início" width={20} height={20} />
              <span className="text-xs font-medium text-[#4E74F9]">Início</span>
            </Link>
          </li>
          <li>
            <Link href="/history" className="flex flex-col items-center space-y-1 px-2 py-2 rounded-md hover:bg-gray-200 transition-colors duration-300">
              <Image src="/icons/history.png" alt="Histórico" width={20} height={20} />
              <span className="text-xs font-medium text-[#4E74F9]">Histórico</span>
            </Link>
          </li>
          <li>
            <Link href="/messages" className="flex flex-col items-center space-y-1 px-2 py-2 rounded-md hover:bg-gray-200 transition-colors duration-300">
              <Image src="/icons/messages.png" alt="Recados" width={20} height={20} />
              <span className="text-xs font-medium text-[#4E74F9]">Recados</span>
            </Link>
          </li>
          <li>
            <Link href="/agenda" className="flex flex-col items-center space-y-1 px-2 py-2 rounded-md hover:bg-gray-200 transition-colors duration-300">
              <Image src="/icons/calendar.png" alt="Agenda" width={20} height={20} />
              <span className="text-xs font-medium text-[#4E74F9]">Agenda</span>
            </Link>
          </li>
          <li>
            <Link href="/chat" className="flex flex-col items-center space-y-1 px-2 py-2 rounded-md hover:bg-gray-200 transition-colors duration-300">
              <Image src="/icons/chat.png" alt="Chat" width={20} height={20} />
              <span className="text-xs font-medium text-[#4E74F9]">Chat</span>
            </Link>
          </li>
          <li>
            <Link href="/profile" className="flex flex-col items-center space-y-1 px-2 py-2 rounded-md hover:bg-gray-200 transition-colors duration-300">
              <Image src="/icons/profile.png" alt="Perfil" width={20} height={20} />
              <span className="text-xs font-medium text-[#4E74F9]">Perfil</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}


