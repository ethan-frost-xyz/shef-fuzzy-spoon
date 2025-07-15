export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold text-center mb-8">
          Welcome to Shef Fuzzy Spoon
        </h1>
      </div>
      
      <div className="relative flex place-items-center">
        <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">
            🎉 Your Next.js app is ready!
          </h2>
          <p className="text-lg">
            Built with TypeScript, React, Tailwind CSS, and more.
          </p>
        </div>
      </div>
      
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h3 className="mb-3 text-2xl font-semibold">
            Next.js{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              →
            </span>
          </h3>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            The React framework for production.
          </p>
        </div>
      </div>
    </main>
  )
} 