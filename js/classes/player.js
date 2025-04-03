class Player {
    constructor({ position, collisionBlocks }) {
        this.position = position
        this.velocity = {
            x: 0,
            y: 1
        }
        this.height = 100
        this.width = 100
        this.collisionBlocks = collisionBlocks
    }
    draw() {
        ctxt.fillStyle = 'red'
        ctxt.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
    update() {
        this.draw()
        this.position.x += this.velocity.x
        this.applyGravity()
        this.checkForVerticalCollisions()
    }
    applyGravity() {
        this.position.y += this.velocity.y
        this.velocity.y += gravity
    }
    checkForVerticalCollisions() {
        for (let i = 0; i < this.collisionBlocks.length; i++) {
            const collisionBlock = this.collisionBlocks[i]
            if (collisions({
                object1: this,
                object2: collisionBlock
            })) {
                console.log('colliding')
            }
        }
    }
}
