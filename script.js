//DOM Manipulation

let ul = document.querySelector('.ul');



console.log(ul.parentNode.parentNode);
console.log(ul.parentElement.parentNode);
console.log(ul.parentNode.parentElement);

let li = document.querySelector('.list-items');

for (let index = 0; index < li.length; index++) {
    li[index].style.backgroundColor = 'blue';
    
}

//let li = li.innerText;



