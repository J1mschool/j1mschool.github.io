const tempoDisplay = document.querySelector('.tempo');
const tempoText = document.querySelector('.bpm');
const decreaseTempoBtn = document.querySelector('.decrease-tempo');
const increaseTempoBtn = document.querySelector('.increase-tempo');
const tempoSlider = document.querySelector('.tempo-slider');

let bpm = 120;
tempoSlider.value = bpm;
    
function setElementColor() {

    let color = "#7BE785";

    if (bpm > 200)
    {
       color = "#E53F35";
    }

    else if (bpm > 180)
    {
       color = "#E56B35";
    }

    else if (bpm > 160)
    {
       color = "#E57335";
    }

    else if (bpm > 140)
    {
       color = "#F2D533";
    }

    else if (bpm < 140)
    {
       color = "#7BE785";

    }
    
tempoDisplay.style.color = color;
tempoText.style.color = color;

tempoSlider.style.setProperty('--SliderColor', color);
increaseTempoBtn.style.setProperty('--ButtonColor', color);
decreaseTempoBtn.style.setProperty('--ButtonColor', color);

}

decreaseTempoBtn.addEventListener('mousedown', ()=> {
    if(bpm <= 45){return;}

        bpm--;
        tempoDisplay.textContent = bpm;
        tempoSlider.textContent = bpm;
        tempoDisplay.textContent = bpm;
        tempoSlider.value = bpm;
        setElementColor();
 
});


increaseTempoBtn.addEventListener('mousedown', ()=> {
    if(bpm >= 280){return;}

        bpm++;
        tempoDisplay.textContent = bpm;
        tempoSlider.textContent = bpm;
        tempoDisplay.textContent = bpm;
        tempoSlider.value = bpm;
        setElementColor();

});


tempoSlider.addEventListener('input', () => {
bpm = tempoSlider.value;
tempoDisplay.textContent = bpm;
setElementColor();
});


