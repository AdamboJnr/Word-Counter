

const p = document.querySelector(".words");

document.querySelector(".count").addEventListener("click", () => {
    const textArea = document.querySelector("textarea").value;
    let count = 1;
    for(let i = 0; i < textArea.length; i++){
        if(textArea[i] === " "){
            count += 1;
        }
    }
    p.textContent = `You have written ${count} words`;
})