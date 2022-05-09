export default function Layout({ children }) {
  return (
    <div className="h-screen w-screen bg-gradient-to-r from-gray-700 via-gray-900 to-black lg:flex lg:items-center lg:justify-center lg:p-8">
      <main className="h-full w-full bg-white overflow-auto lg:max-w-max lg:shadow-md lg:shadow-slate-300 lg:aspect-[9/16] lg:rounded-lg">
        {children}
      </main>
    </div>
  )
}
