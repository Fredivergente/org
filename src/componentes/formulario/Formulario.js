import "./Formulario.css"
import CampoTexto from "../CampoTexto"

const Formulario = () => {
    return <section className= "formulario">
        <form>
            <h2>· Rellena el formulario para crear el colaborador ·</h2>
            <CampoTexto titulo="Nombre" placeholder="Ingresa nombre"/>
            <CampoTexto titulo="Puesto" placeholder="Ingresa puesto" />
            <CampoTexto titulo="Foto" placeholder="Ingresa url de foto" />
        </form>
    </section>
}

export default Formulario