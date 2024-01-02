const express = require('express');
const randomColor = require('randomcolor');
const app = express();
const port = 5005;

// app.js
app.get('/colors', (req, res) => {
    let colors = randomColor({
        count: 10 // 예를 들어, 10개의 색상을 생성하려면 이렇게 설정합니다.
    });
    res.json(colors);
});


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
