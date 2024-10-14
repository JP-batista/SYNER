// src/app/login/signin/page.tsx

"use client"; // Marca como Client Component

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function SigninPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); // Para redirecionamento

  // Função para lidar com o envio do formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Verifica se os campos estão preenchidos
    if (!email || !password) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    // Aqui você pode adicionar lógica de autenticação (API, Firebase, etc.)
    // Se a autenticação for bem-sucedida, redirecione o usuário
    router.push('/'); // Redireciona para a página principal
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg max-w-3xl w-full p-8 flex flex-col items-center">
        {/* Título e logo */}
        <div className="mb-8 text-center">
          <Image
            src="/icons/syner-logo.png" // Substitua pelo caminho da logo do Syner
            alt="Logo Syner"
            width={200}
            height={200}
          />
          <h1 className="text-2xl font-semibold text-gray-800 mt-4">Entrar na sua conta</h1>
        </div>

        {/* Formulário de login */}
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Seu e-mail"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Senha</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Sua senha"
            />
          </div>

          {/* Botão de entrar */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Entrar
          </button>
        </form>

        {/* Link para criar uma nova conta */}
        <div className="mt-6">
          <p className="text-gray-600">
            Não tem uma conta?{' '}
            <Link href="/login/signup" className="text-blue-600 hover:underline">
              Criar conta
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
