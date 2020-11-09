function header () {
	class Block {
		constructor(parentSelector, className, src, alt) {
			this.parent = document.querySelector(parentSelector);
			this.className = className;
			this.className = className;
			this.src = src;
			this.alt = alt;
		}
		render() {
			const element = document.createElement('div');
			element.classList.add(this.className);
			element.innerHTML = `       
        		<img src=${this.src} alt=${this.alt}>
        	`;
			this.parent.append(element);
		}
	}
	const block = new Block('.container', 'block', '../img/blick.webp', 'blick');
	setInterval(() => block.render(), 2000);
}

export default header;