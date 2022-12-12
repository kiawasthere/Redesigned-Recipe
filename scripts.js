// Javascript for TP7
//function to load file from the URL "fromFile" into the object identified by "whereTo"
function loadFileInto(fromFile, whereTo) {

	// creating a new XMLHttpRequest object
	ajax = new XMLHttpRequest();

	// defines the GET/POST method, source, and async value of the AJAX object
	ajax.open("GET", fromFile, true);

	// provides code to do something in response to the AJAX request
	ajax.onreadystatechange = function() {
			if ((this.readyState == 4) && (this.status == 200)) {
				document.querySelector(whereTo).innerHTML = this.responseText;
				
			} else if ((this.readyState == 4) && (this.status != 200)) {
				console.log("Error: " + this.responseText);
			}
		
	} // end ajax.onreadystatechange function

	// initiate request and wait for response
	ajax.send();

}






// new Recipe object  
function Recipe(recipeName, contributorName, imageURL, ingredientsURL, equipmentURL, directionsURL) {
  
  this.recipeName = recipeName;
  this.contributor = contributorName;
  this.imageURL = imageURL;
  this.ingredients =  ingredientsURL;
  this.equipment = equipmentURL;
  this.directions = directionsURL;
  
  this.displayRecipe = function() {
    
    document.querySelector(".container h1").innerHTML = this.recipeName; 
    document.querySelector("#contributor").innerHTML = this.contributor; 
    document.querySelector(".container img").src= this.imageURL;
    loadFileInto(this.ingredients, "#ingredients ul");
    loadFileInto(this.equipment, "#equipment  ul");
    loadFileInto(this.directions, "#directions ol");
    
  }
 
  
  
}

BasicCrepe = new Recipe( "Basic Crepe", "Kia", "https://images.unsplash.com/photo-1485962307416-993e145b0d0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", "ingredients.html", "equipment.html", "directions.html");

PeachCrisp = new Recipe( "Peach Crisp", "Zaire Moon", "https://images.pexels.com/photos/4397920/pexels-photo-4397920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "peach-ingredients.html", "peach-equipment.html", "peach-directions.html");

TwistyCookie = new Recipe( "Twisty Cookie", "Mark Fillip ", "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80", "cookies-ingredients.html", "cookies-equipment.html", "cookies-directions.html");

SugarCookie = new Recipe( "Sugar Cookie", "All Recipes", "https://media.istockphoto.com/id/1167734101/es/foto/ingredientes-para-hornear-harina-huevos-az%C3%BAcar-mantequilla-leche-y-especias.jpg?s=612x612&w=0&k=20&c=t2An5S63xgPSO1SvzgoN8-x-uLUZXLsZM_jn8GKjW5I=",  "sugar-ingredients.html", "sugar-equipment.html", "sugar-directions.html");

GingerCookie = new Recipe( "Ginger Cookie", "All Recipes", "https://images.freeimages.com/images/previews/998/pepernoten-1326057.jpg",  "ginger-ingredients.html", "ginger-equipment.html", "ginger-directions.html");

PumpkinPie = new Recipe( "Pumpkin Pie", "All Recipes", "https://media.istockphoto.com/photos/homemade-tasty-pumpkin-pie-for-thanksgiving-day-picture-id1344908938?b=1&k=20&m=1344908938&s=612x612&w=0&h=0-XM87cydQxTT7X6kjCmn_7YR9-EYII5IF1BWnZUtFc=",  "pie-ingredients.html", "pie-equipment.html", "pie-directions.html");

CupCookies = new Recipe( "Cup Cookies", "All Recipes", "https://images.freeimages.com/images/previews/6f4/cookies-002-1321913.jpg",  "cup-ingredients.html", "cup-equipment.html", "cup-directions.html");

PopcornBalls = new Recipe( "Popcorn Balls", "All Recipes", "https://media.istockphoto.com/id/839515062/photo/sweet-homemade-popcorn-balls.jpg?b=1&s=612x612&w=0&k=20&c=etOG7VpI2BzZKE_TIkQhF8rtIU7qROlYlXBXwNzD7v8=",  "ball-ingredients.html", "ball-equipment.html", "ball-directions.html");

PumpkinRoll = new Recipe( "Pumpkin Roll", "All Recipes", "https://media.istockphoto.com/id/485820740/photo/pumpkin-roll-cake-for-autumn-halloween-or-thanksgiving.jpg?b=1&s=612x612&w=0&k=20&c=bMnknatiiyWrcbOuqGW6aMWOZTkzqnJu51krlbJJ8jg=",  "roll-ingredients.html", "roll-equipment.html", "roll-directions.html");

 MiniCake = new Recipe( "Mini Cake", "All Recipes", "https://media.istockphoto.com/id/1193138615/photo/small-blueberry-oval-cheesecake-with-blueberry-filling.jpg?b=1&s=612x612&w=0&k=20&c=YT4nFSFjaS8NFxtRXETaRcWoiZGV-ITLVCWfodsL3EU=",  "mini-ingredients.html", "mini-equipment.html", "mini-directions.html");

Brulee = new Recipe( "Brulee", "All Recipes", "https://images.freeimages.com/variants/j2pQXvJkwh5FZvM9PJoEyW95/f4a36f6589a0e50e702740b15352bc00e4bfaf6f58bd4db850e167794d05993d",  "brulee-ingredients.html", "brulee-equipment.html", "brulee-directions.html");

Cobbler = new Recipe( "Cobbler", "All Recipes", "https://media.istockphoto.com/id/1324086905/photo/berry-fruit-crumble-pie-crumble-fruit-crumble-cobbler-cherry-crumble-berry-fruit-crumb-tart.jpg?b=1&s=612x612&w=0&k=20&c=XtEZgQKGukvdr6MwNzKbKMyVberbPMxYl0r4BEtX8OM=",  "cobbler-ingredients.html", "cobbler-equipment.html", "cobbler-directions.html");
window.onload = function() {
  
    document.querySelector("#firstRecipe").onclick = function() {
      BasicCrepe.displayRecipe();
      
    }

  document.querySelector("#secondRecipe").onclick = function() {
      PeachCrisp.displayRecipe(); }

   document.querySelector("#thirdRecipe").onclick = function() {
      TwistyCookie.displayRecipe(); }
   
 document.querySelector("#forRecipe").onclick = function() {
      SugarCookie.displayRecipe(); }

  document.querySelector("#fiveRecipe").onclick = function() {
      GingerCookie.displayRecipe(); }
  
    document.querySelector("#sixRecipe").onclick = function() {
      PumpkinPie.displayRecipe(); }

    document.querySelector("#sevenRecipe").onclick = function() {
      CupCookies.displayRecipe(); }
    
    document.querySelector("#eightRecipe").onclick = function() {
      PopcornBalls.displayRecipe(); }
    
    document.querySelector("#nineRecipe").onclick = function() {
      PumpkinRoll.displayRecipe(); }
    
    document.querySelector("#tenRecipe").onclick = function() {
      MiniCake.displayRecipe(); }
    
    document.querySelector("#elevenRecipe").onclick = function() {
      Brulee.displayRecipe(); }
    
    document.querySelector("#lastRecipe").onclick = function() {
      Cobbler.displayRecipe(); }
}




// end window.onload