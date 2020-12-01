import React from 'react';
import CartItem from './CartItem';

export default function CartList({value}) {
    const {cart} = value;
    console.log(value, cart);
    
    return (
        <div>
            Hello from cart list
            <CartItem/>
        </div>
    );
}
