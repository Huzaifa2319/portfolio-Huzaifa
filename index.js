window.onscroll = function () {
  scrollFunction();
};

//scrolling script
// -----------------------------------------------------------------------

function scrollFunction() {
  if (
    // document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 100
  ) {
    document.getElementById("head").style.padding = "10px";
    document.getElementById("logo").style.fontSize = "35px";
    var li = document.getElementById("nid").children;
    for (let i = 0; i < li.length; i++) {
      li[i].classList.add("scr");
    }
  } else {
    document.getElementById("head").style.padding = "20px";
    document.getElementById("logo").style.fontSize = "55px";
    var li = document.getElementById("nid").children;
    for (let i = 0; i < li.length; i++) {
      li[i].classList.remove("scr");
    }
  }
}

//timetable script
// ---------------------------------------------------------------------------
function emp(e) {
  let inp = e;
  inp.classList.remove("inWrong");
}

function makeActive(e) {
  let table = document.getElementById("mytable");
  let allTds = table.getElementsByTagName("td");
  console.log(allTds);

  try {
    if (e.className == "isActive") {
      e.classList.remove("isActive");
    } else if (e.className != "isActive") {
      for (let i = 0; i < allTds.length; i++) {
        if (allTds[i].classList.contains("isActive")) {
          allTds[i].classList.remove("isActive");
        }
      }
      e.classList.add("isActive");
    }
    disEn();
  } catch (error) {}
}

makeActive();

var table = document.getElementById("mytable");
var allTds = table.getElementsByTagName("td");

const disEn = () => {
  var found = false;
  try {
    for (let i = 0; i < allTds.length; i++) {
      if (allTds[i].className == "isActive") {
        found = true;
        break;
      }
    }
  } catch (err) {
    console.log("error");
  }

  if (found) {
    console.log("Found");
    document.getElementById("insertBtn").removeAttribute("disabled");
  } else {
    console.log("not found");
    document.getElementById("insertBtn").setAttribute("disabled", "");
  }
};

disEn();

function insertData() {
  var table = document.getElementById("mytable");
  var allTds = table.getElementsByTagName("td");
  var text = document.getElementById("data").value;
  for (let i = 0; i < allTds.length; i++) {
    if (allTds[i].className == "isActive") {
      allTds[i].innerText = text;
      allTds[i].classList.remove("isActive");
    }
  }
  disEn();
}

const addRow = () => {
  let text = document.getElementById("day").value;
  if (text != "") {
    var n = document.getElementById("mt").childElementCount;
    console.log(n);
    let newCol = document.createElement("th");
    newCol.innerText = text;

    var arr = document.getElementById("mt").children;
    for (let i = 0; i < arr.length; i++) {
      let emptyCols = document.createElement("td");
      emptyCols.setAttribute("onclick", "makeActive(this)");
      arr[i].append(emptyCols);
    }
    document.getElementById("day").value = null;
    document.getElementById("heading").append(newCol);
  } else {
    document.getElementById("day").classList.add("inWrong");
  }
};

const addColumn = () => {
  let text = document.getElementById("time").value;
  if (text != "") {
    var n = document.getElementById("heading").childElementCount;
    let newRow = document.createElement("tr");
    let time = document.createElement("th");
    time.innerText = text;
    newRow.append(time);
    for (let i = 0; i < n - 1; i++) {
      let emptyCols = document.createElement("td");
      emptyCols.setAttribute("onclick", "makeActive(this)");

      newRow.append(emptyCols);
    }
    document.getElementById("time").value = null;
    document.getElementById("mt").append(newRow);
  } else {
    document.getElementById("time").classList.add("inWrong");
  }
};
