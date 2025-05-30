'use client'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Página não encontrada</p>
        <a href="/" className="text-green-600 hover:text-green-700 font-medium">
          Voltar para a página inicial
        </a>
      </div>
    </div>
  )
} 