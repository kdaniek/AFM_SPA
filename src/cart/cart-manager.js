
const key = 'IT_SPA_CART';

export const cartManager = {

    addItem: (item) => {
        const cart = localStorage.getItem(key);

        if (cart === null) {
            const serializedItem = JSON.stringify( [item] );
            localStorage.setItem(key, serializedItem);
        } else {
            const parsedCart = JSON.parse(cart);
            parsedCart.push(item); 
            const serializedCart = JSON.stringify(parsedCart);
            localStorage.setItem(key, serializedCart);
        }
    },

    removeItem: (item) => {
        const cart = localStorage.getItem(key);
        
        if (cart !== null) { 
            const parsedCart = JSON.parse(cart);

            const filteredItems = parsedCart.filter(cartItem => {
                return cartItem.id !== item.id;
            });

            const serializedItems = JSON.stringify(filteredItems);
            localStorage.setItem(key, serializedItems);
        }
    },

    getAllItems: () => {
        const cart = localStorage.getItem(key);

        if (cart === null) {
            return [];
        } else {
            const parsedCart = JSON.parse(cart);
            return parsedCart;
        }
    }

};