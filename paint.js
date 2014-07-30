var colour ='white';
var element;

function fill(id)
{
 
element = document.getElementById(id);


element.style.fill = colour;

}

function fillSet(id)
{

colour = id;

document.getElementById("currentcolour").innerHTML = 'Current colour: ' +id;

}