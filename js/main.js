let btnSubmit = document.querySelector(".btnSubmit");
let descripBtn = document.querySelector(".btnDescrip");
let backBtn = document.querySelector(".back");
let noBackBtn = document.querySelector(".noBack");
let aheadBtn = document.querySelector(".ahead");
let showTitle = document.querySelector(".showTitle");
let chooseTwo = document.querySelector(".chooseTwo");
let chooseThree = document.querySelector(".chooseThree");
let chooseOne = document.querySelector(".chooseOne");
let secondSpan = document.querySelector('.second'); 
let thirdSpan = document.querySelector('.third'); 

btnSubmit.addEventListener("click", () => {
  showTitle.innerHTML =  `Choose Description Content`
  showTitle.style.color = "black";
  chooseTwo.style.color = "black";
  secondSpan.style.backgroundColor = "blue";
  secondSpan.style.color = "white";
  backBtn.style.display = "block"
  btnSubmit.style.display = "none"
  descripBtn.style.display = "block";
});


chooseTwo.addEventListener("click", () => {
  showTitle.innerHTML =  `Choose Description Content`
  showTitle.style.color = "black";
  chooseTwo.style.color = "black";
  chooseThree.style.color = "#b0b0b0";  
  secondSpan.style.backgroundColor = "blue";
  secondSpan.style.color = "white";
  thirdSpan.style.backgroundColor = "rgb(224, 224, 224)";
  backBtn.style.display = "block"
  btnSubmit.style.display = "none"
  descripBtn.style.display = "block";
  noBackBtn.style.display = "none";
  aheadBtn.style.display = "none";
});

backBtn.addEventListener("click", () => {
  showTitle.innerHTML =  `Choose Title content`
  showTitle.style.color = "black";
  chooseTwo.style.color = "#b0b0b0"
  secondSpan.style.backgroundColor = "rgb(224, 224, 224)";
  backBtn.style.display = "none"
  btnSubmit.style.display = "block";
  descripBtn.style.display = "none";
});

chooseOne.addEventListener("click", () => {
  showTitle.innerHTML =  `Choose Title content`
  showTitle.style.color = "black";
  chooseTwo.style.color = "#b0b0b0";
  chooseThree.style.color = "#b0b0b0";
  secondSpan.style.backgroundColor = "rgb(224, 224, 224)";
  thirdSpan.style.backgroundColor = "rgb(224, 224, 224)";
  backBtn.style.display = "none";
  btnSubmit.style.display = "block";
  descripBtn.style.display = "none";
  noBackBtn.style.display = "none";
  aheadBtn.style.display = "none";  
})

descripBtn.addEventListener("click", () => {
  showTitle.innerHTML = `Are You Happy?`
  showTitle.style.color = "black";
  thirdSpan.style.backgroundColor = "blue";
  thirdSpan.style.color = "white";
  noBackBtn.style.display = "block";
  aheadBtn.style.display = "block";
  backBtn.style.display = "none";
  descripBtn.style.display = "none";
  chooseThree.style.color = "black";
});



chooseThree.addEventListener("click", () => {
  showTitle.innerHTML = `Are You Happy?`
  showTitle.style.color = "black";
  thirdSpan.style.backgroundColor = "blue";
  thirdSpan.style.color = "white";  
  btnSubmit.style.display = "none";
  noBackBtn.style.display = "block";
  aheadBtn.style.display = "block";
  backBtn.style.display = "none";
  descripBtn.style.display = "none";
  chooseThree.style.color = "black";
});

noBackBtn.addEventListener("click", () => {
  showTitle.innerHTML =  `Choose Description Content`
  showTitle.style.color = "black";
  chooseThree.style.color = "#b0b0b0"
  thirdSpan.style.backgroundColor = "rgb(224, 224, 224)";
  backBtn.style.display = "block";
  btnSubmit.style.display = "none";
  descripBtn.style.display = "block";
  noBackBtn.style.display = "none";
  aheadBtn.style.display = "none"
});

aheadBtn.addEventListener("click", () => {
  showTitle.innerHTML = `Ok We are done. Thanks for
  sending <br> us Your data !`
  showTitle.style.color = "green";
  noBackBtn.style.display = "none";
  aheadBtn.style.display = "none";
});

