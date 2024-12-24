import "./Banner.css"

function Banner(){
    return <div className="banner">
        <img src="/img/fondo.jpg" className="img" alt="logo" />
        <div className="contenido">
            <div className="titulo">
                <h1 className="texto_titulo">FRONT END</h1>
            </div>
            <div className="contenido_sub">
            <div className="subtitulo">
                Challenge React
            </div>
            <div className="texto">
            Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás 
            comprometerte en la resolución de un problema para poder aplicar todos los 
            conocimientos adquiridos en la formación React.
            </div>
            </div>                       
        </div>

    </div>
}

export default Banner