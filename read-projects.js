var database = firebase.database().ref();
var proj_ref = document.getElementById("projects");

database.child("Projects").get().then((snapshot) => {
    if(snapshot.exists()) {
        snapshot.forEach(function(proj) {
            console.log(proj.key);
            var newProj = document.createElement("div");
            var title = document.createElement("h1");
            var t = document.createTextNode(proj.key);
            title.appendChild(t);
            title.classList.add("proj-title");
            newProj.appendChild(title);
            proj.forEach(function(child) {
                console.log(child.key + ": " + child.val());
                if(child.key == "Write up") {
                    var wu = document.createElement("p");
                    var text = document.createTextNode(child.val());
                    wu.appendChild(text);
                    wu.classList.add("write-up");
                    newProj.appendChild(wu);
                } else if (child.key == "Github Repository") {
                    var repo = document.createElement("a");
                    repo.href = child.val();
                    var text = document.createTextNode("Github Repository");
                    repo.appendChild(text);
                    repo.classList.add("github-link");
                    newProj.appendChild(repo);
                }
            });
            newProj.classList.add("proj-container");
            proj_ref.appendChild(newProj);
        });
    } else {
        console.log("No data available");
    }
}).catch((error) => {
    console.error(error);
});
