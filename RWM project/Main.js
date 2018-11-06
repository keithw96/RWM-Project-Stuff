this.count = 0;
this.game = true
/**
 * Main entry point for the Javascript program.
 */
function main()
{
	initialise();
	draw();
	
	document.addEventListener("click", onClickStart.bind(null, this));
}

/**
 * Initializes the pop up box and the value that controls if it's visible.
 */
function initialise()
{
	initCanvas();
	
	this.popup = new PopupBox(0,0);
	this.popupVisible = false;
}

/**
 * Creates the canvas that the project elements will be drawn on.
 */
function initCanvas()
{
	var canvas = document.createElement("canvas");
		
    canvas.id = 'mycanvas';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
		
    var ctx = canvas.getContext("2d");
		
    document.body.appendChild(canvas);
}

/**
 * Function that handles all of the draw methods.
 */
function draw()
{
	var canvas = document.getElementById('mycanvas');

	var ctx = canvas.getContext('2d');
	
	ctx.clearRect(0,0,canvas.width, canvas.height);
	
	if(this.popupVisible === true)
	{
		this.popup.draw(ctx);
	}
}

/**
 * Function that is called at the start of a click event.
 * Toggles if the pop up is visible or not.
 */
function onClickStart(game, e)
{
	if(this.popupVisible === false)
	{
		this.popup.x = e.x - (this.popup.width / 2);
		this.popup.y = e.y - (this.popup.height / 2);
	
		this.popupVisible = true;
	}
	
	else if(this.popupVisible === true)
	{
		this.popupVisible = false;
	}
	
	draw();
}