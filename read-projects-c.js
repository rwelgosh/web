var database = firebase.database().ref();
var proj_ref = document.getElementById("projects");

database.child("Count").get().then((snapshot) => {
    var num_proj = snapshot.val();
    var proj_1 = document.createElement("div");
    var proj_2 = document.createElement("div");
    var proj_3 = document.createElement("div");
    var proj_4 = document.createElement("div");
    database.child("Projects").get().then((projects) => {
        if(projects.exists) {
            projects.forEach(function(c) {
                var proj_ref = database.child("Projects");
                var p_ref = proj_ref.child(c.key);
                p_ref.child("ID").get().then((id) => {
                    if(id.val() >= num_proj-4) {

                        var proj = null;
                        var title = document.createElement("h2");
                        var t = document.createTextNode(c.key);
                        title.appendChild(t);
                        title.classList.add("proj-title-1");
                        
                        var wu = document.createElement("p");
                        var gh = document.createElement("a");
                        var s = document.createElement("ul");

                        c.forEach(function(p) {
                            if (p.key == "Write up") {
                                var text = document.createTextNode(p.val());
                                wu.appendChild(text);
                                wu.classList.add("write-up")
                            } else if (p.key == "Github Repository") {
                                var text = document.createTextNode("Github Repository");
                                gh.appendChild(text);
                                gh.classList.add("github-link");
                                gh.href = p.val();
                            } else if (p.key =="Skills Used") {
                                p.forEach(function(skill_d) {
                                    var skill = document.createElement("li");
                                    var sn = document.createTextNode(skill_d.val());
                                    skill.appendChild(sn);
                                    s.appendChild(skill);
                                })
                            }
                        });

                        s.classList.add("skills-used");

                        var skillLabel = document.createElement("h3");
                        skillLabel.appendChild(document.createTextNode("Skills Used"));

                        var skills = document.createElement("div");
                        skills.appendChild(skillLabel);
                        skills.appendChild(s);
                        skills.classList.add("skills");

                        if(id.val() == num_proj-1) {
                            proj = document.getElementById("proj_1");
                            proj.appendChild(title);
                            proj.appendChild(wu);
                            proj.appendChild(document.createElement("br"));
                            proj.appendChild(document.createElement("br"));
                            proj.appendChild(document.createElement("br"));
                            proj.appendChild(skills);
                            proj.appendChild(gh);
                        } else if (id.val() == num_proj-2) {
                            proj = document.getElementById("proj_2");
                            proj.appendChild(title);
                            proj.appendChild(wu);
                            proj.appendChild(document.createElement("br"));
                            proj.appendChild(document.createElement("br"));
                            proj.appendChild(document.createElement("br"));
                            proj.appendChild(skills);
                            proj.appendChild(gh);
                        } else if (id.val() == num_proj-3) {
                            proj = document.getElementById("proj_3");
                            proj.appendChild(title);
                            proj.appendChild(wu);
                            proj.appendChild(document.createElement("br"));
                            proj.appendChild(document.createElement("br"));
                            proj.appendChild(document.createElement("br"));
                            proj.appendChild(skills);
                            proj.appendChild(gh);
                        } else {
                            proj = document.getElementById("proj_4");
                            proj.appendChild(title);
                            proj.appendChild(wu);
                            proj.appendChild(document.createElement("br"));
                            proj.appendChild(document.createElement("br"));
                            proj.appendChild(document.createElement("br"));
                            proj.appendChild(skills);
                            proj.appendChild(gh);
                        }
                    }
                });
            });
        }
    });
});
