const listaDeProdutos = document.getElementById('listaDeProdutos');
const filtroBtn = document.getElementById('filtro-btn');
const buscaBtn = document.getElementById('busca-btn');
const buscaInput = document.getElementById('buscaInput')
const minPrecoInput = document.getElementById('min-preco');
const maxPrecoInput = document.getElementById('max-preco');
const ordenarBtn = document.getElementById('ordenar-btn');
const ordenarSelect = document.getElementById('ordenar');

// Função que filtra os produtos pelo intervalo de preço
filtroBtn.addEventListener('click', () =>{
	const minPreco = parseInt(minPrecoInput.value);
	const maxPreco = parseInt(maxPrecoInput.value);

	for (let i = 0; i < listaDeProdutos.children.length; i++) {
		const produtos = listaDeProdutos.children[i];
		const preco = parseInt(produtos.dataset.preco);

		if (preco >= minPreco && preco <= maxPreco) {
			produtos.style.display = 'block';
		} else {
			produtos.style.display = 'none';
		}
	}
})

// Função que ordena os produtos pelo preço
ordenarBtn.addEventListener('click', () =>{
	const produtos = Array.from(listaDeProdutos.children);

	produtos.sort((a, b) => {
		const apreco = parseInt(a.dataset.preco);
		const bpreco = parseInt(b.dataset.preco);

		if (ordenarSelect.value === 'preco-asc') {

			return apreco - bpreco;
		} else {
			return bpreco - apreco;
		}
	});

	produtos.forEach(produto => listaDeProdutos.appendChild(produto));
})

// Função que busca produtos pelo nome
buscaBtn.addEventListener('click', () =>{
	buscaValue = buscaInput.value.toLowerCase();
	// Percorre a lista de produtos e esconde os que não correspondem à busca
	for (var i = 0; i < listaDeProdutos.children.length; i++) {
		var produtoNome = listaDeProdutos.children[i].getAttribute("data-nome").toLowerCase();

		if (produtoNome.includes(buscaValue)) {
			listaDeProdutos.children[i].style.display = "block";
		} else {
			listaDeProdutos.children[i].style.display = "none";
		}
	}
})
