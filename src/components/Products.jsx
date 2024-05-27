import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'
import { useCart } from '../hooks/useCart'

export function Products ({ products }) {
    const { addToCart, removeFromCart, cart } = useCart();

    const checkProductInCart = product => {
        return cart.some(item => item.id === product.id)
    }

    return (
        <main className='products'>
            <ul>
                {products.map(product => {
                    const isProudctInCart = checkProductInCart(product)

                    return (
                    <li key={product.id}>
                        <img
                            src={product.thumbnail}
                            alt={product.title}
                        />    
                        <div>
                            <strong>{product.title}</strong> - ${product.price}
                        </div>
                        <div>
                            <button 
                                style={{ backgroundColor: isProudctInCart ? 'red' : 'rgba(10,128,206)' }} 
                                onClick={() => {
                                    isProudctInCart 
                                        ? removeFromCart(product) 
                                        : addToCart(product)
                                }}
                                >
                                    {
                                        isProudctInCart
                                            ? <RemoveFromCartIcon />
                                            : <AddToCartIcon />
                                    }
                            </button>
                        </div>
                    </li>
                    )
                })}
            </ul>
        </main>
    )
}