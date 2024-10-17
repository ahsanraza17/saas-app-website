import Header from "./components/Header"
import Landing from "./components/Landing";
import Information from "./components/Information";
import AppDesign from "./components/AppDesign";
import Access from "./components/Access";
import Footer from "./components/Footer";
import "./index.css"

function App() {

  return (
    <>
    <div className="w-full overflow-hidden">
      <Header />
      <Landing />
      <Information />
      <AppDesign />
      <Access />
      <Footer />
    </div>
    </>
  )
}

export default App;
