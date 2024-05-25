import './Footer.css'

export function Footer ( { filters }) {
    return (
        <footer className='footer'>
            {
                JSON.stringify(filters, null, 2)
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