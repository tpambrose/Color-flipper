const colors =["blue","brown","black","pink","green","yellow","Lime", "LimeGreen", "Linen", "Magenta", "Maroon"];
const button = document.getElementById('btn');
const color = document.querySelector('.color');

button.addEventListener("click", function() {
    // Code to be executed when the button is clicked
    const randomColor = getRandomColor();

    document.body.style.backgroundColor= colors[randomColor];
  color.textContent=colors[randomColor];
  });
 function getRandomColor(){
    return Math.floor(Math.random()*colors.length);
}