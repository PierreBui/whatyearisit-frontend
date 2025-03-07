fetch('https://whatyearisit-backend-nine-pi.vercel.app/year')
.then(response => response.json())
.then(data => document.getElementById('year').textContent = data.year);