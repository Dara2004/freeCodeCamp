var quote, source, color;

color = ["#7fffd4", "#98f5ff", "#ff7256", "#ffd700", "#ff6347"];


function callQuote() {
    $(document).ready(function () {
        $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function (data, status) { //"$.get" -> load data from the server using a HTTP GET request
            //            alert("Load was performed.");
            randomColor = Math.floor(Math.random() * color.length);
            //            post = data[0]; //data will be put into an arr. only get the 1st element
            //            source = data[0].title;
            document.getElementById("quote-content").innerHTML = data.quoteText;
            document.getElementById("quote-source").innerHTML = data.quoteAuthor;
            document.getElementById("quote-link").innerHTML = "Source: " + data.quoteLink;
            //            document.querySelector(".twitter-share-button").href = "http://twitter.com/home/?status=" + data.quoteText + data.quoteAuthor;
            //            document.getElementById("quote-link").style.display = "none";
        });
    });
};


document.querySelector("#getMessage").addEventListener("click", callQuote);
