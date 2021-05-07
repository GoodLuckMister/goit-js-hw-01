// function includes(array, value) {
 
// let result = false;
//     for (let i = 0; i < array.length; i += 1){
    
//         switch (value) {
//             case array[i]:
//                 result = true;
//                 break;
//        }
          
        
// }
//   return result;
  
// };

// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));
// console.log(includes(['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн'], 'Юпитер'));
// console.log(includes(['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн'], 'Уран'));
// console.log(includes(['яблоко', 'слива', 'груша', 'апельсин'], 'слива'));
// console.log(includes(['яблоко', 'слива', 'груша', 'апельсин'], 'киви'));
// console.log(includes([200, 600, 789, 4098, 1897], 4098));


const nav = document.querySelector(".js-nav");

nav.addEventListener("click", handleNavClick);

function handleNavClick(event) {
  event.preventDefault();
  
  const target = event.target;
  console.log("event target: ", target); // посмотрите что тут

  // Проверяем тип узла, если не ссылка выходим из функции
  if (target.nodeName !== "A") return;

  setActiveLink(target);
}

function setActiveLink(nextActiveLink) {
  const currentActiveLink = nav.querySelector("a.active");

  if (currentActiveLink) {
    currentActiveLink.classList.remove("active");
  }

  nextActiveLink.classList.add("active");
}
