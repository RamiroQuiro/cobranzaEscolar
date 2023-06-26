import Footer from "../componentes/Footer"
import NavBar from "../componentes/navBar/navBar"


export const metadata = {
  title: 'Mi seccion',
  description: 'Generated by create next app',
}

export default function DashboardLayout({ children }) {
  return (
    <html lang="es" >
      <body className="overflow-x-hidden" >
        <main className="w-screen min-h-screen overflow-x-hidden relative">
          <NavBar/>
        {children}
        </main>
        <Footer/>
        </body>
    </html>
  )
}
