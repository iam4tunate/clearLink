import {
  Faqs,
  Footer,
  Hero,
  Navbar,
  Partners,
  Testimonial,
  Trial,
  Why,
} from "./components";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Partners />
      <Why />
       <Testimonial />
      {/* <Faqs /> */}
      <Trial />
      <Footer />
    </div>
  );
};
export default App;
