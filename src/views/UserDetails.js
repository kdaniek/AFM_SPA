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

            section.querySelector('p').remove();
            section.append(article); 
        });

    return section;
}