function header () {

	const pageWidth = document.documentElement.scrollWidth;
	const pageHeight = document.documentElement.scrollHeight;
	const header = document.querySelector('.page-header');
	header.style.height = `${pageHeight}px`;
	const indexOfBlocks = 100;

	function renderBlock(parentSelector,className, src, alt, k) {
		const element = document.createElement('div');
		const parent = document.querySelector(parentSelector);
		element.classList.add(className);
		element.style.width = `${pageWidth / indexOfBlocks}px`;
		if(element.classList.contains('block')) {
			element.style.height = `${pageWidth / indexOfBlocks}px`;
			element.style.borderRadius = `15%`;
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
	
	async function renderStructure() {
		for(let i = 1; i <= (pageWidth / (pageHeight / indexOfBlocks)); i++) {
			renderBlock('.page-header', `container`,'','', i);
			for (let k = 1; k <= indexOfBlocks; k++) {
				// setTimeout(() => renderBlock(`.container${i}`, `block`), k * 100 / (i / 10));
				setTimeout(() => renderBlock(`.container${i}`, `block`), Math.random() * k * 100);
			}
		}
		await addButton();
	}

	renderStructure();

	// add button
	function addButton() {
		const button = document.createElement('button');
		button.innerHTML = `Regenerate`
		header.append(button);
		button.addEventListener('click', () => {
			header.innerHTML = '';
			renderStructure();
			header.append(button);
		});
	}
}

export default header;