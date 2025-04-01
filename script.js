const canvas = document.querySelector('canvas')
const ctxt = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

ctxt.fillStyle = 'white'
ctxt.fillRect(0, 0, canvas.width, canvas.height)