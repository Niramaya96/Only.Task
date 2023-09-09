function openButton(el) {

var firstChild = el.firstChild;
var lastChild = el.lastChild;

el.classList.toggle("expand");
if (lastChild.style.display === "none") {
	lastChild.style.display = "inline";
	firstChild.style.float = "left";

}
else{
	lastChild.style.display = "none";
	firstChild.style.float = "none";
}


}