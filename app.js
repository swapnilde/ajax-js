var button = document.getElementById("button");
var dataDiv = document.getElementById("data");

button.addEventListener('click', getData);

function getData() {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

    xhr.onload = function () {
        if (this.status == 200) {
            
            console.log(xhr);

            var data = JSON.parse(this.response);

            for (var i in data) {
                dataDiv.innerHTML += '<p>'+'Id: '+data[i].id+'</p>';
                dataDiv.innerHTML += '<p>'+'Title: '+data[i].title+'</p>';
                dataDiv.innerHTML += '<p>'+'Content: '+data[i].body+'</p>';

            }

            console.log(data);
        }
    }

    xhr.send();

}
