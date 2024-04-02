
const ItemListContainer = (props) => {
    return (
        <div>
            <div class="jumbotron" style={{padding: '30px'}}>
                <h1 class="display-4">{props.titulo}</h1>
                <p class="lead">{props.descripcion}</p>
            </div>
        </div>
    )


}

export default ItemListContainer;