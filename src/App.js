import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Trending from "./components/Trending";
import Editor from "./components/Editor";
import Creator from "./components/Creator";
import Community from "./components/Community";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Trending />
      <Editor />
      <Creator />
      <Community />
      <Footer />
    </>
  );
}

export default App;
