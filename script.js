const ulTag=document.querySelector("ul");
let totalpages=20;
function element(totalpages,page)
{
    let liTag = '';
    let activeLi;
    let beforepages = page - 1;
    let afterpages = page + 1;
    if(page>1){
        liTag += `<li class="bth prev" onclick="element(totalpages,${page - 1})"><span><i class="fas fa-angle-left"></i> Prev</span></li>`;
    }
    if(page>2){
        liTag +=`<li class="nums" onclick="element(totalpages,1)"><span>1</span></li>`;
        if(page>3){
            liTag += `<li class="dots"><span>....</span></li>`;
        }
    }
    if(page == totalpages){
        beforepages = beforepages-2;
    }
    else if(page == totalpages-1){
        beforepages = beforepages-1;
    }
    
    if(page == 1){
        afterpages = afterpages+2;
    }
    else if(page == 2){
        afterpages = afterpages+1;
    }



    for(let pageLength=beforepages; pageLength<= afterpages; pageLength++){
        if(pageLength > totalpages){
            continue;
        }
        if(pageLength ==0){
            pageLength = pageLength+1;
        }
        
        if(page == pageLength){
            activeLi = "active";
        }else{
            activeLi="";
        }

        liTag +=`<li class="nums ${activeLi}" onclick="element(totalpages,${pageLength})" ><span>${pageLength}</span></li> `;
    } 
    if(page < totalpages - 1){
        if(page < totalpages - 2){
            liTag += `<li class="dots"><span>....</span></li>`;
        }
        liTag +=`<li class="nums" onclick="element(totalpages,${totalpages})"><span>${totalpages}</span></li>`;
    }

    if(page < totalpages){
        liTag += ` <li class="bth Next"onclick="element(totalpages,${page + 1})"><span>Next <i class="fas fa-angle-right"></i></span></li>`;
    }
    ulTag.innerHTML = liTag;
}
element(totalpages,5);