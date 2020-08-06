let root = document.getElementById("root");

let hamburger = document.createElement("div");
hamburger.className = "hamburger";
root.append(hamburger);

const horizonLine1 = document.createElement("div");
horizonLine1.className = "horizonLine";
hamburger.append(horizonLine1);
const horizonLine2 = document.createElement("div");
horizonLine2.className = "horizonLine";
hamburger.append(horizonLine2);
const horizonLine3 = document.createElement("div");
horizonLine3.className = "horizonLine";
hamburger.append(horizonLine3);

const forModalWindow = document.createElement("div");
forModalWindow.className = "divForModalWindow";
root.append(forModalWindow);

let openWindowModal = false;

hamburger.onclick = () => {
  if (!openWindowModal) {
    openWindowModal = !openWindowModal;
    let window = document.createElement("div");
    window.className = "windowModal";
    forModalWindow.append(window);

    let ol = document.createElement("ol");
    ol.className = "menu_list";
    window.append(ol);

    let li1 = document.createElement("li");
    ol.append(li1);
    li1.innerText = "Features";
    let li2 = document.createElement("li");
    ol.append(li2);
    li2.innerText = "About";
    let li3 = document.createElement("li");
    ol.append(li3);
    li3.innerText = "Pricing";
    let li4 = document.createElement("li");
    ol.append(li4);
    li4.innerText = "Reviews";
    let li5 = document.createElement("li");
    ol.append(li5);
    li5.innerText = "Contact";
  } else {
    openWindowModal = !openWindowModal;
    forModalWindow.innerHTML = "";
  }
};
