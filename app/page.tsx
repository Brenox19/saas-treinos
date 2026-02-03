export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center py-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            SaaS Treinos
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Plataforma completa para Personal Trainers e Alunos
          </p>
          <div className="space-x-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700">
              Começar Agora
            </button>
            <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50">
              Saiba Mais
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
