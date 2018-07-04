const btn = document.getElementById("a");

const displayAlphabet = () => {
  // let btnStyle = btn.style.display;
  // if(btnStyle === "none"){
  //   btnStyle = "block";
  // }
  const div = document.getElementsByClassName('a')[0];
  // console.log(div)
  div.style.display = ((div.style.display!='none') ? 'none' : 'block');
  
}


const displayAlphabet2 = () => {
  
}
btn.addEventListener('click', displayAlphabet);

