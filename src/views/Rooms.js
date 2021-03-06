import { Button } from "../common/Button";
import { Search } from "../common/Search";
import { RoomDetails } from "./RoomDetails";
import { cartManager } from "../cart/cart-manager";

export function Rooms() {

    const section = document.createElement('section');

    section.innerHTML = `
        <h2>Zobacz nasze pokoje</h2>
        <p>Loading...</p>
        <input type="text" id="searchInput" placeholder="szukaj pokoju..">
        <ul id="myUL"></ul>
    `;

    // pobieramy detale pojedynczego pokoju z json-server
    fetch('http://localhost:3000/rooms')  // fetch zwraca promise
        .then(response => response.json())
        .then(rooms => {
            const lis = rooms.map(room => {   // lis jako liczba mnoga od li
                const li = document.createElement('li');
                li.innerHTML = `
                    <h4>${room.name}</h4>
                    <p>${room.price.toFixed(2)} PLN za noc</p>
                    <footer></footer>
                `;

                const seeMoreButton = Button({
                    text: 'SZCZEGÓŁY',
                    callback: () => {
                        const navigateEvent = new CustomEvent('navigate', {
                            detail: () => RoomDetails(room.id)
                        });
                    
                        document.body.dispatchEvent(navigateEvent);
                    }
                });

                const addToCartButton = Button({
                    text: 'DO KOSZYKA',
                    callback: () => {
                        cartManager.addItem(room);
                    }
                });

                li.lastElementChild.append(seeMoreButton, addToCartButton);

                return li;
            });

            section.querySelector('p').remove();
            section.lastElementChild.append( ...lis ); // albo querySelector // >> ... << to operator rozproszenia żeby były wszystkie el. tej tablicy
        
        });
    
    section.querySelector('#searchInput').addEventListener('keyup',  Search);

    return section;
}