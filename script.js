const container = document.getElementById('text');
const text = container.innerText;
container.innerHTML = '';
[...text].forEach((char, i) => {
    const span = document.createElement('span');
    if (char === ' ') { 
        span.classList.add('space'); 
    } else { 
        span.innerText = char; 
        span.style.animationDelay = `${i * 0.08}s`; 
    }
    container.appendChild(span);
});

document.querySelector('.dropbtn').addEventListener('click', function() {
    document.querySelector('.dropdown-content').classList.toggle('show');
});