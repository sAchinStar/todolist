addEventListener("DOMContentLoaded",()=>{


    const btn=document.getElementById("inputTask")
    btn.addEventListener("click",()=>{
        var inputText=document.getElementById("inputText")
        const ul=document.querySelector(".list")
        const li=document.createElement("li")
        let label=document.createElement("label")
        const input=document.createElement("input")
        const dbtn=document.createElement("button")
        const ebtn=document.createElement("button")
        const hr=document.createElement("hr")


        dbtn.innerText="Delete"
        ebtn.innerText="Edit"

        label.setAttribute("class","content")
        input.setAttribute("type","checkbox" )
        ebtn.setAttribute("class","edit")
        
        input.style.height="16px"
        input.style.width="27px"

        if (inputText.value===""){
            alert("Enter something")
        }
        else{
        label.innerText=inputText.value
        ul.append(li)
        li.appendChild(label);
        li.appendChild(input);
        li.appendChild(dbtn);
        li.appendChild(ebtn);
        li.appendChild(hr);
        console.log(ul)
        savedata()
        }
    })
    addEventListener("keypress",(event)=>{
        if(event.key==="Enter"){

            var inputText=document.getElementById("inputText")
            const ul=document.querySelector(".list")
            const li=document.createElement("li")
            let label=document.createElement("label")
            const input=document.createElement("input")
            const dbtn=document.createElement("button")
            const ebtn=document.createElement("button")
            
            label.setAttribute("class","content")
            dbtn.innerText="Delete"
            ebtn.innerText="Edit"

            input.setAttribute("type","checkbox")
            input.style.height="16px"
            input.style.width="27px"

            if (inputText.value===""){
                alert("Enter something")
            }
            else{
            label.innerText=inputText.value
            ul.append(li)
            li.appendChild(label);
            li.appendChild(input);
            li.appendChild(dbtn);
            li.appendChild(ebtn);

            console.log(ul)
            savedata()
            }
        }
    
    })
    function savedata(){
        const ul=document.querySelector(".list")

        localStorage.setItem("data",ul.innerHTML)
    }
    const listcontainer=document.getElementById("listcontainer")
    listcontainer.addEventListener("click",(e)=>{
        if(e.target.tagName==="INPUT"){
           var check=e.target.parentElement.classList.toggle("checked");
           savedata()
        }
        else if(e.target.classList.contains("edit")){
            let taskElement=e.target.parentElement.querySelector(".content");
            // console.log(taskElement);
            let currentText=taskElement.innerText
            let newText=prompt("Edit task",currentText);

            // console.log(newText);
            // console.log(newText==null);
            
            if (newText!==currentText && newText!=="" && newText!==null){
                taskElement.innerText=newText;
                console.log(taskElement);
                
                savedata()
            }

        }
        else if(e.target.tagName==="BUTTON"){
    
            e.target.parentElement.remove()
            savedata()
        }
        
    })

    window.onload= ()=>{
        //  localStorage.clear()
        const ul = document.querySelector(".list");
        ul.innerHTML= localStorage.getItem("data")
    }
    
})
