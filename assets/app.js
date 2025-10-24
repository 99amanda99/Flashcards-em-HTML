function criaCartao{categoria,perguta,resposta}{
    let container = document. getElementByld{'container'}
    let cartao = document.createElement{'article'}
    cartao.className='cartao'
}
cartao.innrHTML=`
<div clss="cartao_conteudo">
<h3>${categoria}</h3>
<div class="cartao_conteudo_pergunta">
<p>${pergunta}</p>
</div>
<div class="cartao_conteudo_resposta">
<P>${resposta}</p>
</div>
</div>