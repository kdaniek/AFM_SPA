//import jquery from "jquery";
//import axios from 'axios';

export function Home(name) {
    const section = document.createElement('section');

    section.innerHTML = `
        <br>
        <h2>Witaj w naszym SPA</h2>
        <p>to jest ulubione SPA programistów!</p>
        <article>SPA to słowo przejęte z języka angielskiego, a pochodzące prawdopodobnie od belgijskiego miasta Spa, którego tereny od czasów starożytnych (ówcześnie obszar Cesarstwa Rzymskiego) słynęły z leczniczych właściwości występujących tam wód termalnych.

        Początkowo wyraz ten funkcjonował jako synonim kurortu z wodami leczniczymi lub ośrodka terapii przy użyciu wody. Obecnie jest bardzo szeroko pojmowany i stosowany jako ogólne określenie zabiegów mających na celu poprawę zdrowia i samopoczucia oraz nazwa miejsca, w którym są one wykonywane. Dawniej czynnikiem determinującym spa było wykorzystywanie wód z naturalnych źródeł oraz substancji w miejscu ich pozyskiwania; dziś coraz częściej używa się różnorodnych metod leczniczych i terapeutycznych w dowolnej dogodnej lokalizacji. </article>

        <article>Wellness (tłum. pomyślność) – określenie oznaczające stan równowagi umysłu, ciała i ducha człowieka, w których panuje uczucie ogólnego dobrobytu. Jest ono używane w kontekście medycyny alternatywnej. Termin został ukuty w latach 50. XX wieku przez Halberta L. Dunna. Wellness utożsamiane jest z rozwojem pokolenia, które urodziło się po drugiej wojnie światowej. Pojęcie odnosi się do zamożniejszych społeczeństw, których podstawowe potrzeby ciała (potrzeby żywności, higieny, schronienia i podstawowej opieki medycznej) zostały już zapewnione.
        <br>
        Wiele z rozwiązań stosowanych w realizacji celu dobrego samopoczucia, w rzeczywistości skierowane są na zwalczanie skutków ubocznych bogactwa, takich jak otyłość i brak aktywności fizycznej. Znaczenie wellness wzrosło w popularnej koncepcji począwszy od XIX wieku, wraz z rozwojem przemysłu, podobnie jak zjawisko klasy średniej. Społeczeństwo które opiera się na zasadach wellness, to takie, dla którego najważniejszym aspektem staje się zdrowie, witalność, niespożyte siły i energia. Jest to pokolenie, które pragnie zatrzymać swoją młodość, dzięki czemu powstają różnego rodzaju firmy i programy, które świadczą usługi związane ze zdrowiem, poprawą samopoczucia, czy aktywnością fizyczną. 
        </article>
    `;

    return section;
}