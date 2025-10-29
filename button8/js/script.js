const btn = document.getElementById('myButton');
btn.addEventListener('click', () => {
    const span = btn.querySelector('span');
    if (span.textContent === "送信する") {
        span.textContent = "送信完了！";
    } else {
        span.textContent = "送信する";
    }
});