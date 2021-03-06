class Component {
	constructor(width, height, color, x, y, ctx, src) {
		this.width = width;
		this.height = height;
		this.color = color;
		this.x = x;
		this.y = y;
		this.ctx = ctx;
		this.speedX = 0;
		this.speedY = 0;
		this.tail = 0;
		const makeImg = new Image();
		makeImg.addEventListener("load", () => {});
		makeImg.src = src;
		this.img = makeImg;
	}

	newPos() {
		this.x += this.speedX;
		this.y += this.speedY;
	}

	draw() {
		this.ctx.fillStyle = this.color;
		this.ctx.fillRect(this.x, this.y, this.width, this.height);
	}

	left() {
		return this.x;
	}

	right() {
		return this.x + this.width;
	}

	top() {
		return this.y;
	}

	bottom() {
		return this.y + this.height;
	}

	drawImg() {
		this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
	}

	crashWith(food) {
		return !(
			this.bottom() < food.top() ||
			this.top() > food.bottom() ||
			this.right() < food.left() ||
			this.left() > food.right()
		);
	}
}
