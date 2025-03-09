import Footer from "./components/footer";
import { Hero, AlertBar, EventHolder, AlertMap } from "./components/home";
import Navbar from "./components/navbar";

export default function Home() {
  
  return (
    <div className='container mx-auto'>
      {/*
        Comments Please
      */}
      <Navbar/>
      <Hero/>
      <AlertBar/>
      <AlertMap/>
      <EventHolder/>
      <Footer/>
    </div>
  )
}
