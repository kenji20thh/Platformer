const canvas = document.querySelector('canvas')
const ctxt = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

const scaledCanvas = {
    width: canvas.width / 4,
    height: canvas.height / 4
}

const floorCollisions2D = []
for (let i = 0; i < floorCollisions.length; i += 36) {
    floorCollisions2D.push(floorCollisions.slice(i, i + 36))
}

const collisionBlocks = []
floorCollisions2D.forEach((row, y) => {
    row.forEach((symbol, x) => {
        if (symbol === 202) {
            collisionBlocks.push(new CollisionBlock({
                position: {
                    x: x * 16,
                    y: y * 16
                }
            }))
        }
    })
})

const platformCollisions2D = []
for (let i = 0; i < platformCollisions.length; i += 36) {
    platformCollisions2D.push(platformCollisions.slice(i, i + 36))
}

const platformCollisionBlocks = []
platformCollisions2D.forEach((row, y) => {
    row.forEach((symbol, x) => {
        if (symbol === 202) {
            platformCollisionBlocks.push(new CollisionBlock({
                position: {
                    x: x * 16,
                    y: y * 16
                }
            }))
        }
    })
})



const gravity = 0.5

const player = new Player({
    position: {
        x: 100,
        y: 0
    },
    collisionBlocks: collisionBlocks
})

const keys = {
    d: {
        pressed: false
    },
    q: {
        pressed: false
    }
}

const background = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    imageSrc: './assets/background.png'
})

const animate = () => {
    window.requestAnimationFrame(animate)
    ctxt.fillStyle = 'white'
    ctxt.fillRect(0, 0, canvas.width, canvas.height)

    ctxt.save()
    ctxt.scale(4, 4)
    ctxt.translate(0, scaledCanvas.height - background.image.height)
    background.update()
    collisionBlocks.forEach((block) => {
        block.update()
    })
    platformCollisionBlocks.forEach((block) => {
        block.update()
    })

    player.update()
    player.velocity.x = 0
    if (keys.d.pressed) player.velocity.x = 3
    else if (keys.q.pressed) player.velocity.x = -3
    
    ctxt.restore()


}

animate()

window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'd':
            keys.d.pressed = true
            break
        case 'q':
            keys.q.pressed = true
            break
        case 'z':
            player.velocity.y = -8
            break
    }
})

window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'd':
            keys.d.pressed = false
            break
        case 'q':
            keys.q.pressed = false
            break
    }
})