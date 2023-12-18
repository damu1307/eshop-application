import Content from "./layouts/Content";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Navbar from "./layouts/Navbar";

function App() {
  return (
    <div className="w-full">
      <Header/>
      <Navbar />
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
