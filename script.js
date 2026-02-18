//complete this code
class Rectangle {

	private _width : number;
	private _height : number;
	
	constructor(width : number, height : number) {
		this.width = width;
		this.height = height;
	}
	
	get width() : number{
		return this._width;
	}
	
	get height() : number{
		return this._height;
	}
	getArea() : number {
		return this._width * this._height;
	}
}

class Square extends Rectangle {
	constructor(side: number) {
		super(side , side);
	}
	
	getPerimeter() : number{
		return this.width * 4;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
