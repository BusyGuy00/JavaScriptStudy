//html요소
const shortleftElem = document.querySelector("#short-left");
const comScoreElem = document.querySelector("#computer-score");
const userScoreElem = document.querySelector("#user-score");
const textElem = document.querySelector("#text");
const comBtn = document.querySelector(".btn-computer");
const userBtn = document.querySelectorAll(".btn-user");

//변수설정
//컴퓨터 점수, 사람점수, 남은 슛 횟수
let comScore = 0;
let userScore = 0;
let shortLeft = 5;
//남은 횟수
let isComputerTurn = true;


//컴퓨터가 먼저 슛을 한다.
//2점 슛인지 3점슛인지 랜덤으로 결정
//2점슛 50%확률로 성곡 3점슛은 30%확률로 성공

//컴퓨터가 슛을 할 때 동작하는 함수
function onComputerShoot() {
    let shootType = Math.random() > 0.5 ? 2 : 3;
    //삼항연산자
    //50프로 확률

    //2점일때 이렇게 하고 3점일때 이렇게 해
    if(shootType==2) {
        //50프로 확률로 성공
        //성공했을 때 글자를 변경하고 컴퓨터 점수도 업데이트
        if(Math.random() < 0.5) {
            comScore = comScore + 2;
            comScoreElem.innerHTML = comScore;
            textElem.innerHTML = "컴퓨터가 2점슛을 성공했습니다.";
        }
        else {
             //실패하면 글자만 변경
             textElem.innerHTML = "실패했습니다.";
        }
       
    }else{
        //30프로 확률로 성공
         //2점일때 이렇게 하고 3점일때 이렇게 해
        if(Math.random() < 0.3) {
            comScore = comScore + 3;
            comScoreElem.innerHTML = comScore;
            textElem.innerHTML = "컴퓨터가 3점슛을 성공했습니다.";
        }
        else {
             //실패하면 글자만 변경
             textElem.innerHTML = "실패했습니다.";
        }
    }
    isComputerTurn = false;
    comBtn.disabled = true;
    userBtn.forEach(btn => {
        btn.disabled = false;
    })
}
comBtn.addEventListener("click", onComputerShoot);