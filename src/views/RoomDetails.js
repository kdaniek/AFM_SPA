import { Button } from "../common/Button";
import { Rooms } from "./Rooms";

export function RoomDetails(id) {
    const section = document.createElement('section');

    section.innerHTML = `
        <h2>detale pokoju</h2>
        <p>Loading...</p>
    `;

    fetch(`http://localhost:3000/rooms/${id}`)
        .then(response => response.json())
        .then(room => {
            const article = document.createElement('article');

            article.innerHTML = `
                <h3>${room.name}</h3>
                <p> W pokoju ${room.name} komfortowo wypocznie <strong>${room.beds}</strong> gości.</p>
                <p>Cena za pokój ${room.name} to <strong>${room.price.toFixed(2)}</strong> złotych za noc.</p>
                <p>Ocena naszych gości: <strong>${room.rating.toFixed(2)}</strong></p>
            `;

            const backButton = Button({
                text: 'POWRÓT DO LISTY',
                callback: () => {
                    const navigateEvent = new CustomEvent('navigate', {
                        detail: () => Rooms()
                    });
                    
                    document.body.dispatchEvent(navigateEvent);
                }
            });

            section.querySelector('p').remove();  // pozbywamy się wpisu Loading
            section.append(article,backButton); 
        });

    return section;
}