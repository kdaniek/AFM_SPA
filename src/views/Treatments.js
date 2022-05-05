import { Button } from "../common/Button";
import { Search } from "../common/Search";
import { TreatmentDetails } from "./TreatmentDetails";
import { cartManager } from "../cart/cart-manager";

export function Treatments() {
    const section = document.createElement('section');

    section.innerHTML = `
        <h2>Dowiedz się więcej o naszych zabiegach</h2>
        <p>Loading...</p>
        <input type="text" id="myInput" placeholder="szukaj zabiegu..">
        <ul id="myUL"></ul>
    `;

    fetch('http://localhost:3000/treatments')
        .then(response => response.json())
        .then(treatments => {
            const lis = treatments.map(treatment => { 
                const li = document.createElement('li');
                li.innerHTML = `
                    <h4>${treatment.name}</h4>
                    <p>${treatment.price.toFixed(2)} PLN</p>
                    <footer></footer>
                `;

                const seeMoreButton = Button({
                    text: 'SZCZEGÓŁY',
                    callback: () => {
                        const navigateEvent = new CustomEvent('navigate', {
                            detail: () => TreatmentDetails(treatment.id)

                        });
                    
                        document.body.dispatchEvent(navigateEvent);
                    }
                });

                const addToCartButton = Button({
                    text: 'DO KOSZYKA',
                    callback: () => {
                        cartManager.addItem(treatment);
                    }
                });

                li.lastElementChild.append(seeMoreButton, addToCartButton);

                return li;
            });

            section.querySelector('p').remove();
            section.lastElementChild.append( ...lis );
        });

    section.querySelector('#myInput').addEventListener('keyup',  Search);

    return section;
}