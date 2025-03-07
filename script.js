fetch('https://whatyearisit-frontend-mu-ochre.vercel.app/year')
.then(response => response.json())
.then(data => document.getElementById('year').textContent = data.year);