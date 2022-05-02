import { Button } from "../common/Button";
import { cartManager } from "../cart/cart-manager"; 

export function Cart() {

    const section = document.createElement('section');
    section.innerHTML = `
        <br>
        <h2>określ daty swojego pobytu</h2>
        <p> wybierz datę przyjazdu <input type="date" onfocus="this.min=new Date().toISOString().split('T')[0]" /></p>
        <p> wybierz datę wyjazdu <input type="date" onfocus="this.min=new Date().toISOString().split('T')[0]" /></p>

        <h2>oto Twoje produkty:</h2>

        <ul id="responsive-table">
        <li class="table-header">
            <div class="col col-1">NAZWA</div>
            <div class="col col-2">CENA</div>
            <div class="col col-4">USUŃ</div>

        </li></ul>
    `;

    const allItems = cartManager.getAllItems();

    let total = 0;

    allItems.map(item => {
        total = total + item.price;
    })

    const rows = allItems.map(item => {
        const li = document.createElement('li');
        li.classList.add('table-row');
        li.innerHTML = `
                <div class="col col-1" data-label="nazwa">${item.name}</div>
                <div class="col col-2" data-label="cena">${item.price.toFixed(2)} PLN</div>
                <div class="col col-3" data-label="USUŃ"></div>
        `;

        const removeFromCartButton = Button({
            text: 'USUŃ',
            callback: () => {
                cartManager.removeItem(item);
                total = total - item.price;
                li.remove();
            }
        });

        li.lastElementChild.append(removeFromCartButton);

        return li;

    });

    const summary=document.createElement('h2');
    summary.innerHTML= `Łączna wartość Twoich produktów to ${total} złotych.
    `;

    const payButton = Button({
        text: 'ZAPŁAĆ TERAZ',
        callback: () => {
        }
    });

    section.lastElementChild.append( ...rows );
    section.append(summary);
    section.lastElementChild.append(payButton); // nie działający button

    return section;
}
