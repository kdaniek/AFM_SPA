//import jquery from "jquery";
//import axios from 'axios';

export function Contact(name) {
    const section = document.createElement('section');

    section.innerHTML = `

        <h2>Znajdziesz nas w Krakowie</h2>

        <div id="map-responsive">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10247.534053173915!2d19.9651138!3d50.0510134!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd05cd1ddd4869975!2sKrakowska%20Akademia%20im.%20Andrzeja%20Frycza%20Modrzewskiego!5e0!3m2!1spl!2spl!4v1651329743658!5m2!1spl!2spl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <section id="socialmedialinks">
        <h2>a także na:</h2>
            <li><a href="https://facebook.com" target="_blank">facebooku</a></li>
            <li><a href="https://twitter.com" target="_blank">twitterze</a></li>
            <li><a href="https://instagram.com" target="_blank">instagramie</a></li>
        </section>

        <h2>skontaktuj się z nami mailowo lub telefonicznie</h2>
        <address>
            <a href="mailto:naszmail@contact.us">naszmail@contact.us</a><br>
            <a href="tel:+48987654321">(+48) 987-654-321</a>
        </address>
    `;

    return section;
}
