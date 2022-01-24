const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));

// app.get('/api/hello', (req, res) => {
//     res.send({message : 'hello express!'});
// });

app.get("/api/customers", (req, res)=>{
    res.send(
        [{
            'id' : 1,
            'image' : 'https://placeimg.com/64/64/1',
            'name' : '홍길동',
            'br' : '910911',
            'ge' : '남',
            'job' : '의적'
          },
          {
            'id' : 2,
            'image' : 'https://placeimg.com/64/64/2',
            'name' : '고길동',
            'br' : '910911',
            'ge' : '남',
            'job' : '의적'
          },
          {
            'id' : 3,
            'image' : 'https://placeimg.com/64/64/3',
            'name' : '김유신',
            'br' : '910911',
            'ge' : '남',
            'job' : '의적'
          }]
    )
})
app.listen(port, ()=> console.log(`Listening on port ${port}`));