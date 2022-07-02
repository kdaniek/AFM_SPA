import { Button } from "../common/Button";
import { Login } from "./Login";

export function UserDetails(id) {
    const section = document.createElement('section');

    section.innerHTML = `
        <p>Loading...</p>
    `;

    fetch(`http://localhost:3000/users/15`)  // podaję konkretne id, powinno być `http://localhost:3000/users/${id}`
        .then(response => response.json())
        .then(user => {
            const article = document.createElement('article');

            article.innerHTML = `
                <h3>Witaj z powrotem ${user.firstname}!</h3>
                <p>Dziękujemy że jesteś z nami od ${user.enroldate}!</p>
            `;

            const logoutButton = Button({
                text: 'WYLOGUJ SIĘ',
                callback: () => {
                    const navigateEvent = new CustomEvent('navigate', {
                        detail: () => Login()
                    });
                    
                    document.body.dispatchEvent(navigateEvent);
                }
            });

            section.querySelector('p').remove();
            section.append(article,logoutButton); 
        });

    return section;
}