const list = document.getElementsByTagName('ul')[0];
function generateList(arr, parent){
	const ul = document.createElement('ul');
	const docFrag = document.createDocumentFragment();

	arr.forEach(elem =>{
		const li = document.createElement('li');
		docFrag.appendChild(li);
		
		if(Array.isArray(elem)){
			generateList(elem, li);
		}else{
			li.innerText = elem;
		}
		
		ul.appendChild(docFrag);		
	});

	parent.appendChild(ul);
}

generateList([1,2, [2.1,['2.1.1'],2.2, ['2.2.1'], 2.3] ,3], list);