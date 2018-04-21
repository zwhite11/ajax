function removeCurrent(){
    var currentTable = document.getElementsByClassName("current")[0];
    currentTable.classList.remove("current");
    currentTable.style.display = "none";

    var currentLink = document.getElementsByClassName("currentLink")[0];
    currentLink.classList.remove("currentLink");
}

function showAll(){
    removeCurrent();
    var allTable = document.getElementById("all");
    allTable.style.display = "block";
    allTable.classList.add("current");
    document.getElementById("allLink").classList.add("currentLink");
}

function showHome(){
    removeCurrent();
    var homeTable = document.getElementById("home");
    homeTable.style.display = "block";
    homeTable.classList.add("current");
    document.getElementById("homeLink").classList.add("currentLink");
}

function showAway(){
    removeCurrent();
    var awayTable = document.getElementById("away");
    awayTable.style.display = "block";
    awayTable.classList.add("current");
    document.getElementById("awayLink").classList.add("currentLink");
}

function showWins(){
    removeCurrent();
    var winsTable = document.getElementById("wins");
    winsTable.style.display = "block";
    winsTable.classList.add("current");
    document.getElementById("winsLink").classList.add("currentLink");
}

function showLosses(){
    removeCurrent();
    var lossesTable = document.getElementById("losses");
    lossesTable.style.display = "block";
    lossesTable.classList.add("current");
    document.getElementById("lossesLink").classList.add("currentLink");
}