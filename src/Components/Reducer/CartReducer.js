import React from 'react'

function CartReducer(state, action) {
    if (action.type === "ADD_TO_CART") {
        let { id, color, amount, Product } = action.payload;

        let cartProduct;

        cartProduct = {
            id: id + color,
            name: Product.name,
            color,
            amount,
            image: Product.image[0].url,
            price: Product.price,
            max: Product.stock
        }
        return {
            ...state,
            cart: [...state.cart, cartProduct],
        }
    }
    return state;
}

export default CartReducer