function header () {

	const windowInnerWidth = document.documentElement.scrollWidth;
	const pageHeight = document.documentElement.scrollHeight;
	const header = document.querySelector('.page-header');
	header.style.height = `${pageHeight}px`;
	const indexOfBlocks = 50;

	function renderBlock(parentSelector,className, src, alt, k) {
		const element = document.createElement('div');
		const parent = document.querySelector(parentSelector);
		element.classList.add(className);
		element.style.width = `${pageHeight / indexOfBlocks}px`;
		if(element.classList.contains('block')) {
			element.style.height = `${pageHeight / indexOfBlocks}px`;
			element.style.borderRadius = `${(pageHeight / indexOfBlocks) / 2}%`
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
		for(let i = 1; i <= (windowInnerWidth / (pageHeight / indexOfBlocks)); i++) {
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
		button.innerHTML = `Attention!!!`
		button.style.position = 'absolute';
		button.style.top = `50%`;
		button.style.left = `50%`;
		button.style.width = '100px';
		header.append(button);
		button.addEventListener('click', () => {
			header.innerHTML = '';
			for(let i = 1; i <= (windowInnerWidth / (pageHeight / indexOfBlocks)); i++) {
				renderBlock('.page-header', `container`,'','', i);
				for (let k = 1; k <= indexOfBlocks; k++) {
					// setTimeout(() => renderBlock(`.container${i}`, `block`), k * 100 / (i / 10));
					setTimeout(() => renderBlock(`.container${i}`, `block`), Math.random() * k * 100);
				}
			}
			header.append(button);
		});
	}
}

export default header;