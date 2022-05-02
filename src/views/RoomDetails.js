export function RoomDetails(id) {
    const section = document.createElement('section');

    section.innerHTML = `
        <h2>detale pokoju</h2>
        <p>Loading...</p>
    `;


    // pobieramy detale pojedynczego pokoju z json-server
    fetch(`http://localhost:3000/rooms/${id}`)  // albo ten inny cudzysłów >> 'http://localhost:3000/rooms/' + id <<
        .then(response => response.json())
        .then(room => {
            const article = document.createElement('article');

            article.innerHTML = `
                <h3>${room.name}</h3>
                <p> W pokoju ${room.name} komfortowo wypocznie ${room.beds} gości.</p>
                <p>Cena za pokój ${room.name} to <strong>${room.price.toFixed(2)}</strong> złotych za noc.</p>
                <p>Ocena naszych gości: ${room.rating.toFixed(2)}</p>
            `;

            section.querySelector('p').remove();  // pozbywamy się wpisu Loading
            section.append(article); 
        });

    return section;
}