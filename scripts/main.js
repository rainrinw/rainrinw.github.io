const img1 = document.querySelectorAll("img")[0];  // 第一张图片
const img2 = document.querySelectorAll("img")[1];  // 第二张图片

// 点击第一张图片时切换
img1.onclick = () => {
  const currentSrc = img1.getAttribute("src");
  if (currentSrc.includes("ars1.jpg")) {
    img1.setAttribute("src", "images/ars2.jpg");
  } else {
    img1.setAttribute("src", "images/ars1.jpg");
  }
};

// 点击第二张图片时切换
img2.onclick = () => {
  const currentSrc = img2.getAttribute("src");
  if (currentSrc.includes("ars2.jpg")) {
    img2.setAttribute("src", "images/ars1.jpg");
  } else {
    img2.setAttribute("src", "images/ars2.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

//个性化欢迎
function setUserName() {
  const myName = prompt("Please enter your name.");
 if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `${myName}...欢迎您的来访...`;
}
}


if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `${storedName}...欢迎您的来访...`;
}

//用户名更改
myButton.onclick = function () {
  setUserName();
};