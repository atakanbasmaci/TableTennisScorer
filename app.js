class Player {
    constructor(displayElement, button) {
        this.score = 0;
        this.displayElement = displayElement;
        this.button = button;
        this.button.disabled = false;
    }

    addScore() {
        this.score += 1;
    }

    updateDisplay() {
        this.displayElement.innerText = this.score;
    }

    buttonEnableDisable() {
        this.button.disabled = false;
    }

    resetPlayer() {
        this.score = 0;
        this.displayElement.classList.remove("winner", "loser");
        this.updateDisplay();
        this.buttonEnableDisable();
    }
}

let isGameOver = false;
let gameScore = 3;

const p1DisplayElement = document.querySelector("#p1Display");
const p2DisplayElement = document.querySelector("#p2Display");

const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");

const reset = document.querySelector("#reset");
const scoreInput = document.querySelector("#number");

const p1 = new Player(p1DisplayElement, p1Button);
const p2 = new Player(p2DisplayElement, p2Button);

p1Button.addEventListener('click', () => {
    if (!isGameOver) {
        p1.addScore();
        if (p1.score === gameScore) {
            isGameOver = true;
            p1DisplayElement.classList.add("winner");
            p2DisplayElement.classList.add("loser");
            p1.button.disabled = true;
            p2.button.disabled = true;
        }
        p1.updateDisplay();
    }
});

p2Button.addEventListener('click', () => {
    if (!isGameOver) {
        p2.addScore();
        if (p2.score === gameScore) {
            isGameOver = true;
            p2DisplayElement.classList.add("winner");
            p1DisplayElement.classList.add("loser");
            p1.button.disabled = true;
            p2.button.disabled = true;
        }
        p2.updateDisplay();
    }
});

reset.addEventListener('click', () => {
    p1.resetPlayer();
    p2.resetPlayer();
    isGameOver = false;
});

scoreInput.addEventListener('change', () => {
    gameScore = parseInt(scoreInput.value);
    p1.resetPlayer();
    p2.resetPlayer();

    if (isGameOver) {
        isGameOver = false;
    }
})