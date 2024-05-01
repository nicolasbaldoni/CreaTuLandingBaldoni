import { useState, useEffect } from 'react'
import ItemList from './ItemList'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {

    const [items, setItems] = useState([])

    const { id } = useParams();

    useEffect(() => {

        if(id) {
            fetch(`https://fakestoreapi.com/products/category/${id}`)
            .then(res => res.json())
            .then(json => setItems(json))
        } else {
            fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json => setItems(json))
        }
        
    }, [id])


    return (
        <Container fluid style={{padding: '7%'}}>
            <Row xs={1} md={2} className="g-4">
                <ItemList productos={items} />
            </Row>
        </Container>
    )


}

export default ItemListContainer;