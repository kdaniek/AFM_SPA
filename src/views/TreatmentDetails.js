export function TreatmentDetails(id) {
    const section = document.createElement('section');

    section.innerHTML = `
        <h2>szczegóły zabiegu</h2>
        <p>Loading...</p>
    `;

    // pobieramy detale pojedynczego pokoju z json-server
    fetch(`http://localhost:3000/treatments/${id}`)  
        .then(response => response.json())
        .then(treatment => {
            const article = document.createElement('article');

            article.innerHTML = `
                <h3>${treatment.name}</h3>
                <p>Twoje ${treatment.area} zasługują na relaks!</p>
                <p>Zabieg trwa <strong>${treatment.time}</strong> minut a jego koszt to <strong>${treatment.price.toFixed(2)}</strong> złotych.</p>
            `;

            section.querySelector('p').remove();  // pozbywamy się wpisu Loading
            section.append(article); 
        });

    return section;
}