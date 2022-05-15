import { Button } from "../common/Button";
import { UserDetails } from "./UserDetails";

function showPassword() {
    var x = document.getElementById("passwordInputLogin");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
};

function showPasswordReqs() {
    document.getElementById("passwordReqs").style.display = "block";
};

function hidePasswordReqs() {
    document.getElementById("passwordReqs").style.display = "none";
};

function validatePassword() {
    // małe litery
    var lowerCaseLetters = /[a-z]/g;
    if(document.getElementById("passwordInputEnrol").value.match(lowerCaseLetters)) {  
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }
    // duże litery
    var upperCaseLetters = /[A-Z]/g;
    if(document.getElementById("passwordInputEnrol").value.match(upperCaseLetters)) {  
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }
    // cyfry
    var numbers = /[0-9]/g;
    if(document.getElementById("passwordInputEnrol").value.match(numbers)) {  
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }
    // długość
    if(document.getElementById("passwordInputEnrol").value.length >= 8) {
        passwordLength.classList.remove("invalid");
        passwordLength.classList.add("valid");
    } else {
        passwordLength.classList.remove("valid");
        passwordLength.classList.add("invalid");
    }
};

export function Login() {
    const section = document.createElement('section');

    section.innerHTML = `
        <h2>Dołącz do grona naszych stałych klientów!</h2>
    `;

    const loginSection = document.createElement('article');

    loginSection.innerHTML = `
    <input type="text" id="" placeholder="podaj login" required>
    <input type="password" id="passwordInputLogin" placeholder="podaj hasło" required>
    <input type="checkbox" id="showPassword"> pokaż hasło
    <footer></footer>
    `;

    const loginButton = Button({
        text: 'ZALOGUJ SIĘ',
        callback: () => {
            const navigateEvent = new CustomEvent('navigate', {
                detail: () => UserDetails()
            });
            
            document.body.dispatchEvent(navigateEvent);
        }
    });

    loginSection.lastElementChild.append(loginButton);

    const enrolSection = document.createElement('article');

    enrolSection.innerHTML = `
    <form>
    <label for="email">Podaj swój email (będzie on także Twoim loginem):</label>
    <input type="email" id="email" name="email"> <br>   
    <label for="password">Ustaw wystarczająco silne hasło:</label>
    <input type="password" id="passwordInputEnrol" name="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required>   <br>
    <div id="passwordReqs">
    <h3>hasło musi składać się z:</h3>
    <p id="letter" class="invalid">małych liter</p>
    <p id="capital" class="invalid">dużych liter</p>
    <p id="number" class="invalid">cyfr</p>
    <p id="passwordLength" class="invalid">minimum ośmiu znaków</p>
    </div>
    <input type="checkbox" id="option1" name="vehicle1" value="Bike">
    <label for="option1"> Chcę być informowany o zniżkach i promocjach</label><br>
    <input type="checkbox" id="option2" name="vehicle2" value="Car">
    <label for="option2"> Chcę być informowany o nowych zabiegach</label><br>
    <input type="checkbox" id="option3" name="vehicle3" value="Boat">
    <label for="option3"> Chcę być informowany o naszych współpracach</label><br><br>
    </form>
    <footer></footer>
    `;

    const enrolButton = Button({  //niedziałajacy button
        text: 'ZAREJESTRUJ SIĘ',
        callback: () => {
        }
    });

    enrolSection.lastElementChild.append(enrolButton);

    section.append(loginSection, enrolSection);

    section.querySelector('#showPassword').addEventListener('click', showPassword);

    section.querySelector('#passwordInputEnrol').addEventListener('focus', showPasswordReqs);
    section.querySelector('#passwordInputEnrol').addEventListener('blur', hidePasswordReqs);
    section.querySelector('#passwordInputEnrol').addEventListener('keyup', validatePassword);

    return section;
};