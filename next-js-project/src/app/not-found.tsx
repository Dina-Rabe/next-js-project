import Image from 'next/image'

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-Black">
      <div className="max-w-md px-4 py-8 bg-white rounded-lg shadow-lg">
        <div className="flex items-center justify-center mb-6">
          <a href="https://allo-win.net/" className="hover:opacity-80 transition-opacity">
            <Image src="/allo-win.png" alt="Allo-Win Logo" width={80} height={80} />
          </a>
        </div>
        <h1 className="text-3xl font-bold text-Tangerine mb-4">This page doesn&apos;t exist.</h1>
        <p className="text-Sand-Dollar mb-6">Want to explore more? Meet me <a
            href="https://github.com/Dina-Rabe"
            className='text-Tangerine'
            >
             here </a>
            
        </p>
        
      </div>
    </div>
  )
}