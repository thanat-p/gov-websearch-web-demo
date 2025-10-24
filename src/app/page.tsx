export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="font-bold text-xl">Logo</div>
          <div className="space-x-4">
            <a href="/" className="hover:text-gray-300">Home</a>
            <a href="/about" className="hover:text-gray-300">About</a>
            <a href="/contact" className="hover:text-gray-300">Contact</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Welcome</h1>
        <p>This is a simple page with a navigation bar.</p>
      </main>
    </div>
  );
}
