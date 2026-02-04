import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center shadow-2xl">
        <h1 className="text-4xl font-bold text-white mb-6">
          Readly Finance
        </h1>

        <div className="space-y-6">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200 shadow-lg hover:shadow-indigo-500/25"
          >
            Count: {count}
          </button>

          <p className="text-slate-300 text-sm">
            Edit <code className="bg-slate-700 px-2 py-1 rounded text-indigo-300">src/App.tsx</code> and save to test HMR
          </p>
        </div>

        <p className="mt-8 text-slate-400 text-sm">
          Vite + React + AWS Amplify + Tailwind CSS
        </p>
      </div>
    </main>
  )
}

export default App
