
const init = () => {
	document.getElementById("btnFredrika").addEventListener('click', onButtonClick); 
};
	
const onButtonClick = (e) => {
	
	alert("Hej");
};

if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
    init();
} else {
    document.addEventListener("DOMContentLoaded", init);
}