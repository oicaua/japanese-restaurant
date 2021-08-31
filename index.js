const express = require('express')
const app = express()
const path = require('path')
const router = express.Router()

// Loading Pages
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'))
})

router.get('/cardapio', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/cardapio.html'))
})

router.get('/sobre', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/sobre.html'))
})

// Loading CSS; Style;
router.get('/src/style/style.css', function (req, res) {
    res.sendFile(path.join(__dirname + '/src/style/style.css'))
})

router.get('/src/style/home/header.css', function (req, res) {
    res.sendFile(path.join(__dirname + '/src/style/home/header.css'))
})

router.get('/src/style/home/body.css', function (req, res) {
    res.sendFile(path.join(__dirname + '/src/style/home/body.css'))
})

router.get('/src/style/home/footer.css', function (req, res) {
    res.sendFile(path.join(__dirname + '/src/style/home/footer.css'))
})

router.get('/src/style/cardapio/header-body.css', function (req, res) {
    res.sendFile(path.join(__dirname + '/src/style/cardapio/header-body.css'))
})

router.get('/src/style/cardapio/body.css', function (req, res) {
    res.sendFile(path.join(__dirname + '/src/style/cardapio/body.css'))
})

router.get('/src/style/sobre/body.css', function (req, res) {
    res.sendFile(path.join(__dirname + '/src/style/sobre/body.css'))
})

// Loading images; Videos; Gifs;
router.get('/src/images/home/sushi_01.png', function (req, res) {
    res.sendFile(path.join(__dirname + '/src/images/home/sushi_01.png'))
})

router.get('/src/images/home/sushi_02.png', function (req, res) {
    res.sendFile(path.join(__dirname + '/src/images/home/sushi_02.png'))
})

router.get('/src/images/home/sushi_03.png', function (req, res) {
    res.sendFile(path.join(__dirname + '/src/images/home/sushi_03.png'))
})

router.get('/src/images/home/BackgroundHome.jpg', function (req, res) {
    res.sendFile(path.join(__dirname + '/src/images/home/BackgroundHome.jpg'))
})

router.get('/src/images/cardapio/sushi_01.png', function (req, res) {
    res.sendFile(path.join(__dirname + '/src/images/cardapio/sushi_01.png'))
})

router.get('/src/images/cardapio/sushi_02.png', function (req, res) {
    res.sendFile(path.join(__dirname + '/src/images/cardapio/sushi_02.png'))
})

router.get('/src/images/cardapio/sushi_03.png', function (req, res) {
    res.sendFile(path.join(__dirname + '/src/images/cardapio/sushi_03.png'))
})

router.get('/src/images/cardapio/sushi_04.png', function (req, res) {
    res.sendFile(path.join(__dirname + '/src/images/cardapio/sushi_04.png'))
})

router.get('/src/images/cardapio/sushi_05.png', function (req, res) {
    res.sendFile(path.join(__dirname + '/src/images/cardapio/sushi_05.png'))
})

router.get('/src/images/cardapio/sushi_06.png', function (req, res) {
    res.sendFile(path.join(__dirname + '/src/images/cardapio/sushi_06.png'))
})

router.get('/src/images/cardapio/sushi_07.png', function (req, res) {
    res.sendFile(path.join(__dirname + '/src/images/cardapio/sushi_07.png'))
})

router.get('/src/images/cardapio/sushi_08.png', function (req, res) {
    res.sendFile(path.join(__dirname + '/src/images/cardapio/sushi_08.png'))
})

router.get('/src/images/cardapio/sushi_09.png', function (req, res) {
    res.sendFile(path.join(__dirname + '/src/images/cardapio/sushi_09.png'))
})

router.get('/src/images/sobre/worker-cashier.jpg', function (req, res) {
    res.sendFile(path.join(__dirname + '/src/images/sobre/worker-cashier.jpg'))
})

router.get('/src/images/sobre/workers-rice.jpg', function (req, res) {
    res.sendFile(path.join(__dirname + '/src/images/sobre/workers-rice.jpg'))
})

router.get('/src/images/sobre/workers-three-sushi', function (req, res) {
    res.sendFile(path.join(__dirname + '/src/images/sobre/workers-three-sushi.jpg'))
})

app.use('/', router)

app.listen(process.env.port || 8080)