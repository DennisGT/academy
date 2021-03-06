
localStorage.setItem('name', 'value');
localStorage.getItem('name');
localStorage.removeItem('name');

localStorage.length;
localStorage.key(0);

var i, len = localStorage.length;
var exclude = ['name1', 'name2'];
for (i = 0; i < len; i++) {
    var key = localStorage.key(i);
    if (exclude.indexOf(key) == -1) {
        localStorage.removeItem(key);
    }
}


throw "Super error";

var error = new Error("This is a custom error");
error.name; // Error
error.message; // This is a custom error
throw error;
console.log(error);

//123 = "some string";
var a = 5;
a();


var num = 5;
function throws() {
    throw "Super error";
}
throws();
num = 7;

var data = localStorage.getItem('user');

try {
    data = JSON.parse(data);
} catch (err) {
    console.log(err.message);
    data = {};
    localStorage.removeItem('user');
}


var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        if (Math.random() > 0.5) {
            resolve("Greater");
        } else {
            reject("Error");
        }
    }, 2000);
});

promise.then(function (r) {
    console.log(r); // Greater
    return "Cool";
}).then(function (r) {
    console.log(r); // Cool
}).catch(function (error) {
    console.log(error); // Error
});

function getUser(id) {
    var result = new Promise(function (resolve, reject) {
        var http = new XMLHttpRequest();
        http.open('GET', 'http://site.com');

        http.addEventListener('onreadystatechange', function () {
            if (this.readyState == 4) {
                var data = JSON.parse(this.responseText);
                this.status == 200 ? resolve(data) : reject(data);
            }
        });

        http.send('userId='+id);
    });

    return result;
}

getUser(14).then(function (data) {
    // got user here
}).catch(function (err) {
    // got error
});
