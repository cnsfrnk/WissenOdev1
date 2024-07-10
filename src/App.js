import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LocMap from "./components/LocMap";
import Navbar from "./components/Navbar";
import NavbarSmall from "./components/NavbarSmall";
import PageContent from "./components/pageContent/PageContent";


function App() {
  return (
<>
<Navbar/>
<NavbarSmall/>
<PageContent/>
<Contact/>
<LocMap/>
<Footer/>

</>
  );
}

export default App;
