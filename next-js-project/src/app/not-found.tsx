import Image from 'next/image'

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-Sand-Dollar">
      <div className="max-w-md px-4 py-8 bg-white rounded-lg shadow-lg">
        <div className="flex items-center justify-center mb-6">
          <a href="https://allo-win.net/" className="hover:opacity-80 transition-opacity">
            <Image src="/allo-win.png" alt="Allo-Win Logo" width={80} height={80} />
          </a>
        </div>
        <h1 className="text-3xl font-bold text-Tangerine mb-4">This page doesn't exist.</h1>
        <p className="text-Black mb-6">Want to explore more? Meet me  
            <a
            href="https://github.com/Dina-Rabe"
            className="inline-block bg-Tangerine hover:bg-Tangerine text-white font-bold py-2 px-4 rounded transition-colors"
            >
             here </a>
            
        </p>
        
      </div>
    </div>
  )
}