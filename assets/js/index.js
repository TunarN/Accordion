const acc_btns = document.querySelectorAll(".accordion-header");
const acc_contents = document.querySelectorAll(".accordion-body");

acc_btns.forEach((btn)=>{
btn.addEventListener("click",(e)=>{

    acc_contents.forEach((accordion)=>{
        if (e.target.nextElementSibling !== accordion && accordion.classList.contains ("active")) {
            accordion.classList.remove("active")
            acc_btns.forEach((btn)=> btn.classList.remove("active"));
        }
    })
     
    const platform = btn.nextElementSibling;

    platform.classList.toggle("active");

    btn.classList.toggle("active");
})
});

window.onclick = (e)=>{
    if(!e.target.matches(".accordion-header")){
        acc_btns.forEach((btn)=> btn.classList.remove("active"));
        acc_contents.forEach((accordion)=> accordion.classList.remove("active"));
    }
}