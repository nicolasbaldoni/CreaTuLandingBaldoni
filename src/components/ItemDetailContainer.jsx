import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemDetail from '././ItemDetail'
import { Container } from "react-bootstrap";

function ItemDetailContainer() {

    const [detail, setDetail] = useState();

    const { idProd } = useParams();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${idProd}`)
            .then(res => res.json())
            .then(json => setDetail(json))
    }, [idProd])

    return (
        <Container style={{paddingTop: '7%'}}>
            <ItemDetail itemDetalle={detail} />
        </Container>
    )

}

export default ItemDetailContainer;