// let monsterHealthInput;
//let playerHealthInput;
//let monsterMaxHealth = monsterHealthInput;
//let playerMaxHealth = playerHealthInput;

const ATTACK_VALUE = 10; //하드 코딩된(문자열이나 숫자 값) 전역값의 이름은 대문자로 하는 것이 일반적 
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

const MODE_ATTACK = 'ATTACK'; // MODE_ATTACK = 0 also ok
const MODE_STRONG_ATTACK = 'STRONG_ATTACK'; // MODE_STRONG_ATTACK = 1 also ok

const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
const LOG_EVNET_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_EVENT_GAME_OVER = 'GAME_OVER'

const enteredValue = prompt('Maximum life for you and the monster.', '100'); //브라우저의 javascript 내장함수 prompt()

let chosenMaxLife = parseInt(enteredValue); //유저가 MaxLife 직접 설정
let battleLog = [];

if (isNaN(chosenMaxLife) || chosenMaxLife <= 0 ) { //OR연산자는 첫 번째 condition이 참이면 뒤의 Condition은 계산 X
    chosenMaxLife = 100;
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true; // Boolean Variable Naming -> isLoggedIn ... 등

adjustHealthBars(chosenMaxLife);


function writeToLog(ev, val, monsterHealth, playerHealth) { //추가 객체 속성을 설정하는 것이 코드 중복일 수 있으나, 코드 가독성을 위해 남겨놓아야 할 때도 많다.
    let logEntry = {
        event: ev,
        value: val,
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth
    };
    if (ev === LOG_EVENT_PLAYER_ATTACK) {
        logEntry.target = 'MONSTER';
    } else if(ev === LOG_EVENT_PLAYER_STRONG_ATTACK) {
        logEntry = {
            event: ev,
            value: val,
            target: 'MONSTER',
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth
        };
    } else if (ev === LOG_EVNET_MONSTER_ATTACK) {
        logEntry = {
            event: ev,
            value: val,
            target: 'PLAYER',
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth
        };
    } else if (ev === LOG_EVENT_PLAYER_HEAL) {
        logEntry = {
            event: ev,
            value: val,
            target: 'PLAYER',
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth
        };
    } else if (ev === LOG_EVENT_GAME_OVER) {
        logEntry = {
            event: ev,
            value: val,
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth
        };
    }
    battleLog.push(logEntry);
} 

function reset() {
    currentMonsterHealth = chosenMaxLife;
    currentPlayerHealth = chosenMaxLife;
    resetGame(chosenMaxLife);
}

function endRound() {
    const initialPlayerHealth = currentPlayerHealth;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;
    writeToLog(
        LOG_EVNET_MONSTER_ATTACK, 
        playerDamage, 
        currentMonsterHealth, 
        currentPlayerHealth
    );

    if (currentPlayerHealth <=0 && hasBonusLife) {
        hasBonusLife = false;
        removeBonusLife();
        currentPlayerHealth = initialPlayerHealth;
        setPlayerHealth(initialPlayerHealth);
        alert('You would be dead but the bonus life saved you!'); 
    }
    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert('You won!');
        writeToLog (
            LOG_EVENT_GAME_OVER,
            'PLAYER_WON',
            currentMonsterHealth,
            currentPlayerHealth
        )
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert('You lost!');
        writeToLog (
            LOG_EVENT_GAME_OVER,
            'MONSTER_WON',
            currentMonsterHealth,
            currentPlayerHealth
        )
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
        alert('You have a draw!');
        writeToLog (
            LOG_EVENT_GAME_OVER,
            'A DRAW',
            currentMonsterHealth,
            currentPlayerHealth
        )
    }

    if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
        reset();
    }
}

function attackMonster(mode) { //EventHandler에 직접적으로 연결되는 함수가 아니기 때문에 Handler는 붙이지 않음 
    // 코드가 길 때는 명시적으로 if문 사용하는 것이 좋다.
    const maxDamage = mode === MODE_ATTACK ? ATTACK_VALUE : STRONG_ATTACK_VALUE;
    const logEvent = 
        mode === MODE_ATTACK
            ? LOG_EVENT_PLAYER_ATTACK
            : LOG_EVENT_PLAYER_STRONG_ATTACK;
    //if (mode === "ATTACK") ,else if (mode === "STRONG_ATTACK")
    
    /*
    if (mode == MODE_ATTACK) {
        maxDamage = ATTACK_VALUE;
        logEvent = LOG_EVENT_PLAYER_ATTACK;
    } else if (mode === MODE_STRONG_ATTACK) {
        maxDamage = STRONG_ATTACK_VALUE;
        logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK;
    } 
    */
    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damage;
    writeToLog (
        logEvent,
        damage,
        currentMonsterHealth,
        currentPlayerHealth
    )
    endRound();
}

function attackHandler() { //어떤 함수가 EventListner 함수에 영향을 주는지(EventListner를 가리키는지) 확인하는 명명규칙 ~Handler()
    attackMonster('ATTACK'); 
    //문자열 식별자는 코드에서 피하는 것이 좋다 -> 문자열 하나의 오류만으로도 시스템 전체 에러 발생의 가능성 때문 + 변수로 설정 시 IDE에서 자동완성 기능도 사용가능
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
    writeToLog (
        LOG_EVENT_PLAYER_HEAL,
        healValue,
        currentMonsterHealth,
        currentPlayerHealth
    )
    endRound();
}

function printLogHandler() {
    console.log(battleLog); 
    /* 
    Of course that log is only visible in the developer tools, not on the page itself.
    For the demo purposes in this module, this suffices. (현재 Section 4 모듈의 데모 목적으로는 충분함)
    */
}

attackBtn.addEventListener('click',attackHandler); //attackBtn은 하드코딩X -> HTML 코드의 일부를 참조하므로 이름이 소문자
strongAttackBtn.addEventListener('click',strongAttackHandler);
healBtn.addEventListener('click',healPlayerHandler);
logBtn.addEventListener('click', printLogHandler);

/*
function writeToLog(ev, val, monsterHealth, playerHealth) {
    let logEntry;
    if (ev === LOG_EVENT_PLAYER_ATTACK) {
        logEntry = {
            event: ev,
            value: val,
            target: 'MONSTER',
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth
        };
    } else if(ev === LOG_EVENT_PLAYER_STRONG_ATTACK) {
        logEntry = {
            event: ev,
            value: val,
            target: 'MONSTER',
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth
        };
    } else if (ev === LOG_EVNET_MONSTER_ATTACK) {
        logEntry = {
            event: ev,
            value: val,
            target: 'PLAYER',
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth
        };
    } else if (ev === LOG_EVENT_PLAYER_HEAL) {
        logEntry = {
            event: ev,
            value: val,
            target: 'PLAYER',
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth
        };
    } else if (ev === LOG_EVENT_GAME_OVER) {
        logEntry = {
            event: ev,
            value: val,
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth
        };
    }
    battleLog.push(logEntry);
} */