export function EmployeeDetails(id) {
    const section = document.createElement('section');

    section.innerHTML = `
        <h2>poznaj mnie bliżej</h2>
        <p>Loading...</p>
    `;

    fetch(`http://localhost:3000/employees/${id}`)  
        .then(response => response.json())
        .then(employee => {
            const article = document.createElement('article');

            article.innerHTML = `
                <img src="${employee.photo}"/>
                <br>
                <br>
                <h3>Nazywam się ${employee.name} i pracuję w naszym SPA już od ${employee.experience} lat.</h3>
                <p>Nasi goście oceniają mnie na <strong>${employee.rating.toFixed(2)}</strong> !</p>
                <p>Chcesz wiedzieć więcej? <a href = "mailto: ${employee.email}"><strong>NAPISZ DO MNIE</strong></a></p> 
            `;

            section.querySelector('p').remove();
            section.append(article); 
        });

    return section;
}