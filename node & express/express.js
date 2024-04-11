const express = require('express')
const app = express()
const port = 1000
app.get('/', (req, res) => {
    const name = req.query.name
    res.send(`vannu ${name}`)
})
app.listen(port, () => {
    console.log('lskdjfgdklas');
})

//middleware 
app.use((req, res, next) => {
    console.log('Time:', Date.now());
    next();
});
//static files
app.use(express.static('public'));
//error handleing
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});


