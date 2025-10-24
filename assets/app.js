function criaCartao(categoria, pergunta, resposta) {
    // Corrected: Uses proper function syntax (parentheses) and document.getElementById
    let container = document.getElementById('container'); 
    
    // Corrected: Uses proper createElement syntax
    let cartao = document.createElement('article'); 
    cartao.className = 'cartao';
    
    // Corrected: Moves innerHTML assignment inside the function
    // Uses correct class names (double underscores __) and correct element property (innerHTML)
    cartao.innerHTML = `
        <div class="cartao__conteudo">
            <h3>${categoria}</h3>
            <div class="cartao__conteudo__pergunta">
                <p>${pergunta}</p>
            </div>
            <div class="cartao__conteudo__resposta">
                <p>${resposta}</p>
            </div>
        </div>
    `;

    // Added: This essential step inserts the new card into the HTML container
    container.appendChild(cartao);
}