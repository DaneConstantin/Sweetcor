

import Navbar from "./navbar";
import Footer from "./footer";

export default function RootLayout({ children }) {
  return (


    <main>
      <Navbar />

        {children}
        <Footer />
    </main>


  )
}
