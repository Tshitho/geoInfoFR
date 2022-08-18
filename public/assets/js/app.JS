// animation scrolle
class ParallaxScroll {
	static initialize() {
  	let root = document.getElementById('root');
	if(root)
  	   root.addEventListener('scroll', ParallaxScroll._event);
  }

	static _event(event) {
  	let section1 = document.querySelector('.section--1');
  	let section2 = document.querySelector('.section--2');
    let sectionBounds1 = section1.getBoundingClientRect();
  	let sectionBounds2 = section2.getBoundingClientRect();
    let sectionContent1 = section1.children[0];
  	let sectionContent2 = section2.children[0];

		if (-sectionBounds1.top >= 0 && -sectionBounds1.top <= sectionBounds1.height) {
  		section1.style.backgroundPosition = '0 ' + (sectionBounds1.top / 2) + 'px';
      sectionContent1.style.opacity = 1 - (-(Math.floor(sectionBounds1.top / sectionBounds1.height * 100) / 100) * 2);
  	} else if (-sectionBounds2.top >= 0 && -sectionBounds2.top <= sectionBounds2.height) {
  		section2.style.backgroundPosition = '0 ' + (sectionBounds2.top / 2) + 'px';
      sectionContent2.style.opacity = 1 - (-(Math.floor(sectionBounds2.top / sectionBounds2.height * 100) / 100) * 2);
  	}
  }
}

ParallaxScroll.initialize();

// didacticiel
const body=document.querySelector("#body_card_container")
if(body){
    const btnInteractiv=document.querySelector(".btn-ineractif");
    btnInteractiv.textContent="début"
    const act0=document.querySelector(".action0");
    act0.addEventListener('click',(event)=>{
        btnInteractiv.textContent=""
        btnInteractiv.textContent="suivant"
        removeAndAddClass1(document.querySelector("#sous-titre > div.st0"),document.querySelector("#sous-titre > div.st1"),"hidden-st" )
        const arrowPrev=document.querySelector("#arrow-prev>img")
        removeAndAddClass1(arrowPrev,body,"card_body_active")
        arrowPrev.classList.add("card_body_active")
        removeAndAddClass(act0,act0,"action0", "action1")
        putToolTip(arrowPrev,document.querySelector("#sous-titre > div.st1"),0)
        const act1=document.querySelector(".action1");

        act1.addEventListener('click',(event)=>{
            removeAndAddClass1(document.querySelector("#sous-titre > div.st1"),document.querySelector("#sous-titre > div.st2"),"hidden-st")
            const arrowNext=document.querySelector("#arrow-next>img")
            putToolTip(arrowNext,document.querySelector("#sous-titre > div.st2"),1)
            removeAndAddClass1(arrowNext, arrowPrev,"card_body_active")
            removeAndAddClass(act1,act1,"action1", "action2")
            const act2=document.querySelector(".action2");
            act2.addEventListener('click',(event)=>{
                const exampleCard= document.querySelector("#card_1")
                exampleCard.onclick=()=>{
                    alert("pop up")
                }
                removeAndAddClass1(exampleCard, arrowNext,"card_body_active")
                exampleCard.style="transform: scale(1.1);"
                document.querySelector("#card_2").style="transform: scale(0.7);"
                document.querySelector("#card_3").style="transform: scale(0.7);"
				document.querySelector("#card_4").style="transform: scale(0.7);"
                document.querySelector("#card_5").style="transform: scale(0.7);"
                removeAndAddClass1(document.querySelector("#sous-titre > div.st2"),document.querySelector("#sous-titre > div.st3"),"hidden-st")
                putToolTip(exampleCard,document.querySelector("#sous-titre > div.st3"),2)
                removeAndAddClass(act2,act2,"action2", "action3")
                const act3=document.querySelector(".action3")
                act3.addEventListener("click",(event)=>{
                    exampleCard.style="transform: none;"
                    document.querySelector("#card_2").style="transform: none;"
                    document.querySelector("#card_3").style="transform: none;" 
					document.querySelector("#card_4").style="transform: none;"
                    document.querySelector("#card_5").style="transform: none;" 
                    const stars=document.querySelector("#card_1 > div.card_footer >.stars") 
                    stars.style="transform: scale(1.5);"
                    removeAndAddClass1(stars, exampleCard,"card_body_active")   
                    removeAndAddClass1(document.querySelector("#sous-titre > div.st3"),document.querySelector("#sous-titre > div.st4"),"hidden-st")
                    removeAndAddClass(act3,act3,"action3", "action4")
                    putToolTip(stars,document.querySelector("#sous-titre > div.st4"),3)
                    const act4=document.querySelector(".action4")
                    act4.addEventListener("click",(event)=>{
                        stars.style="transform: none;"
                        const nom=document.querySelector("#card_1 > div.card_footer > .nom")
                        nom.style="transform: scale(1.5);"
                        removeAndAddClass1(nom, stars,"card_body_active")   
                        removeAndAddClass1(document.querySelector("#sous-titre > div.st4"),document.querySelector("#sous-titre > div.st5"),"hidden-st")
                        removeAndAddClass(act4,act4,"action4", "action5")
                        putToolTip(nom,document.querySelector("#sous-titre > div.st5"),4)
                        const act5=document.querySelector(".action5")
                        act4.addEventListener("click",(event)=>{
                            nom.style="transform: none;"
                            const note=document.querySelector("#card_1 > div.card_footer > .note")
                            note.style="transform: scale(1.5);"
                            removeAndAddClass1(note, nom,"card_body_active")   
                            removeAndAddClass1(document.querySelector("#sous-titre > div.st5"),document.querySelector("#sous-titre > div.st6"),"hidden-st")
                            removeAndAddClass(act4,act4,"action5", "action6")
                            putToolTip(note,document.querySelector("#sous-titre > div.st6"),5)
                            btnInteractiv.textContent=""
                            btnInteractiv.textContent="Lancez vous maintenant!"
                            const act6=document.querySelector(".action6")

                        });
                    });
                });
            });
           
        });
    });
    
}


