import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <header className="py-6 mt-8 container mx-auto max-w-2xl">
        <div className="flex flex-col md:flex-row items-start">
          <div className="mb-4 md:mb-0 md:mr-4">
            <h1 className="text-3xl font-bold text-gray-800">Khush Gupta</h1>
            <p className="text-gray-700  mt-2">
            is an <span className="font-bold">academic</span>, a <span className="font-bold">developer</span>, and a <span className="font-bold">builder</span>.
            </p>
          </div>
          <nav className="flex space-x-4 ml-0 md:ml-auto">
            <Link href="https://drive.google.com/file/d/14kFWr9PVHWh05w4zSt5UNnTILBM4dJiZ/view?usp=sharing" className="text-lg text-gray-700 hover:text-gray-900" target="_blank">Resume</Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto p-6 max-w-2xl">
        <section className="mb-16">
        <p className="text-gray-700">
  I am working on <a href="https://discus.ai/" className="underline hover:text-blue-500" target="_blank" rel="noopener noreferrer">Discus.ai</a>, an open source project to enhance AI interactions, Synthetic Text Generation, and LLM Fine-Tuning. Currently studying in the Jerome Fisher M&T Program at the University of Pennsylvania, focusing on Computer Science and Statistics.
</p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-12 mb-4">Notable Projects</h2>
          <div className="grid grid-cols-1 gap-4">
            {/* Repeat this block for each project */}
            <div className="p-4 border rounded hover:shadow-lg transition duration-300">
              <Link href="https://github.com/discus-labs/discus"><span className="font-semibold text-lg text-gray-800 hover:text-gray-600 cursor-pointer">Discus.ai</span></Link>
            </div>
            {/* End of project block */}

             {/* Repeat this block for each project */}
             <div className="p-4 border rounded hover:shadow-lg transition duration-300">
              <Link href="https://github.com/hvnguyen57/hackharvard"><span className="font-semibold text-lg text-gray-800 hover:text-gray-600 cursor-pointer">Custom Programming Language and Compiler</span></Link>
            </div>
            {/* End of project block */}

             {/* Repeat this block for each project */}
             <div className="p-4 border rounded hover:shadow-lg transition duration-300">
              <Link href="https://github.com/khushgx/cutom_programming_compiler"><span className="font-semibold text-lg text-gray-800 hover:text-gray-600 cursor-pointer">Solar Up With Us</span></Link>
            </div>
            {/* End of project block */}
          </div>
        </section>
      </main>

      <footer className="mt-4 py-8 container mx-auto max-w-2xl">
        <div className="border-b-2 border-gray-200 mb-4"></div>
        <p className="text-gray-700">
          LinkedIn: <span className="border-b-2 border-dotted border-gray-400 ml-2 mr-2"></span><Link href="https://linkedin.com/in/khushg"><span className="text-blue-500 hover:underline">@khushg</span></Link><br />
          GitHub: <span className="border-b-2 border-dotted border-gray-400 ml-2 mr-2"></span><Link href="https://github.com/khushgx"><span className="text-blue-500 hover:underline">@khushgx</span></Link><br />
          Email: <span className="border-b-2 border-dotted border-gray-400 ml-2 mr-2"></span><Link href="mailto:khushgx@gmail.com"><span className="text-blue-500 hover:underline">khushgx@gmail.com</span></Link>
        </p>
      </footer>
    </div>
  );
}
