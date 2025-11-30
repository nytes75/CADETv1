import Footer from "./components/footer";
import { Hero, AlertBar, EventHolder, AlertMap } from "./components/home";
import Navbar from "./components/navbar";
 
export default function Home() {  
 return (
   <div className="flex min-h-screen flex-col bg-white text-gray-900">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <AlertBar />
        <AlertMap />
        <EventHolder />
      </main>
      <Footer />
    </div>
   )
 }
