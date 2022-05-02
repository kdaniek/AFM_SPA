import 'bootstrap/dist/css/bootstrap.css';
import './it-spa.scss';

import { Home } from './views/Home'; // nie ma potrzeby >> .js << na końcu
import { Rooms } from './views/Rooms';
import { Treatments } from './views/Treatments';
import { Employees } from './views/Employees';
import { Nav } from './navigation/Nav';

const main = document.querySelector('main');

// wstawiamy nawigację przed elementem main
main.before( Nav() );

main.append( Home('John') );
//main.append( Rooms() );
//main.append( Treatments() );
//main.append( Employees() );

document.body.addEventListener('navigate', (event) => {
    // przechowuje komponent, czyli funkcję, która zwróci jakiś HTML
    const component = event.detail;

    main.innerHTML = ''; // wyczyszczenie całej zawartości tego elementu
    main.append( component() );
});