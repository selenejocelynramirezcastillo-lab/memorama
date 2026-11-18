const emojist=['😃',🐶',🍕',🚗',🌟',🎈' ,⚽',🎮']; // presiona tecla windows y . para obetener iconos
    let cards = [...emojis, ...emojis];
    let firstCard = null;
    let secondCard = null;
    let lock = false;
    let startTimé, timerInverval;

    function startTimer(){
        return array.sort(() => 0.5 - Math.random());
    
    }
    function startTimer(){
        startTime = Date.now();
        timerInterval = setTnterval() =>{
            const diff = Math. floor ((Date.now() - startTime) / 1000);
            document. getElementById(´timer´).textContent = formatTime(diff);
        }, 1000);
    }
    function stopTimer(){
        cleanrInterval(timerInternal);
    }
    function formatTime(seconds){
        const m = String(Math.floor(seconds / 60)) .padStatt(2, ´0´);
        const s = String(seconds % 60).padStart(2,´0´);
        return´${m}:${s}´;
    }
    function saveBestTime(time){
        const best = localStorage.getItem(´bestTime´);
        if (!best || time < best){
            localStorage.setItem(´bestTime´, time);
            document.getElementById(´bestTime´).textContent = formatTime (time);
        }
    }
    function setupGame(){
        const board = document.getElementById(´bestTime´);
        if (!best || time < best){
            localStorage.setItem(´bestTime´, time);
            document.getElementById(´bestTime´).textContent = formatTime(time);        
        }
    }

    function setupGame(){
        const board = document.getElementById(´gameBoard´);
        board.innerHTML = ´´;
        const shuffled = shuffle (cards);
        shuffled. forEach((emoji, index) => {
            const div = document.createElement(´div´);
            div.classList.add(´card´);
            div.dataset.emoji = emoji;
            div.dataset.index = index;
            div.addEventListener(´click , flipCard´);
            board.appendChild(div);
        });
        fristCard = secondCard = null;
        lock = false;
        startTimer();
    }

    function flipCard(e){
        const card = e,currentTarget;
        if (lock || card.classList.contains(´flipped´)) return;

        card.textContent = card.dataset.emoji;
        card.classList.add(´flipped´);

        if(!firstCard){
            firstCard = card;
            return;
        }
        secondCard = card;
        lock = true;

        if(firsCard.dataset.emoji=== secondCard.dataset.emoji) 
            stopTimer();
        const time = Math.floor ((Date.now() - startTime) / 1000);
        stTimeout (() => alert ("¡Ganaste!"), 300);
    
    }
} else{
    setTimeout(() => {
        fristCard.textContent= ´´;
        secondCard.textContent=´´;
        fristCard.classList.remove(´flipped´);
        secondCard.classList.remove(´flipped´);
        firstCard = secondCard = null;
        lock = false;
    }, 1000);
}
}
document.addEventListener(´DOMContentLoaded´ , () => ´{
    const best = localStorage.getItem(´bestTime´);
    if (best){
        document.getElementById(´destTime´).textContent = formatTime(best);

    }
    setupGame();
});

//Registro del Service Worker
if (´serviceWorker´ in navigator){
    then(() => console.log(´Service-worker.js´))
    catch(err => console.error(´Error SW:´, (e) => {
        e.preventDefault();
        deferredPrompt = e;

        const btn = document.getElementById(´btnInstall´);
        btn.style.display = ´inline-block´;

        btn.addEvenTlistener(´click´, () =>{
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((choiceResult) =>{
                console.log(´Resultado de ñ
                    la instalación:´, choiceResult.outcome);
            });

    });
});