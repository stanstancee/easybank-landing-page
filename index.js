

let ulA = document.querySelectorAll("ul a")
ulA.forEach(element =>{
    element.addEventListener("mouseover",()=>{
        let div =  document.createElement("div");
        div.setAttribute("class","underline")
        element.appendChild(div);

    })
    element.addEventListener("mouseout",()=>{
       element.removeChild(element.childNodes[1])

    })
})







let op = document.querySelector("#open")
let ul  = document.querySelector("#ul")
let cl = document.querySelector("#close");
let opn = document.querySelector("#open-close");


opn.addEventListener("click", ()=>{ 
  if(ul.classList.contains("hide")){
      ul.classList.remove("hide");
      cl.classList.remove("hide");
      op.classList.add("hide");
      document.getElementById("next").style.margin="100px 0 20px";
  }
  else{
    ul.classList.add("hide");
    cl.classList.add("hide");
    op.classList.remove("hide");
    document.getElementById("next").style.margin="350px 0 20px";
  }
})

