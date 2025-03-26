document.getElementById("spinBtn").addEventListener("click", function() {
    let slot1 = document.getElementById("slot1");
    let slot2 = document.getElementById("slot2");
    let slot3 = document.getElementById("slot3");
    let resultText = document.getElementById("result");

    function biasedRandom() {
        let randomValue = Math.random();
        if (randomValue < 0.4) return 7; 
        return Math.floor(Math.random() * 10);
    }

    let num1 = biasedRandom();
    let num2 = biasedRandom();
    let num3 = biasedRandom();

    // Animate slot spin effect
    slot1.style.transform = "rotateX(360deg)";
    slot2.style.transform = "rotateX(360deg)";
    slot3.style.transform = "rotateX(360deg)";

    setTimeout(() => {
        slot1.style.transform = "rotateX(0deg)";
        slot2.style.transform = "rotateX(0deg)";
        slot3.style.transform = "rotateX(0deg)";

      
        slot1.textContent = num1;
        slot2.textContent = num2;
        slot3.textContent = num3;

       
        if (num1 === 7 && num2 === 7 && num3 === 7) {
            resultText.textContent = "JACKPOT!";
            resultText.style.color = "gold";
        } else {
            resultText.textContent = "Try Again!";
            resultText.style.color = "white";
        }
    }, 800);
});
