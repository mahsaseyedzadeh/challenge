"use client"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePathname } from 'next/navigation';


const LayoutProvider = ({children}) => {
  const pathname = usePathname();

  return (
    <>
      {pathname !== "/signup" && <Navbar/>}
        {children}
      {pathname !== "/signup" && <Footer/>}

    </>
  )
}
export default LayoutProvider;