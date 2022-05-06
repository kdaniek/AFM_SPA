import { Home } from '../views/Home';
import { Button } from '../common/Button';
import { Rooms } from '../views/Rooms';
import { Treatments } from '../views/Treatments';
import { Employees } from '../views/Employees';
import { Contact } from '../views/Contact';
import { Login } from '../views/Login';
import { Cart } from '../views/Cart'

const navigateTo = (component) => {
    const navigateEvent = new CustomEvent('navigate', {
        detail: component
    });

    document.body.dispatchEvent(navigateEvent);
};

const navItems = [
    { text: 'O NAS', component: Home },
    { text: 'POKOJE', component: Rooms },
    { text: 'ZABIEGI', component: Treatments },
    { text: 'PRACOWNICY', component: Employees },
    { text: 'KONTAKT', component: Contact },
    { text: 'KONTO', component: Login },
    { text: 'KOSZYK', component: Cart }
];

export function Nav() {

    const nav = document.createElement('nav');

    const buttons = navItems.map(navItem => {
        return Button({ 
            text: navItem.text, 
            callback: () => {
                navigateTo(navItem.component);
            }
        });
    });

    nav.append( ...buttons );

    return nav;
}