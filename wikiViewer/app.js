var link = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search="
var searchTerm = document.getElementById("searchTerm");
var result;

function search() {
    document.getElementById("icon").addEventListener("click", function () {
        //        alert("Jquey is loaded!");
        //        alert(link + searchTerm.value);
        //    console.log(searchTerm);
        $.getJSON(link + searchTerm.value, function (data) {
            //            alert("getJSON was loaded");
            //            console.log(data);

            for (var i = 0; i < data[1].length; i++) {
                $("#output").prepend("<div class='result'><a href=" +
                    data[3][i] + "><h2>" + data[1][i] + "</h2></a> <p>" + data[2][i] + "<p></div>")
            } //i can be used 3 times because that's how the data is structured, example:
            //heading: data[1][2]
            //para: data[2][2]
            //link: data[3][2]
            result = data;

        })
    })
}



//
//    $.ajax({
//        url: "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=love" + searchTerm,
//        data: queryData,
//        dataType: 'json',
//        type: 'POST',
//        headers: {
//            'Api-User-Agent': 'Example/1.0'
//        },
//        success: function (data) {
//            // do something with data
//        }
//    });
//
//    // Using mw.Api, specify it when creating the mw.Api object
//    var api = new mw.Api({
//        ajax: {
//            headers: {
//                'Api-User-Agent': 'Example/1.0'
//            }
//        }
//    });
//    api.get({
//
//    }).done(function (data) {
//        // do something with data
//        console.log(data);
//
//    });
//})
