
function randomForm() {
    var search = document.getElementById("search").value;
    var div = document.getElementById("tirage").innerHTML += "<div class='value'>" + "<div class='withoutx' >" + "<p class='tontext'>" + search + "</div>" + "<span class='delete' onclick=deleteForm()>" + "X" + "<span>" + "</p>" + "</div>";
    document.getElementById("deleteall").style.display = "block";
    document.getElementById("search").value = "";

    if (search == "") {
        alert("Veuillez entrer un élément");
        document.getElementById("tirage").innerHTML = "";
        document.getElementById("deleteall").style.display = "none";
    }
    document.body.appendChild(div);

}

function draw() {

    document.getElementById("random").style.display = "none";
    document.getElementById("search").style.display = "none";
    document.getElementById("textnone").style.display = "none";
    document.getElementById("deleteall").style.display = "none";
    document.getElementById("add").style.display = "none";

    if (document.getElementsByClassName("value").length < 2) {
        alert("Il faut au moins 2 éléments pour tirer au sort, veuillez recommencer");
        document.getElementById("random").style.display = "block";
        document.getElementById("search").style.display = "block";
        document.getElementById("textnone").style.display = "block";
        document.getElementById("add").style.display = "block";
        document.getElementById("tirage").innerHTML = "";
        document.getElementsByClassName("hide").style.display = "none"
    }

    var random = document.getElementsByClassName("withoutx");
    var random = random[Math.floor(Math.random() * random.length)];
    var random = random.innerHTML;
    var random = document.getElementById("tirage").innerHTML = "<div class='contain'>" + "<div class='result'>" + random + "</div>" + "<div id='idback' class='hide'>" + "<button class = 'back' onclick= back()>" + "Retour" + "</button>" + "</div>" + "</div>";
    document.body.appendChild(random);
    document.body.appendChild(back);

}

function deleteAll() {
    document.getElementById("tirage").innerHTML = "";
    document.getElementById("deleteall").style.display = "none";

}

function deleteForm() {
    var div = document.getElementById("tirage");
    div.removeChild(div.lastChild);
    if (div.childElementCount == 0) {
        document.getElementById("deleteall").style.display = "none";
    }
}

function back() {
    document.getElementById("random").style.display = "block";
    document.getElementById("search").style.display = "block";
    document.getElementById("textnone").style.display = "block";
    document.getElementById("add").style.display = "block";
    document.getElementById("idback").style.display = "none";
    document.getElementById("tirage").innerHTML = "";
}

                    // function enleve(){

                    // }

                    // function reload() {


                    // }

                    // function board() {

                    // }
