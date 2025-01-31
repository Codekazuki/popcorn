import About from "./About";
import Footer from "./Footer";
import Nav from "./Nav";
import Services from "./Services";

export default function App() {
  return (
    <section className='all'>
      <Nav />
      <section className='main'>
        <About />
        <Services />
      </section>
      <Footer />
    </section>
  );
}
