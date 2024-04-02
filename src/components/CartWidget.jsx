import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';

const CartWidget = () => {

    const [count, setCount] = useState('0');

    return (
        <Nav.Link href="#carrito" className='position-relative'><i class="fa fa-shopping-cart" aria-hidden="true"></i><span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {count}
      </span></Nav.Link>
    )

}

export default CartWidget;