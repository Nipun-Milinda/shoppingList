
// get add button content
// let listName = document.

// select add list button
const addList = document.querySelector('.add_newlist_btn');
const listList = document.querySelector('.newList');
// add event listner to add List botton
listList.innerHTML = "";

addList.addEventListener('click', ()=>{
    inputDataField();
})

function inputDataField(){
    let itemN = prompt("Enter List Name :" , "");
    let msg = itemN;
    if(msg != null || msg != ""){
        newList(msg);
    }
    // document.querySelector(".title").innerHTML = msg;
}

// create item list

function newListEle(id){
    let dataname = localStorage.getItem(id);
    let elemn = `<li><input type="checkbox" class="list-check">${dataname}</li>`;
    listList.innerHTML += elemn;
}

// add list function

function newList(msg){
    const dataList = [];
    const listObj = {
        id: Math.floor(Math.random()*100000),
        name:`${msg}`
    };
    const ListEle = newListEle(listObj.id,listObj.name);
    dataList.push(listObj);
    console.log(dataList);

    saveListData(dataList);

}

function saveListData(dataList){
    let val = dataList[0].id.toString();
    let nameL = dataList[0].name.toString();

    localStorage.setItem(val,nameL);
    // document.querySelector(".title").innerHTML = localStorage.getItem(val);
    newListEle(dataList[0].id);
    // console.log(nameL);
}