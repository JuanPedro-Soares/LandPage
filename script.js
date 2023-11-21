function ativar() {
    let tempo = 0;
    const textos = document.querySelectorAll('.textos');
    const radiobutton = document.querySelectorAll('input[type="radio"]');
    let currentIndex = 0;
    radiobutton[currentIndex].checked = true;
  
    function alternarAtivo() {
      textos[currentIndex].classList.remove('ativo');
      radiobutton[currentIndex].checked = false;
      currentIndex = (currentIndex + 1) % textos.length;
      radiobutton[currentIndex].checked = true;
      textos[currentIndex].classList.add('ativo');
    }

    radiobutton.forEach((radio, index) => {
      radio.addEventListener('click', () => {
        if (index !== currentIndex) {
          textos[currentIndex].classList.remove('ativo');
          radiobutton[currentIndex].checked = false;
          currentIndex = index;
          radiobutton[currentIndex].checked = true;
          textos[currentIndex].classList.add('ativo');
          clearInterval(tempo);
          tempo = setInterval(alternarAtivo, 4000)
        }
    });
    });
    
    tempo = setInterval(alternarAtivo, 4000);
  }
  
  ativar();
  function carrosel() {
    const controls = document.querySelectorAll('.control');
    const items = document.querySelectorAll('.item');
    const maxItems = items.length;
    items[0].classList.add('current-item');
  

    let currentIndex = 0;
  
    controls.forEach(control => {
      control.addEventListener('click', () => {
        const isLeft = control.classList.contains('arrow-left');
        currentIndex = isLeft ? (currentIndex - 1 + maxItems) % maxItems : (currentIndex + 1) % maxItems;
  
        items.forEach(item => item.classList.remove('current-item'));
        items[currentIndex].classList.add('current-item');
        items[currentIndex].scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center',
        });
      });
    });
  }
  
  
  
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
    
    
document.addEventListener('DOMContentLoaded', carrosel);
accordeon();
ativar();