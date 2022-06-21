let shoppingList = ['Carne', 'Latte', 'Pesce', 'Pane', 'Cioccolato', 'Acqua'];

const listElement = document.querySelector("div > ul");

let i = 0;

while (i < shoppingList.length){
    
    listItem = document.createElement('li');
    listItem.innerText = shoppingList[i];
    console.log(listItem);
    listElement.append(listItem);
    i++;
}