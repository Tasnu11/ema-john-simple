import React from 'react';

    const Cart = ({cart}) => {
    return (
        <div>
            <h4>Order summery.</h4>
                <p>selected items:{cart}</p>
        </div>
    );
};

export default Cart;