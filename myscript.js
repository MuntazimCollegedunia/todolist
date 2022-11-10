function msg(){
    if(document.getElementById('inputField').value.length==0){
        alert("Please Enter Task Name First!");
    }
    else{
        document.getElementById('tasks').innerHTML += `
        <div class="task">
            <input type="checkbox" id="checkbox" class="checkbox">
            <span>
                ${document.getElementById('inputField').value}
            </span>
            <button class="delete">
                <i class="fa fa-trash-o" style="font-size:20px"></i>
            </button>
        </div>
        `;

        document.getElementById('inputField').value="";
        
        let deleteTask = document.querySelectorAll('.delete');
        for(let i=0; i<deleteTask.length; i++){
            deleteTask[i].onclick = function(){
                this.parentNode.remove();
            }
        }

        let checkBox = document.querySelectorAll('.checkbox');
        let taskText = document.querySelectorAll('.task span');
        let taskBack = document.querySelectorAll('.task');
        for(let i=0; i<checkBox.length; i++){
            checkBox[i].onclick = function(){
                if(checkBox[i].checked){
                    taskText[i].style.textDecoration= "line-through";
                    taskBack[i].style.background= "red";
                    checkBox[i].disabled=true;
                }
            }
        }

    }
}
