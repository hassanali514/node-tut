const app = require('./server');

app.get("", (req, res) => {
    res.send("Hello World");
    res.end();
})

app.listen((5000), () => {
    console.log('server work fine');
})