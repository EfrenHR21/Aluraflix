import "./Header.css"
import { Link } from "react-router-dom"

function Header(){
    return<div className="header">
        <img src="/img/LogoMain.png" className="img" alt="logo" />
        <div className="botones">
            <Link to="/">Inicio</Link>
            <Link to="/Nuevo">Nuevo Video</Link>
        </div>
    </div>
    
}

export default Header