export function Search() {
    var filter, li, a, i, txtValue;
    filter = document.getElementById('myInput').value.toUpperCase();
    li = document.getElementById("myUL").getElementsByTagName('li')[0].innerHTML;
    
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = document.getElementById("myUL").getElementsByTagName('li')[i].getElementsByTagName("h4")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            document.getElementById("myUL").getElementsByTagName('li')[i].style.display = "";
        } else {
            document.getElementById("myUL").getElementsByTagName('li')[i].style.display = "none";
        }
    }
}