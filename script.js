function ativar(){
const textos = document.querySelectorAll('.textos');
let currentIndex = 0;

function alternarAtivo() {
    textos[currentIndex].classList.remove('ativo');
    currentIndex = (currentIndex + 1);
    if(currentIndex===3){
        currentIndex=0;
    }
    textos[currentIndex].classList.add('ativo');
}

setInterval(alternarAtivo, 4000);
}
const controls = document.querySelectorAll('.control');

let currentIndex = 1;
const items = document.querySelectorAll('.item');
const maxitens = items.length;

controls.forEach(control =>{
    control.addEventListener('click',()=>{
        const isLeft = control.classList.contains('arrow-left');
         if(isLeft){
            currentIndex-= 1
         }
         else{
            currentIndex+=1
         }
         if(currentIndex>=maxitens){
            currentIndex=0;        
         }
         if(currentIndex<0){
            currentIndex= maxitens-1;
         }

        items.forEach(item => item.classList.remove('current-item'))

        items[currentIndex].classList.add('current-item')

        items[currentIndex].scrollIntoView({
            inline:"center",
            behavior: "smooth",
            block: 'nearest',
        })

        
    })
})
function accordeon(){
    const accordion = document.querySelectorAll('.js-accordion dt');
    const resposta =document.querySelectorAll('.js-accordion dd');
  
    
    function dartoggle(index){
     resposta[index].classList.toggle('ativo');
     accordion[index].classList.toggle('ativado');
    };
    
    accordion.forEach((item , index) =>{
      item.addEventListener('click',()=>{
        dartoggle(index)
      })
    });
    
    }


accordeon();
ativar();