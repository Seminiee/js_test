// let monsterHealthInput;
//let playerHealthInput;
//let monsterMaxHealth = monsterHealthInput;
//let playerMaxHealth = playerHealthInput;

const ATTACK_VALUE = 10; //하드 코딩된(문자열이나 숫자 값) 전역값의 이름은 대문자로 하는 것이 일반적 

let chosenMaxLife = 100; //나중에는 유저가 정하기 때문에 변수로 설정함
let currentMonsterHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackHandler() { //어떤 함수가 EventListner 함수에 영향을 주는지(EventListner를 가리키는지) 확인하는 명명규칙 ~Handler()
    const damage = dealMonsterDamage(ATTACK_VALUE);
    currentMonsterHealth -= damage;
}
attackBtn.addEventListener('click',attackHandler) //attackBtn은 하드코딩X -> HTML 코드의 일부를 참조하므로 이름이 소문자