
const key = 'IT_SPA_CART';

export const cartManager = {

    addItem: (item) => {
        // serializacja --> zmiana na ciąg znaków

        const cart = localStorage.getItem(key);

        if (cart === null) {
            const serializedItem = JSON.stringify( [item] );
            localStorage.setItem(key, serializedItem);
        } else {
            //zamieniamy ciąg znaków na tablicę
            const parsedCart = JSON.parse(cart);
            // dodajemy nowy produkt do tablicy
            parsedCart.push(item); 
            // zamieniamy tablicę na ciąg znaków
            const serializedCart = JSON.stringify(parsedCart);
            // zapisujemy go do local storage
            localStorage.setItem(key, serializedCart);
        }
    },

    removeItem: (item) => {
        const cart = localStorage.getItem(key);
        
        if (cart !== null) { //bo jak cart === null to mamy tylko return; czyli w ogóle nie trzeba tego fragmentu
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
            // lub po prostu >> return JSON.parse(cart); << zamiast tw=ycyh dwóch linii
        }
    }

};