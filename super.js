const userInput=document.querySelector("#user-input");
const btn=document.querySelector("#btn");
const imgesection=document.querySelector("#images");

userInput.addEventListener("input",()=>callServer(userInput.value));
btn.addEventListener("click",()=>{
  callServer(userInput.value)
});

async function callServer(hname){
  imgesection.innerHTML=``;
    console.log(hname);
    const heroName= await fetch(`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${hname}&apikey=9ab871748d83ae2eb5527ffd69e034de&hash=d35377547e551cd64a60657d2517bb7f?ts=1`)
    let jsonName=await heroName.json();
    const heros=jsonName["data"]["results"];
    loopfunction(heros);
};

function loopfunction(heros){
  heros.forEach(element => {
      console.log(element);
      const im=element["thumbnail"].path;
      const ext=element["thumbnail"].extension;
      const heroId=element["id"];
      const heroName=element["name"];
      const heroComics=element["comics"].available;

      const mainFram=document.createElement("div");
      mainFram.classList.add("main-fram");

      mainFram.innerHTML=`<img src="${im}.${ext}" alt="" id="img-fram">
                                            <div id="detail-div">
                                              <div class="h-id">Id: ${heroId}</div>
                                              <div class="h-name">Name: ${nameSize(heroName)}</div>
                                              <div class="h-comics">Comics: ${heroComics}</div>
                                            </div>
                                                <div id="btn-div">
                                                     <button type="submit" class="add-btn">Add to Favourite</button>
                                                </div>`
      imgesection.append(mainFram)
  });
}
function nameSize(name){
     return result=name.substring(0,12)
}
        

