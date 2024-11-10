addEventListener("DOMContentLoaded",()=>{


    const btn=document.getElementById("inputTask")
    btn.addEventListener("click",()=>{
        var inputText=document.getElementById("inputText")
        const ul=document.getElementById("list")
        const li=document.createElement("li")
        const label=document.createElement("label")
        const input=document.createElement("input")
        const dbtn=document.createElement("button")
        const ebtn=document.createElement("button")
        const hr=document.createElement("hr")


        dbtn.innerText="Delete"
        ebtn.innerText="Edit"
        // console.log(typeof dbtn.innerText);
        

        label.setAttribute("class","content")
        input.setAttribute("type","checkbox" )
        dbtn.setAttribute("class","dbtn")
        ebtn.setAttribute("class","ebtn")
        
        input.style.height="16px"
        input.style.width="27px"

        if (inputText.value===""){
            alert("Enter Task")
        }
        else{
        label.innerText=inputText.value
        ul.append(li)
        li.appendChild(label);
        li.appendChild(input);
        li.appendChild(dbtn);
        li.appendChild(ebtn)
        li.appendChild(hr);
        console.log(ul)
        clearText()
        savedata()

        }
    })

    addEventListener("keypress",(e)=>{
        if (e.key==="Enter"){
            var inputText=document.getElementById("inputText")
            const ul=document.getElementById("list")
            const li=document.createElement("li")
            const label=document.createElement("label")
            const input=document.createElement("input")
            const dbtn=document.createElement("button")
            const ebtn=document.createElement("button")
            const hr=document.createElement("hr")
            
            
            dbtn.innerText="Delete"
            ebtn.innerText="Edit"
            // console.log(typeof dbtn.innerText);
            
            
            label.setAttribute("class","content")
            input.setAttribute("type","checkbox" )
            dbtn.setAttribute("class","dbtn")
            ebtn.setAttribute("class","ebtn")
            
            input.style.height="16px"
            input.style.width="27px"
            
            if (inputText.value===""){
                alert("Enter Task")
            }
            else{
                label.innerText=inputText.value
                ul.append(li)
                li.appendChild(label);
                li.appendChild(input);
                li.appendChild(dbtn);
                li.appendChild(ebtn)
                li.appendChild(hr);
                console.log(ul)
                clearText()
                savedata()
                
            }
        }
    })

    // save data function by local storage methods
    function savedata(){
        const ul=document.getElementById("list")
        localStorage.setItem("data",ul.innerHTML)
        
    }
    // clear text
    function clearText(){
        inputText.value=""
    }


    const listcontainer=document.getElementById("listcontainer")
    listcontainer.addEventListener("click",(e)=>{
        
        if(e.target.tagName==="INPUT"){
           var check=e.target.parentElement.classList.toggle("checked");
           savedata()

        }else if (e.target.tagName==="BUTTON" && e.target.classList.contains("ebtn")){
            let label=e.target.parentElement.querySelector(".content")
            // console.log(label);
            let currentText= label.innerText
            // console.log(currentText);
            let newText=prompt("Edit Task",currentText)
            if (newText!=""){
                // console.log(newText);
                label.innerText=newText
                
                savedata()
            }

        }else if(e.target.tagName==="BUTTON" && e.target.classList.contains("dbtn")){
    
            e.target.parentElement.remove()
            savedata()
        }
        
    })

    window.onload= ()=>{
        //  localStorage.clear()
        const ul=document.getElementById("list")
        // console.log(localStorage.getItem("data"));
        
        ul.innerHTML= localStorage.getItem("data")
    }
    
})