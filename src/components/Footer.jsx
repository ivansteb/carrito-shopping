import { useCart } from '../hooks/useCart';
import { useFilters } from '../hooks/useFilters'
import './Footer.css'

export function Footer () {
    const { filters } = useFilters();
    const { cart } = useCart();

    return (
        <footer className='footer'>
            {
                JSON.stringify(cart, null, 2)
            }
            {
            /*
            <h4>
                Práctica en React － <span>@ivansteb</span>
            </h4>
            <h5>Carrito de compras con useContext & useReducer</h5>
            */
            }
        </footer>
    )
}