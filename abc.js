let alphaDiv;

const showHide = (selection) => {
  if(alphaDiv) {
    alphaDiv.classList.remove('show');
  }
  alphaDiv = selection;
  alphaDiv.classList.add('show');
}

nav.onclick = (e) => {
  let id = e.target.innerHTML.toLowerCase(); 
  let selected = document.getElementById(id);
  showHide(selected);
}