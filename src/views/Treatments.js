import { Button } from "../common/Button";
import { TreatmentDetails } from "./TreatmentDetails";
import { cartManager } from "../cart/cart-manager";

export function Treatments() {
    const section = document.createElement('section');

    section.innerHTML = `
        <h2>Dowiedz się więcej o naszych zabiegach</h2>
        <p>Loading...</p>
        <ul></ul>
    `;

    // pobieramy treatments z json-server
    fetch('http://localhost:3000/treatments')  // fetch zwraca promise
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
                            detail: () => TreatmentDetails(treatment.id) //jak nie ma {} po => to znaczy że coś zwracamy

                        });
                    
                        document.body.dispatchEvent(navigateEvent);
                    }
                });

                const addToCartButton = Button({
                    text: 'DO KOSZYKA',
                    callback: () => {
                        cartManager.addItem(treatment);
                        alert("dodałeś zabieg do koszyka!");
                    }
                });

                // footer jest ostatnim dzieckiem elementu li
                li.lastElementChild.append(seeMoreButton, addToCartButton);

                return li;
            });

            section.querySelector('p').remove();
            section.lastElementChild.append( ...lis ); // albo querySelector // >> ... << to operator rozproszenia żeby były wszystkie el. tej tablicy
        });

    return section;
}