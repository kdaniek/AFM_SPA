import { Button } from "../common/Button";
import { Treatments } from "./Treatments";

export function TreatmentDetails(id) {
    const section = document.createElement('section');

    section.innerHTML = `
        <h2>szczegóły zabiegu</h2>
        <p>Loading...</p>
    `;

    fetch(`http://localhost:3000/treatments/${id}`)  
        .then(response => response.json())
        .then(treatment => {
            const article = document.createElement('article');

            article.innerHTML = `
                <h3>${treatment.name}</h3>
                <p>Twoje ${treatment.area} zasługują na relaks!</p>
                <p>Zabieg trwa <strong>${treatment.time}</strong> minut a jego koszt to <strong>${treatment.price.toFixed(2)}</strong> złotych.</p>
            `;

            const backButton = Button({
                text: 'POWRÓT DO LISTY',
                callback: () => {
                    const navigateEvent = new CustomEvent('navigate', {
                        detail: () => Treatments()
                    });
                    
                    document.body.dispatchEvent(navigateEvent);
                }
            });

            section.querySelector('p').remove();
            section.append(article,backButton); 
        });

    return section;
}