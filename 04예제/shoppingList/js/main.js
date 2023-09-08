// 제이슨 폴더를 받는 방법 
// 인덱스의 위치를 기준으로 받아야 한다
fetch("data/data.json")
    .then(response => response.json())
    .then(data=> {
            displayItems(data.items);
            //원본이 필요해서 넘겨 줘야 한다.
            setEventItems(data.items);
    });

//화면 나타내기 
function displayItems(items) {
    const ul = document.querySelector("#items");
    let str = "";
    str = items.map(item=>{
        return `<li class="item" >
        <img src="${item.image}">
        <span>${item.gender},${item.size}<span>
        </li>`
    }).join("")
    ul.innerHTML = str;
}

//이벤트 설정하기 
function setEventItems(items){
    const btn = document.querySelector("#buttonDiv");
    btn.addEventListener("click",function(e){
        const dataset =e.target.dataset;
        const key = dataset.key;
        const value = dataset.value;
        console.log(dataset);
        console.log(key);
        console.log(value);
        //전체 배열에서 키와 밸류값이 같은 것만 걸러서 새로운 배열로 만든다
        let filtered = items.filter(item=> item[key] === value);
        //화면으로 뿌려준다
        displayItems(filtered);
    })

}
