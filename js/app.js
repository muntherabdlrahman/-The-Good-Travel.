'use strict';


let form=document.getElementById('form');
let theContainer=document.getElementById('container');


let allPlaces=[];


function Places(nameplace, tripplace, transport  ){
    this.nameplace=nameplace;
    this.tripplace=tripplace;
    this.transport=transport;
    


    Places.push(this);
    Places.allPlaces.push(this);
    this.render();
    
}


Places.prototype.images = function() {
    if (nameplace=== HAWAII ){
        img.setAttribute('img/HAWAII.jpg')
    }else if(nameplace===LONDON){
        img.setAttribute('img/LONDON.png')
    }else if(nameplace===PARIS){
        img.setAttribute('img/PARIS.png')
    }else if(nameplace===ITALY){
        img.setAttribute('img/ITALY.png')

    }else if(nameplace===SLOVAKIA){
        img.setAttribute('img/SLOVAKIA.png')

    }else {
        img.setAttribute('img/MALAYSIA.png')
    }

    submiter();
}






form.addEventListener('submit', submitter);

function submitter(event){
    event.preventDefault();
    let newPlace=event.target.nameplace.value;
    let newTrip=event.target.tripplace.value;
    let newTrans=event.target.transport.value;


    newTravel= new Places(newPlace,newTrip,newTrans);

    saveTolocal();
 form.reset();

}
submitter();

Places.prototype.render=function(){

let para= document.createElement('p');
theContainer.appendChild(para)
// console.log(theContainer,'dfsfs');

para.textContent=`Place Name  ${nameplace}`;

let para1= document.createElement('p');
theContainer.appendChild(para1)
// console.log(theContainer,'dfsfs');

para1.textContent=`Trip Place ${tripplace}`;


let para2= document.createElement('p');
theContainer.appendChild(para2)
// console.log(theContainer,'dfsfs');

para2.textContent=`Type of Transport ${transport }`;


let img= document.createElement('img');
theContainer.appendChild(img);
img.setAttribute= images();

}


function saveTolocal(){
    let stringefieldinputall= JSON.stringify(allPlaces);
    localStorage.setItem('keyinputAll', stringefieldinputall);
}


function checkLocalstorage(){
    if(localStorage.keyinputAll){
        let recoverinputAllstorage= localStorage.getItem('keyinputAll');
        let newParesed= JSON.PARIS(recoverinputAllstorage);
        allPlaces= newParesed;

      render();
    }

}

checkLocalstorage();