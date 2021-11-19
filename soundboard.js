var buttonTrumpet = document.getElementById('trumpet')
var buttonWhistle = document.getElementById('whistle')
var buttonTrain = document.getElementById('train')
var audioTrain = new Audio('train_crossing')
var audioWhistle = new Audio('slide_whistle')
var audioTrumpet = new Audio('trumpet_music')


buttonTrumpet.addEventListener('mouseenter', function () {
    audioTrumpet.play()
})
buttonWhistle.addEventListener('mouseenter', function () {
    audioWhistle.play()
})
buttonTrain.addEventListener('mouseenter', function () {
    audioTrain.play()
})