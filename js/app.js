
const cardRow = document.querySelector('.card-row');


class UI{

    spinCard(item){
        if(item.classList.contains('card-link')){
            const mainCard =  item.parentElement.parentElement;
            const face_1 = item.parentElement;
            const face_2 = item.parentElement.nextElementSibling;

            mainCard.classList.toggle('spin-3d');
            face_1.style.display = 'none';
            face_2.style.display = 'block';
            
            

        }
    }

    returnSpin(item){
        if(item.classList.contains('new-link')){
            const mainCard = item.parentElement.parentElement;
            const face_2 = item.parentElement;
            const face_1 = item.parentElement.previousElementSibling;
        

            mainCard.classList.toggle('spin-3d');
            face_2.style.display = 'none';
            face_1.style.display = 'block';
        }
    }
}





cardRow.addEventListener('click', (e) => {
    const ui = new UI;
    ui.spinCard(e.target.parentElement);
    ui.returnSpin(e.target.parentElement);

 e.preventDefault();
})



















// document.querySelectorAll('.card-link')[0].addEventListener('click', function (e) {
//     const item = this.parentNode.parentNode;
//     console.log(item);
//     card[0].classList.toggle('spin-3d');

//     if(document.querySelector('.card-link')){
//         card[0].replaceChild(newSide[0], cardBody[0]);
//         newSide[0].style.display = 'block';
//     }
//     function returnClick(e){
//         card[0].replaceChild(cardBody[0], newSide[0]);
//         card[0].classList.toggle('spin-3d');
//         newSide[0].style.display = 'block';
//         e.preventDefault();
//     }

//     let newlink = document.querySelectorAll('#new-link');
//     newlink[0].addEventListener('click', returnClick);
//     e.preventDefault();
// }) 


// document.querySelectorAll('.card-link')[1].addEventListener('click', function (e) {
//     const item = this.parentNode.parentNode;
//     console.log(item);
//     card[1].classList.toggle('spin-3d');

//     if(document.querySelector('.card-link')){
//         card[1].replaceChild(newSide[1], cardBody[1]);
//         newSide[1].style.display = 'block';
//     }
//     function returnClick(e){
//         card[1].replaceChild(cardBody[1], newSide[1]);
//         card[1].classList.toggle('spin-3d');
//         newSide[1].style.display = 'block';
//         e.preventDefault();
//     }

//     let newlink = document.querySelectorAll('#new-link');
//     newlink[1].addEventListener('click', returnClick);
//     e.preventDefault();
// })  

// document.querySelectorAll('.card-link')[2].addEventListener('click', function (e) {
//     const item = this.parentNode.parentNode;
//     console.log(item);
//     card[2].classList.toggle('spin-3d');

//     if(document.querySelector('.card-link')){
//         card[2].replaceChild(newSide[2], cardBody[2]);
//         newSide[2].style.display = 'block';
//     }
//     function returnClick(e){
//         card[2].replaceChild(cardBody[2], newSide[2]);
//         card[2].classList.toggle('spin-3d');
//         newSide[2].style.display = 'block';
//         e.preventDefault();
//     }

//     let newlink = document.querySelectorAll('#new-link');
//     newlink[2].addEventListener('click', returnClick);
//     e.preventDefault()
// }) 



