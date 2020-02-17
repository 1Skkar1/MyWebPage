//home
document.getElementById("tab1").addEventListener("click", showHome);
//about
document.getElementById("tab2").addEventListener("click", showAbout);
//resumé
document.getElementById("tab3").addEventListener("click", showResume);
//projects
document.getElementById("tab4").addEventListener("click", showProjects);

function showHome() {
    //show
    document.getElementById("profilepic").style.display = "block";
    document.getElementById("profilename").style.display = "block";
    document.getElementById("icons").style.display = "block";
    document.getElementById("mailicon").style.display = "block";

    //hide
    document.getElementById("cv").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("projects").style.display = "none";
}

function showAbout() {
    //show
    document.getElementById("about").style.display = "block";

    //hide
    document.getElementById("profilepic").style.display = "none";
    document.getElementById("profilename").style.display = "none";
    document.getElementById("icons").style.display = "none";
    document.getElementById("mailicon").style.display = "none";
    document.getElementById("cv").style.display = "none";
    document.getElementById("projects").style.display = "none";
}

function showResume() {
    //show
    document.getElementById("cv").style.display = "block";

    //hide
    document.getElementById("profilepic").style.display = "none";
    document.getElementById("profilename").style.display = "none";
    document.getElementById("icons").style.display = "none";
    document.getElementById("mailicon").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("projects").style.display = "none";
}

function showProjects() {
    //show
    document.getElementById("projects").style.display = "block";

    //hide
    document.getElementById("profilepic").style.display = "none";
    document.getElementById("profilename").style.display = "none";
    document.getElementById("icons").style.display = "none";
    document.getElementById("mailicon").style.display = "none";
    document.getElementById("cv").style.display = "none";
    document.getElementById("about").style.display = "none";
}