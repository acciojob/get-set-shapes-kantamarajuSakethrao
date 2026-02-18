class Rectangle {

	private widthValue: number;
	private heightValue: number;
	
	constructor(width: number, height: number) {
		this.widthValue = width;
		this.heightValue = height;
	}
	
	get width(): number {
		return this.widthValue;
	}
	
	get height(): number {
		return this.heightValue;
	}
	
	getArea(): number {
		return this.widthValue * this.heightValue;
	}
}

class Square extends Rectangle {
	constructor(side: number) {
		super(side, side);
	}
	
	getPerimeter(): number {
		return this.width * 4;
	}
}

// Do not change below
window.Rectangle = Rectangle;
window.Square = Square;
