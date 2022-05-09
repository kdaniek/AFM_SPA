import { Button } from "../common/Button";
import { cartManager } from "../cart/cart-manager"; 

var tomorrow = new Date();
var dd = tomorrow.getDate()+1;
var mm = tomorrow.getMonth()+1; //January is 0 so need to add 1 to make it 1!
var yyyy = tomorrow.getFullYear();

if(dd<10){
    dd='0'+dd
} 
if(mm<10){
    mm='0'+mm
} 

tomorrow = yyyy+'-'+mm+'-'+dd;

function setMin() {
    var checkinDate = new Date(document.getElementById("checkIn").value);
    var checkoutDate = new Date(checkinDate);
    checkoutDate.setDate(checkinDate.getDate() + 1);
    var checkoutDateFormat = checkoutDate.toISOString().split('T')[0];
    document.getElementById("checkOut").value = "";
    document.getElementById("checkOut").setAttribute("min", checkoutDateFormat);
};

function setMax() {
    var checkinDate = new Date(document.getElementById("checkIn").value);
    var checkoutDate = new Date(checkinDate);
    checkoutDate.setDate(checkinDate.getDate() + 365);
    var checkoutDateFormat = checkoutDate.toISOString().split('T')[0];
    document.getElementById("checkOut").value = "";
    document.getElementById("checkOut").setAttribute("max", checkoutDateFormat);
};

export function Cart() {

    const section = document.createElement('section');
    section.innerHTML = `
        <h2>oto Twoje produkty:</h2>

        <ul id="responsive-table">
        <li class="table-header">
            <div class="col col-1">NAZWA</div>
            <div class="col col-2">CENA</div>
            <div class="col col-4">USUŃ</div>
        </li></ul>
    `;

    const allItems = cartManager.getAllItems();

    var total = 0;

    allItems.map(item => {
        total = total + item.price;
    });

    // function recalculateTotal () {
    //     for (var i = 0; i < allItems.length; i++) {
    //         total = total + allItems[i].price;
    //     }
    //     return total;
    // };

    const rows = allItems.map(item => {
        const li = document.createElement('li');
        li.classList.add('table-row');
        li.innerHTML = `
                <div class="col col-1" data-label="nazwa">${item.name}</div>
                <div class="col col-2" data-label="cena">${item.price.toFixed(2)} PLN</div>
                <div class="col col-3" data-label="usuń"></div>
        `;

        const removeFromCartButton = Button({
            text: 'USUŃ',
            callback: () => {
                cartManager.removeItem(item);
                li.remove();
            }
        });

        li.lastElementChild.append(removeFromCartButton);
       // li.querySelector('.btn').addEventListener('click', recalculateTotal);
        return li;

    });

    // wybierz datę przyjazdu <input type="date" onfocus="this.min=new Date().toISOString().split('T')[0]" />

    const guestDates = document.createElement('section');
    guestDates.innerHTML = `
        <br>
        <h2>określ daty swojego pobytu</h2>
        <article>   
            wybierz datę przyjazdu <input type="date" id="checkIn" />
            <br>
            wybierz datę wyjazdu <input type="date" id="checkOut" />
        </article>
    `;

   //guestDates.querySelector("#checkIn").setAttribute("min", new Date().toISOString().split('T')[0]); 
    guestDates.querySelector("#checkIn").setAttribute("min", tomorrow); 
    guestDates.querySelector("#checkIn").addEventListener('change', setMin);
    guestDates.querySelector("#checkIn").addEventListener('change', setMax);

    
    const summary=document.createElement('h2');
    summary.innerHTML= `Łączna wartość Twoich produktów to ${total} złotych.
    `;

    const payButton = Button({
        text: 'ZAPŁAĆ TERAZ',
        callback: () => {
        }
    });

    section.lastElementChild.append( ...rows );
    section.append(guestDates);
    section.append(summary);
    section.lastElementChild.append(payButton); // nie działający button

    return section;
}
