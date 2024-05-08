// let monsterHealthInput;
//let playerHealthInput;
//let monsterMaxHealth = monsterHealthInput;
//let playerMaxHealth = playerHealthInput;

const ATTACK_VALUE = 10; //하드 코딩된(문자열이나 숫자 값) 전역값의 이름은 대문자로 하는 것이 일반적 
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

let chosenMaxLife = 100; //나중에는 유저가 정하기 때문에 변수로 설정함
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function endRound() {
    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert('You won!');
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert('You lost!');
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
        alert('You have a draw!');
    }
}

function attackMonster(mode) { //EventHandler에 직접적으로 연결되는 함수가 아니기 때문에 Handler는 붙이지 않음.
    let maxDamage;
    if (mode === "ATTACK") {
        maxDamage = ATTACK_VALUE;
    } else if (mode === "STRONG_ATTACK") {
        maxDamage = STRONG_ATTACK_VALUE;
    }
    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damage;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;
    endRound();
}

function attackHandler() { //어떤 함수가 EventListner 함수에 영향을 주는지(EventListner를 가리키는지) 확인하는 명명규칙 ~Handler()
    attackMonster('ATTACK');
}
function strongAttackHandler() {
    attackMonster('STRONG_ATTACK');
}

function healPlayerHandler() {
    let healValue;
    if (currentPlayerHealth >=  chosenMaxLife - HEAL_VALUE) {
        alert("You can't heal to more than your max initial health.");
        healValue = chosenMaxLife - currentPlayerHealth;
    } else {
        healValue = HEAL_VALUE;
    }
    increasePlayerHealth(healValue);
    currentPlayerHealth += healValue;
    endRound();
}

attackBtn.addEventListener('click',attackHandler); //attackBtn은 하드코딩X -> HTML 코드의 일부를 참조하므로 이름이 소문자
strongAttackBtn.addEventListener('click',strongAttackHandler);
healBtn.addEventListener('click',healPlayerHandler);