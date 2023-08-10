"use client"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePathname } from 'next/navigation';


const LayoutProvider = ({children}) => {
  const pathname = usePathname();

  return (
    <>
      {pathname !== "/login" && <Navbar/>}
        {children}
      {pathname !== "/login" && <Footer/>}

    </>
  )
}
export default LayoutProvider;