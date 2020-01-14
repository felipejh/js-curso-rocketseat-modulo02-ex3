var nomes = ["Diego", "Gabriel", "Lucas"];

var listElement = document.createElement("ul");
var body = document.body;

function adicionaItem() {

    for (nome of nomes) {
        var itemListElement = document.createElement("li");
        var textNome = document.createTextNode(nome);

        itemListElement.appendChild(textNome);
        listElement.appendChild(itemListElement);
    }
}

adicionaItem();
body.appendChild(listElement);