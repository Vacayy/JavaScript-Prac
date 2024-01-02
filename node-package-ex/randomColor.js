

// document.addEventListener('DOMContentLoaded', function() {
//     axios.get('/colors')
//         .then(response => {
//             let colors = response.data; 
//             let colorContainer = document.getElementById('color-container');                            
//             colorContainer.style.backgroundColor = colors; 
//             colorContainer.innerText = "하이하이하이"; 
//         })
//         .catch(error => console.error('Error fetching colors:', error));
// });

// randomColor.js
document.addEventListener('DOMContentLoaded', function() {
    axios.get('/colors')
        .then(response => {
            let colors = response.data;
            let colorContainer = document.getElementById('color-container');
            colorContainer.innerHTML = ''; // 컨테이너 초기화
            colors.forEach(color => {
                let colorDiv = document.createElement('div');
                colorDiv.style.backgroundColor = color;
                colorDiv.className = 'color-box';
                colorContainer.appendChild(colorDiv);
            });
        })
        .catch(error => console.error('Error fetching colors:', error));
});
