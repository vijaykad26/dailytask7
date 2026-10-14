

let missioninput = document.getElementById("missionInput");
let addmission = document.getElementById("addMission");
let missionlist = document.getElementById("missionlist");
let missioncount = document.getElementById("missioncount");
let colorbtn = document.getElementById("colorbtn");

let colors = [ "rgb(255, 87, 51)", "rgb(51, 255, 87)","rgb(51, 87, 255)","rgb(243, 51, 255)","rgb(51, 255, 245)"];

let colorIndex = 0;

function addMission() {
    let missionText = missioninput.value.trim();

    if (missionText === "") {
        alert("Mission could not be empty");
        return;
    }

    let li = document.createElement("li");
    li.textContent = missionText;

    li.onclick = function() {
    li.classList.toggle("completed");
    };

    let delBtn = document.createElement("button");
    delBtn.textContent = "Delete";

    delBtn.onclick = function(event) {
        event.stopPropagation();
        li.remove();
        updateCount();
    };

    li.appendChild(delBtn);
    missionlist.appendChild(li);

    missioninput.value = "";
    updateCount();
}

function updateCount() {
    missioncount.textContent = missionlist.children.length;
}

addmission.onclick = addMission;

colorbtn.onclick = function() {
    document.body.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
};
