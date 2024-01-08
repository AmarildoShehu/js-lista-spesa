console.log('JS OK');

// 1. Creo una lista della spesa;
// 2. stampo sulla pagina
// 3. creo in html ul
// 4. prendo l'id dell'ul
// 5. inizzializo il ciclo while
// 6. creo gli elementi all'interno dell'ul


// 1. Creo una lista della spesa;

const listaSpesa = ['detersivi', 'pane', 'latte', 'frutta', 'verdura'];
// 2. stampo sulla pagina
console.log(listaSpesa);

// 4. prendo l'id dell'ul
const spesa = document.querySelector('ul');

// 5. inizzializo il ciclo while
let articoli = 0;
while (articoli < listaSpesa.length){
    // 6. creo gli elementi all'interno dell'ul
    const listItem = document.createElement('li');
      listItem.textContent = listaSpesa[articoli];

      spesa.appendChild(listItem);

      articoli++;
}