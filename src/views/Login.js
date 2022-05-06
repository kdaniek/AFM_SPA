import { Button } from "../common/Button";
import { UserDetails } from "./UserDetails";

export function Login() {
    const section = document.createElement('section');

    section.innerHTML = `
        <h2>Dołącz do grona naszych stałych klientów!</h2>
    `;

    const loginSection = document.createElement('article');

    loginSection.innerHTML = `
    <input type="text" id="" placeholder="podaj login" required>
    <input type="password" id="" placeholder="podaj hasło" required>
    <footer></footer>
    `;

    const loginButton = Button({
        text: 'ZALOGUJ SIĘ',
        callback: () => {
            const navigateEvent = new CustomEvent('navigate', {
                detail: () => UserDetails()
            });
            
            document.body.dispatchEvent(navigateEvent);
        }
    });

    loginSection.lastElementChild.append(loginButton);

    const enrolSection = document.createElement('article');

    enrolSection.innerHTML = `
    <footer></footer>
    `;

    const enrolButton = Button({  //niedziałajacy button
        text: 'ZAREJESTRUJ SIĘ',
        callback: () => {
        }
    });

    enrolSection.lastElementChild.append(enrolButton);

    section.append(loginSection, enrolSection);

    return section;
};