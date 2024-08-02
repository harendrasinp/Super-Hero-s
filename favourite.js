const cardFram=document.querySelector(".card-fram");
let dataArray=[];
for(let i=0; i<localStorage.length;i++){
    const key=localStorage.key(i);
    const value=localStorage.getItem(key)
     const allData=JSON.parse(value);
     dataArray.push(allData)
     
    }
    dataArray.forEach(element=>{
    const im=element["thumbnail"].path;
    const ext=element["thumbnail"].extension;
    const heroId=element["id"];
    const heroName=element["name"];
    const heroComics=element["comics"].available;

    const cards=document.createElement("div");
    cards.classList.add("card");
    cards.innerHTML=`
                        <img src="${im}.${ext}" alt="">`
        cardFram.append(cards);
})




