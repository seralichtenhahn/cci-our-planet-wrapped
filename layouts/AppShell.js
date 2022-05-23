export default function Layout({ children }) {
  return (
    <div className="w-screen h-screen font-sans bg-gradient-to-r from-gray-700 via-gray-900 to-black md:flex md:items-center md:justify-center md:p-8">
      <main className="h-full relative w-full bg-primary-dark overflow-y-auto overflow-x-hidden md:max-w-max md:shadow-md md:shadow-primary-dark/50 md:aspect-[9/16] md:rounded-2xl">
        {children}
      </main>
    </div>
  )
}
