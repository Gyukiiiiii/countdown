let totalDetik = 86400; // 24 jam x 60 x 60
let timer = null; // Menyimpan ID interval (sekaligus penanda status jalan/stop)

function updateUI() {
    const h = Math.floor(totalDetik / 3600);
    const m = Math.floor((totalDetik % 3600) / 60);
    const s = totalDetik % 60;

    document.getElementById("jam").textContent = String(h).padStart(2, "0");
    document.getElementById("menit").textContent = String(m).padStart(2, "0");
    document.getElementById("detik").textContent = String(s).padStart(2, "0");
}

// Tombol Start / Stop (Toggle)
document.getElementById("btnStart").onclick = function() {
    if (timer) {
        // Jika timer sedang jalan -> Pause
        clearInterval(timer);
        timer = null;
        this.textContent = "Start";
    } else {
        // Jika timer mati -> Start
        timer = setInterval(() => {
            totalDetik--;
            updateUI();
            if (totalDetik <= 0) clearInterval(timer);
        }, 1000);
        this.textContent = "Stop";
    }
};

// Tombol Reset
document.getElementById("btnReset").onclick = function() {
    clearInterval(timer);
    timer = null;
    totalDetik = 86400;
    updateUI();
    document.getElementById("btnStart").textContent = "Start";
};