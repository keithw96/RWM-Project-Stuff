/**
 * Pop up box constructor. 
 * Declares the boxes parameters.
 */
function PopupBox(x,y)
{
	this.x = x;
	this.y = y;
	this.width = 400;
	this.height = 200;
}

/**
 * Function that draws the tip box and its text.
 */
PopupBox.prototype.draw = function(ctx)
{
	ctx.fillStyle = "#66ff33";
	ctx.fillRect(this.x, this.y, this.width, this.height);
	
	ctx.font = "15px Comic Sans MS";
	ctx.fillStyle = "black";
	ctx.textAlign = "center";
	ctx.fillText(randomTips(), this.x + this.width/2, this.y + 50); 
	ctx.fillText("click to close this tip", this.x + this.width/2, this.y + 150); 
}


/**
 * Function that randomly selects and returns tip from an array of tips. 
 */
function randomTips()
{
	var tips = [
		"TIP: You lose if your health is 0.",
		"TIP: Don't get bitten by the zombies!.",
		"TIP: Dragons are scary.",
		"TIP: The enemies cant kill you if they're dead",
		"TIP: If you see a bug, kill it.", 
		"TIP: It's hard to hit a moving target."
	];
	
	var randomTip = Math.floor(Math.random()*tips.length);
	
	return tips[randomTip];
}