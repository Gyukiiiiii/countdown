let totalSecs = 86400; // 24 hours x 60 x 60
let timer = null; // penanda status jalan/stop

function updateUI() {
    const h = Math.floor(totalSecs / 3600);
    const m = Math.floor((totalSecs % 3600) / 60);
    const s = totalSecs % 60;
    document.getElementById("hours").textContent = String(h).padStart(2, "0");
    document.getElementById("mins").textContent = String(m).padStart(2, "0");
    document.getElementById("secs").textContent = String(s).padStart(2, "0");
}
// Tombol Start / Stop 
document.getElementById("btnStart").onclick = function() {
    if (timer) {
        clearInterval(timer);
        timer = null;
        this.textContent = "Start";
    } else {
        timer = setInterval(() => {
            totalSecs--;
            updateUI();
            if (totalSecs <= 0) clearInterval(timer);
        }, 1000);
        this.textContent = "Stop";
    }
}
// Tombol Reset
document.getElementById("btnReset").onclick = function() {
    clearInterval(timer);
    timer = null;
    totalSecs = 86400;
    updateUI();
    document.getElementById("btnStart").textContent = "Start";
}