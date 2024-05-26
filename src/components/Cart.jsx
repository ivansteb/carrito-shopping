import './Cart.css';

import { CartIcon, ClearCartIcon } from "./Icons";
import { useId } from "react";

export function Cart () {
    const cartCheckboxId = useId();

    return (
        <>
            <label className="cart-button" htmlFor={cartCheckboxId}>
                <CartIcon />
            </label>
            <input id={cartCheckboxId} type='checkbox' hidden />

            <aside className="cart">
                <ul>
                    <li>
                        <img 
                            src='https://http2.mlstatic.com/D_NQ_NP_932343-MLA48829573698_012022-O.webp'
                            alt='carrito'
                        />
                        <div>
                            <strong>Carrito</strong> - $54
                        </div>

                        <footer>
                            <small>
                                Qty: 1
                            </small>
                            <button>+</button>
                        </footer>
                    </li>
                </ul>

                <button>
                    <ClearCartIcon />
                </button>
            </aside>
        </>
    );
};
