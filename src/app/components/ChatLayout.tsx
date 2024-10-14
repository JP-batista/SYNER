// src/app/components/ChatLayout.tsx

"use client"; // Marca o componente como um Client Component

import { ReactNode } from 'react';
import ChatSidebar from './ChatSidebar'; // Importa a barra lateral de contatos

export default function ChatLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Barra lateral de contatos */}
      <aside className="w-64 fixed left-0 top-0 h-full bg-white shadow-lg z-10">
        <ChatSidebar /> {/* A barra lateral com a lista de contatos */}
      </aside>

      {/* Conteúdo do chat */}
      <div className="flex-1 ml-64 p-6"> {/* Margin-left para evitar a sobreposição */}
        {children} {/* Aqui é onde o conteúdo do chat será carregado */}
      </div>
    </div>
  );
}
