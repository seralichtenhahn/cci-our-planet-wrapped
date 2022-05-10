export default function Layout({ children }) {
  return (
    <div className="font-sans h-screen w-screen bg-gradient-to-r from-gray-700 via-gray-900 to-black lg:flex lg:items-center lg:justify-center lg:p-8">
      <main className="h-full w-full bg-white overflow-y-auto overflow-x-hidden lg:max-w-max lg:shadow-md lg:shadow-white/50 lg:aspect-[9/16] lg:rounded-2xl">
        {children}
      </main>
    </div>
  )
}
