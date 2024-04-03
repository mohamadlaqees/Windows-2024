let survey1 = document.getElementById("survey1");
let survey2 = document.getElementById("survey2");
let survey3 = document.getElementById("survey3");
let survey4 = document.getElementById("survey4");
let survey5 = document.getElementById("survey5");
let survey6 = document.getElementById("survey6");
let end = document.getElementById("end");
let text = document.getElementById("text");
let btn = document.getElementsByClassName("btn");
let zipInput = document.getElementById("zipInput");
let errorZip = document.getElementById("errorText");
let backBtn = document.getElementsByClassName("back");
let card = document.getElementsByClassName("card");
let windows = document.getElementsByClassName("windows");
let address = document.getElementById("address");
let fName = document.getElementById("fName");
let lName = document.getElementById("lName");
let phoneNumber = document.getElementById("pNumber");

let pages = [true, false, false, false, false, false, false];

back = () => {
  for (let i = 1; i <= pages.length; i++) {
    if (pages[i] === true) {
      return i - 1;
    }
  }
};

checkZIP = () => {
  if (zipInput.value.length === 5) {
    return true;
  } else {
    return false;
  }
};

checkAddress = () => {
  if (address.value !== "") {
    return true;
  }
};

checkName = () => {
  if (fName.value !== "" && lName.value !== "") {
    return true;
  }
};

checkNumber = () => {
  if (phoneNumber.value !== "") {
    return true;
  }
};

for (let i = 0; i < backBtn.length; i++) {
  backBtn[i].onclick = () => {
    switch (back()) {
      case 0: {
        zipInput.classList.remove("error");
        errorZip.style.display = "none";
        survey2.style.display = "none";
        pages[1] = false;
        pages[0] = true;
        survey1.style.display = "block";
        break;
      }
      case 1: {
        survey3.style.display = "none";
        pages[1] = true;
        pages[2] = false;
        survey2.style.display = "block";
        break;
      }
      case 2: {
        survey4.style.display = "none";
        pages[2] = true;
        pages[3] = false;
        survey3.style.display = "block";
        break;
      }
      case 3: {
        address.classList.remove("error");
        survey5.style.display = "none";
        pages[3] = true;
        pages[4] = false;
        survey4.style.display = "block";
        break;
      }
      case 4: {
        fName.classList.remove("error");
        lName.classList.remove("error");
        survey6.style.display = "none";
        pages[4] = true;
        pages[5] = false;
        survey5.style.display = "block";
        break;
      }
    }
  };
}

for (let i = 0; i < btn.length; i++) {
  btn[i].onclick = () => {
    switch (i) {
      case 0: {
        if (checkZIP()) {
          survey2.style.display = "block";
          pages[1] = true;
          pages[0] = false;
          survey1.style.display = "none";
        } else {
          errorZip.style.display = "block";
          zipInput.classList.add("error");
        }
        break;
      }
      case 1: {
        if (checkAddress()) {
          survey5.style.display = "block";
          pages[4] = true;
          pages[3] = false;
          survey4.style.display = "none";
        } else {
          address.classList.add("error");
        }
        break;
      }
      case 2: {
        if (checkName()) {
          survey6.style.display = "block";
          pages[5] = true;
          pages[4] = false;
          survey5.style.display = "none";
        } else {
          fName.classList.add("error");
          lName.classList.add("error");
        }
        break;
      }
      case 3: {
        if (checkNumber()) {
          end.style.display = "block";
          pages[6] = true;
          pages[5] = false;
          survey6.style.display = "none";
          text.style.display = "none";
        } else {
          phoneNumber.classList.add("error");
        }
        break;
      }
    }
  };
}

for (let i = 0; i < card.length; i++) {
  card[i].onclick = () => {
    survey2.style.display = "none";
    pages[1] = false;
    survey3.style.display = "block";
    pages[2] = true;
  };
}

for (let i = 0; i < windows.length; i++) {
  windows[i].onclick = () => {
    survey3.style.display = "none";
    pages[2] = false;
    survey4.style.display = "block";
    pages[3] = true;
  };
}
