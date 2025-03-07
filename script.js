fetch('https://whatyearisit-backend-nine-pi.vercel.app')
.then(response => response.json())
.then(data => document.getElementById('year').textContent = data.year);