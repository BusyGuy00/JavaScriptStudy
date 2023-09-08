// let lis = document.querySelectorAll("#menu li")
// console.log("lis")

// let wh = window.innerHeight;
// console.log("wh")

// for(let i=0; i<lis.length; i++){
//     lis[i].addEventListener("clock",function(){
//        window.scrollTo({top:i*wh, behavior:"smooth"})
//     })
// }
// window.addEventListener("scroll",function(){
//     // 스크롤 위치 파악
//     let scrollTop = this.window.screenY;
//     console.log(scrollTop);
//     if(scrollTop >=0 && scrollTop<wh){
//         lis[0].classList.add("on");
//         lis[1].classList.remove("on");
//         lis[2].classList.remove("on");
//         lis[3].classList.remove("on");
//     }
//     if(scrollTop >wh && scrollTop<wh*2){
//         lis[1].classList.add("on");
//         lis[0].classList.remove("on");
//         lis[2].classList.remove("on");
//         lis[3].classList.remove("on");
//     }
//     if(scrollTop >=wh*2 && scrollTop<wh*3){
//         lis[2].classList.add("on");
//         lis[1].classList.remove("on");
//         lis[0].classList.remove("on");
//         lis[3].classList.remove("on");
//     }
//     if(scrollTop >=wh*3 && scrollTop<wh*4){
//         lis[3].classList.add("on");
//         lis[2].classList.remove("on");
//         lis[1].classList.remove("on");
//         lis[0].classList.remove("on");
//     }
// })


//브라우저 높이를 먼저 알아야 한다. 
let winh = window.innerHeight;
// 유사배열(nodelist)로 만들어 준다
const lis = document.querySelectorAll("#menu li")
//lis [li,li,li,li] lis[0], lis[1], lis[2], lis[3] 유사배열로 만들어서 지정이 가능 해졌다 
const sections = document.querySelectorAll("section");

lis[0].classList.add("on")
//li를 클릭하면 스크롤 위치를 해당 섹션이 나타나도록 지정 
lis.forEach((li,index)=>{
    li.addEventListener("click",function(e){
        //기존이벤트 제거 (a태그에 걸려 있는 페이지 이동 이벤트를 먼저 제거 한다.)
        e.preventDefault();
        console.log("여기여기 : "+index*winh)
        //스크롤 위치 이동 방법 
        //li와 인덱스를 같이 구해서 wunh의 배수로 설정 해서 클릭 이벤트를 만들어 준다.
        window.scrollTo({top:index*winh, behavior:"smooth"})
    })
})

//스크롤 이벤트 
window.addEventListener("scroll",function(){
    //스크롤 값 
    //소수점 올림을 해서 보기 편하게 바꿔준다.
    let sct = Math.ceil( this.document.documentElement.scrollTop)+1;
    console.log(sct);
    // if(sct>=0 && sct<1000){
    //     lis[1].classList.add("on")
    // }
    // if(sct>=1000 && sct<2000){
    //     lis[1].classList.add("on");

    // }
    // if(sct>=2000 && sct<3000){
    //     lis[1].classList.add("on");
        
    // }
    // if(sct>=3000 && sct<4000){
    //     lis[1].classList.add("on");
        
    // }
    // 위와 같이 해줄 수있지만 결국은 i가 1씩 상승 하는 조건이기 떄문에 for문을 사용 할 수 있다.
    for(let i=0 ; i<lis.length; i++){
        if(sct>=i*winh && sct < (i+1)*winh){
            lis.forEach(li=> li.classList.remove("on"))
            lis[i].classList.add("on")
        }
    }
})
sections[0].addEventListener("mousemove",function(e){
    let x = e.pageX;
    let y = e.pageY;
    console.log(x);
    console.log(y);
    document.querySelector(".img11").style.right = 20+(x/30)+"px";
    document.querySelector(".img12").style.right = 20-(x/30)+"px";
    document.querySelector(".img13").style.right = 20+(x/30)+"px";
})
sections[1].addEventListener("mousemove",function(e){
    let x = e.pageX;
    let y = e.pageY;
    document.querySelector(".img21").style.right = 30+(x/30)+"px";
    document.querySelector(".img22").style.right = 30-(x/30)+"px";
})

sections[2].addEventListener("mousemove",function(e){
    let x = e.pageX;
    let y = e.pageY;
    document.querySelector(".img31").style.right = 30+(x/30)+"px";
    document.querySelector(".img32").style.right = 30-(x/30)+"px";
    document.querySelector(".img33").style.right = 30+(x/30)+"px";
})
sections[3].addEventListener("mousemove",function(e){
    let x = e.pageX;
    let y = e.pageY;
    document.querySelector(".img41").style.right = 30+(x/30)+"px";
    document.querySelector(".img42").style.right = 30-(x/30)+"px";
})