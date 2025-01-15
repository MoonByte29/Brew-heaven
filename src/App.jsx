import Background from "./components/background/Background";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero-section/Hero";
import About from "./components/about-section/About";
import Menu from "./components/menu-section/Menu";
import Testimonial from "./components/testimonial/Testimonial";
import Contact from "./components/contact-section/Contact";
import Quote from "./components/quote/Quote";
import Footer from "./components/footer/Footer";
import Order from "./components/order-now/Order"

const App = () => {
  
  return (
    <>
      <Background />
     <Navbar />
      <Hero />
      <About />
      <Menu />
      <Testimonial/>
      <Quote />

      <Contact />
      {/* <Footer/> */}
    </>
  );
};

export default App;
