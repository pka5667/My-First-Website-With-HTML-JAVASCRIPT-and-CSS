function onLoad() {
    url = window.location.href;
    url = new URL(url);
    searchFor = new String(url.searchParams.get("search").toLowerCase());
    searchFor = searchFor.replace("+", " ")
    if (searchFor != null) {
        changeCSS();
    }
}

onLoad();

function changeCSS() {
    document.getElementById("content").style.display = "none";
    document.getElementById("featured-articles-text").innerText = "Search results for " + searchFor;
    searchArticles();
}

function yearSelected() {
    var years = document.querySelectorAll('input[name="Year"]');
    for (year of years) {
        if (year.checked) {
            searchFor = year.value;
        }
    }

    searchArticles();
}

function searchArticles() {
    var x = document.getElementsByTagName('article');

    var totalResults = 0;
    for (i = 0; i < x.length; i++) {
        if (!x[i].innerText.toLowerCase().includes(searchFor)) {
            x[i].style.display = "none";
        } else {
            totalResults++;
            x[i].style.display = "";
        }
    }
    if (totalResults == 0) {
        alert("No results found");
        window.location.href = "/";
    }
}