function removeAndAddClass1(element1, element2, className){
   element2.classList.remove(className)
   element1.classList.add(className)
}
function removeAndAddClass(element1, element2, className,className1){
    element2.classList.remove(className)
    element1.classList.add(className1)
 }
 function putToolTip(element, tooltip,actionNum){
    const clientRect=element.getBoundingClientRect()
    const offset=10
    const styleElem = document.head.appendChild(document.createElement("style"));

    switch(actionNum){
        case 0:{
            tooltip.style.top=(clientRect.top +(clientRect.height) - offset)+'px'
            tooltip.style.left=((clientRect.left+clientRect.width)+offset)+'px'
            styleElem.innerHTML = ".up-arrow:before {border-right-color:#009999;    border-bottom-color: transparent;left:-20px;top:10px; }";
            break;
        }
        case 1:{
            tooltip.style.top=((clientRect.top + clientRect.height)+(offset*2))+'px'
            tooltip.style.left=(clientRect.left)+'px'
            styleElem.innerHTML = ".up-arrow:before {border-right-color:transparent;border-bottom-color:#009999; left:20px;bottom:120%;top:-20px }";

            break;
        }
        case 2:{
            tooltip.style.top=(clientRect.top + offset)+'px'
            tooltip.style.left=((clientRect.left+clientRect.width)+offset)+'px'
            styleElem.innerHTML = ".up-arrow:before {border-right-color:#009999;    border-bottom-color: transparent;left:-20px;top:7px; }";

            break;
        }
        case 3:{
            tooltip.style.top=(clientRect.top + offset)+'px'
            tooltip.style.left=((clientRect.left+clientRect.width)+offset)+'px'
            break;
        }
        case 4:{
            tooltip.style.top=(clientRect.top + offset)+'px'
            tooltip.style.left=((clientRect.left+clientRect.width)+offset)+'px'

            break;
        }
        case 5:{
            tooltip.style.top=(clientRect.top + offset)+'px'
            tooltip.style.left=((clientRect.left+clientRect.width)+offset)+'px'
            break;
        }
    }
}

