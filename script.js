const canvas = document.querySelector('canvas')
const ctxt = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

const gravity = 0.5

class Player {
    constructor(position) {
        this.position = position  
        this.velocity = {
            x:0,
            y:1
        }  
    }
    draw() {
        ctxt.fillStyle = 'red'
        ctxt.fillRect(this.position.x, this.position.y, 100, 100)
    }
    update() {
        this.draw()
        this.position.y += this.velocity.y
        this.velocity.y += gravity
    }
}

const player = new Player({
    x:0,
    y:0
})

const player2 =new Player({
    x:100,
    y:100
})
const animate = () => {
    window.requestAnimationFrame(animate)
    ctxt.fillStyle = 'white'
    ctxt.fillRect(0, 0, canvas.width, canvas.height)
    player.update()
    player2.update()    
}

animate()