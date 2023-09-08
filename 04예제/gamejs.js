//html요소 
const shortleftElem = document.querySelector("#short-left");
const comScoreElem = document.querySelector("#computer-score");
const userScoreElem = document.querySelector("#user-score");
const textElem = document.querySelector("#text");
const comBtn = document.querySelector(".btn-computer")
const userBtn = document.querySelectorAll(".btn-user")

//변수 설정 
//컴퓨터 점수, 사람점수, 남은 슛 점수

let comScore = 0;
let userScore = 0;
let shortleft = 5;
let isComputerTurn = true;

//컴퓨터가 먼저 슛을 한다 
//2점 슛인지 3점 슛인지 랜덤으로 결정 
//2점슛 50% 확률로 성공 3점슛 30%확률로 성공 
//컴퓨터가 슛을 할때 동작하는 함수 
shortleftElem.innerHTML = shortleft;
function onComputerShoot(){
    let shootType = Math.random() > 0.5 ? 2 : 3 ; 
    if(shootType==2){
        //50%의 확률로 성공 
        //성공 했을때 글자를 변경 컴퓨터 점수도 업데이트
        if(Math.random()<0.5){
            //컴 스코어의 이전 점수도 같이 더해서 값을 줘
            comScore = comScore + 2;
            comScoreElem.innerHTML = comScore;
            textElem.innerHTML = "컴퓨터가 2점슛울 성공했습니다.";
        }else{
            textElem.innerHTML = "컴퓨터가 2점슛을 실패 했습니다.했습니다.";
        }
    }else{
        //30%의 확률로 성공
        if(Math.random()<0.3){
            //컴 스코어의 이전 점수도 같이 더해서 값을 줘
            comScore = comScore + 3;
            comScoreElem.innerHTML = comScore;
            textElem.innerHTML = "컴퓨터가 3점슛울 성공했습니다.";
        }
        else{
            textElem.innerHTML = "컴퓨터가 3점슛을 실패 했습니다.했습니다.";
        }
    }
    isComputerTurn = false;
    comBtn.disabled = true;
    userBtn.forEach(btn=>{
        btn.disabled = false;
    })

}
//유저가 2점슛을 클릭 했을때 실행되는 함수 
function onUserShoot2(num){
    let ran = num == 2 ? 0.5 : 0.3;
    if(Math.random()<ran){
        userScore =userScore + num;
        userScoreElem.innerHTML = userScore;
        textElem.innerHTML = "사용자가 "+num+"점슛에 성공 했습니다."
    }else {
        textElem.innerHTML = "사용자가 "+num+"점슛에 실패 했습니다."
    }
    //유저의 행동이 끝나면 남은 슛 횟수가 1씩 줄어야 한다. 
    shortleft = shortleft-1;
    shortleftElem.innerHTML = shortleft;
    isComputerTurn=true;
    comBtn.disabled=false;
    userBtn.forEach(btn=>{
        btn.disabled = true;
    })
    if(shortleft==0){
        gameOver()
    }
}
//유저가 3점슛을 클릭 했을때 실행되는 함수 
// function onUserShoot3(){
//     if(Math.random()<0.3){
//         userScore =userScore + 3;
//         userScoreElem.innerHTML = userScore;
//         textElem.innerHTML = "사용자가 3점슛에 성공 했습니다."
//     }else {
//         textElem.innerHTML = "사용자가 3점슛에 실패 했습니다."
//     }
//     //유저의 행동이 끝나면 남은 슛 횟수가 1씩 줄어야 한다. 
//     shortleft = shortleft-1;
//     shortleftElem.innerHTML = shortleft;
//     isComputerTurn=true;
//     comBtn.disabled=false;
//     userBtn.forEach(btn=>{
//         btn.disabled = true;
//     })
//     if(shortleft==0){
//         gameOver()
//     }
// }
function gameOver(){
    if(userScore>comScore){
        textElem.innerHTML = "사용자가 이겼습니다.";
    }else if (userScore == comScore){
        textElem.innerHTML = "비겼습니다."
    }else {
        textElem.innerHTML = "컴이 이겼습니다."
    }
    comBtn.disabled =true;
}
comBtn.addEventListener("click",onComputerShoot)
userBtn[0].addEventListener("click", function(){
    onUserShoot2(2);
})
userBtn[1].addEventListener("click", function(){
    onUserShoot2(3);
})
// userBtn[0].addEventListener("click", onUserShoot2)
// userBtn[1].addEventListener("click", onUserShoot3)