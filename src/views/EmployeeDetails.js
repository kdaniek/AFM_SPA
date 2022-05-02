export function EmployeeDetails(id) {
    const section = document.createElement('section');

    section.innerHTML = `
        <h2>poznaj mnie bliżej</h2>
        <p>Loading...</p>
    `;


    // pobieramy detale pojedynczego pokoju z json-server
    fetch(`http://localhost:3000/employees/${id}`)  
        .then(response => response.json())
        .then(employee => {
            const article = document.createElement('article');

            article.innerHTML = `
                <img src="${employee.photo}"/>
                <br>
                <br>
                <h3>Nazywam się ${employee.name} i pracuję w naszym SPA już od ${employee.experience} lat.</h3>
                <p>Nasi goście oceniają mnie na ${employee.rating.toFixed(2)} !</p>
                <p>Chcesz wiedzieć więcej? <a href = "mailto: ${employee.email}"><strong>NAPISZ DO MNIE</strong></a></p> 
            `;

            section.querySelector('p').remove();  // pozbywamy się wpisu Loading
            section.append(article); 
        });

    return section;
}