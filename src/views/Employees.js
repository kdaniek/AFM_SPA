import { Button } from "../common/Button";
import { Search } from "../common/Search";
import { EmployeeDetails } from "./EmployeeDetails";

export function Employees() {
    const section = document.createElement('section');

    section.innerHTML = `
        <h2>Poznaj naszych pracowników</h2>
        <p>Loading...</p>
        <input type="text" id="searchInput" placeholder="szukaj pracownika..">
        <ul id="myUL"></ul>
    `;

    fetch('http://localhost:3000/employees')
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
                            detail: () => EmployeeDetails(employee.id)

                        });
                    
                        document.body.dispatchEvent(navigateEvent);
                    }
                });

                li.lastElementChild.append(seeMoreButton);

                return li;
            });

            section.querySelector('p').remove();
            section.lastElementChild.append( ...lis );
        });

    section.querySelector('#searchInput').addEventListener('keyup',  Search);

    return section;
}