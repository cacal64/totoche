
const Modale = (props) => {
    return (
        <section
            onClick={() => {
                props.setModaleShow(false)
            }}
            class="modale">
            <span>Conditions Générales de Vente</span>
        </section>
    )
}
export default Modale