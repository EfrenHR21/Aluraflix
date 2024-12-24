
import Index from "./Componentes/Index";
import Nuevo from "./Componentes/Nuevo";
import Header from "./Componentes/Header/Header";
import Footer from "./Componentes/Footer/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

   

  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Index/>} />
          <Route path="/Nuevo" element={<Nuevo/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>

  );
}

export default App;
