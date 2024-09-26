import { Outlet } from 'react-router-dom';
import  Header from "./components/Header";
import  Footer from "./components/Footer";
// import Image1 from "./"


function App() {


  return (
    <>
  <Header />
  <main className="mx-3">
        <Outlet />
      </main>
  <Footer />
    </>

  )
}

export default App


// import images to here