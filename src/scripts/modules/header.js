function header () {

	const windowInnerWidth = document.documentElement.scrollWidth;
	const indexOfBlocks = 50;

	function renderBlock(parentSelector,className, src, alt, k) {
		const element = document.createElement('div');
		const parent = document.querySelector(parentSelector);
		element.classList.add(className);
		element.style.height = `${windowInnerWidth / indexOfBlocks}px`;
		if(element.classList.contains('block')) {
			element.style.width = `${windowInnerWidth / indexOfBlocks}px`;
			element.style.borderRadius = `${(windowInnerWidth / indexOfBlocks) / 3}%`
		}
		if (src && alt)
		element.innerHTML = `       
			<img src=${src} alt=${alt}>
		`;
		if (k) {
			element.classList.add(`${className}${k}`);
		}
		parent.append(element);
	}
	for(let i = 1; i <= 15; i++) {
		renderBlock('.page-header', `container`,'','', i);
		for (let k = 1; k <= (indexOfBlocks); k++) {
			setTimeout(() => renderBlock(`.container${i}`, `block`), k * 100 * (i / 30));
		}
	}













	// const container2 = new Block('header', 'container2');
	// const block2 = new Block('.container2', 'block2', '../img/blick.webp', 'blick');
	// setTimeout(() => container2.render(), 2000);
	// setInterval(() => block2.render(), 2500);
}

export default header;