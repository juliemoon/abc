const displayDiv = (selection) => {
  let divId = document.getElementById(selection);
  divId.hidden = !divId.hidden;
}

nav.onclick = (e) =>{
  let selected = e.target.innerHTML.toLowerCase(); 
  displayDiv(selected);

}