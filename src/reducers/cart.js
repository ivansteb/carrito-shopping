export const cartInitialState = [];

export const CART_ACTION_TYPES = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    CLEAR_CART: 'CLEAR_CART'
};

export const cartReducer = (state, action) => {
    // a partir del state, debe realizar una action: y devuelve un state

    const { type: actionType, payload: actionPayload } = action;

    switch (actionType) {
        case CART_ACTION_TYPES.ADD_TO_CART: {
            const { id } = actionPayload
            const productInCartIndex = state.findIndex(item => item.id === id);

            if (productInCartIndex >= 0) {
                // una forma sería usando structuredClone
                const newState = structuredClone(cart);
                newCart[productInCartIndex].quantity += 1;
                return newState;
            };

            return [
                ...state,
                {
                    ...actionPayload,
                    quantity: 1
                }
            ]
        }

        case CART_ACTION_TYPES.REMOVE_FROM_CART: {
            const { id } = actionPayload
            return state.filter(item => item.id !== id);
        }

        case CART_ACTION_TYPES.CLEAR_CART: {
            return cartInitialState;
        }
    }

    return state;
}
