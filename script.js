// cache to DOM
var button = document.getElementById("button")
var body = document.querySelector("body")
var nume = document.getElementById ("nume")
var prenume = document.getElementById ("prenume")
var img = document.querySelector("#rounded-img")
var astept = document.getElementById ("astept")
var ala = document.getElementById ("ala")
var an = document.getElementById ("AnNastere")


const d = new Date ()
var year = d.getFullYear()

// add event list to button
button.addEventListener("click",altaViata)

an.addEventListener("mouseover",displayAge)




//define fuction


function altaViata()
{

	nume.innerHTML = "Profesie: Ghicitor de Vreme"
	prenume.innerHTML = "Disponibilitate: Oricand, Oriunde"
	img.src="images/ghici.png"
	astept.innerHTML = "Ce stiu eu si voi nu"
	ala.innerHTML = "<ul> <li>Jocuri Video</li><li>Writing!!</li><li>Arta</li><li>Muzica</li><li>filme / seriale</li></ul>"
	body.style.backgroundImage = "url('images/thea.png')"

}

function displayAge()

{
an.innerHTML = year - an.innerHTML
}