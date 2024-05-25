import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from "./Icons";

export function Cart () {
    const cartCheckboxId = useId();

    return (
        <>
            <label className="cart-button" htmlFor="cart">
                <CartIcon />
            </label>
        </>
    )
}
