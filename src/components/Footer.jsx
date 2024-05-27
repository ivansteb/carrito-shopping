import { useCart } from '../hooks/useCart';
import { useFilters } from '../hooks/useFilters'
import './Footer.css'

export function Footer () {

    return (
        <footer className='footer'>
            <h4>
                Práctica en React － <span>@ivansteb</span>
            </h4>
            <h5>Carrito de compras con useContext & useReducer</h5>
        </footer>
    )
}