import { Button } from "../common/Button";
import { EmployeeDetails } from "./EmployeeDetails";

export function Employees() {
    const section = document.createElement('section');

    section.innerHTML = `
        <h2>Poznaj naszych pracowników</h2>
        <p>Loading...</p>
        <ul></ul>
    `;

    // pobieramy treatments z json-server
    fetch('http://localhost:3000/employees')  // fetch zwraca promise
        .then(response => response.json())
        .then(employees => {
            const lis = employees.map(employee => {   
                const li = document.createElement('li');
                li.classList.add('table-row');
                li.innerHTML = `
                    <h4>${employee.name}</h4>
                    <p>${employee.job}</p>
                    <footer></footer>
                `;

                const seeMoreButton = Button({
                    text: 'SZCZEGÓŁY',
                    callback: () => {
                        const navigateEvent = new CustomEvent('navigate', {
                            detail: () => EmployeeDetails(employee.id) //jak nie ma {} po => to znaczy że coś zwracamy

                        });
                    
                        document.body.dispatchEvent(navigateEvent);
                    }
                });

                // footer jest ostatnim dzieckiem elementu li
                li.lastElementChild.append(seeMoreButton);

                return li;
            });

            section.querySelector('p').remove();
            section.lastElementChild.append( ...lis ); // albo querySelector // >> ... << to operator rozproszenia żeby były wszystkie el. tej tablicy
        });

    return section;
}