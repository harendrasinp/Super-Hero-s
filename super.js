const userInput=document.querySelector("#user-input");
const btn=document.querySelector("#btn");
const msg=document.querySelector("#under-con");
const imgs=document.querySelector("#images");


userInput.addEventListener("input",()=>callServer(userInput.value));
btn.addEventListener("click",callServer);
async function callServer(hname){
    imgs.innerHTML=``;
    console.log(hname);
    const heroName= await fetch(`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${hname}&apikey=9ab871748d83ae2eb5527ffd69e034de&hash=d35377547e551cd64a60657d2517bb7f?ts=1`)
    let jsonName=await heroName.json();
    const heros=jsonName["data"]["results"];
    loopfunction(heros);
};

function loopfunction(heros){
  heros.forEach(element => {
      console.log(element);
      const heroName=element["name"];
      const im=element["thumbnail"].path;
      const ext=element["thumbnail"].extension;

    // --------------main-div----------------------------------
      const mainDiv=document.createElement("div");
      mainDiv.classList.add("main-div");
    // --------------image-div---------------------------------
      const imgDiv=document.createElement("div");
      imgDiv.classList.add("img-div");
      imgDiv.innerHTML=`<img src="${im}.${ext}" alt="">`
    // --------------name-div---------------------------------
    const namDiv=document.createElement("div");
    namDiv.classList.add("name-div");
    namDiv.innerHTML=`Name: ${heroName}`;
    // 
    // ----------------------------------------------------------
      mainDiv.append(imgDiv);
      imgs.append(mainDiv);
      mainDiv.append(namDiv)
      
  });
}
        

