class Player extends Sprite {
    constructor({ position, collisionBlocks, imageSrc }) {
        super({imageSrc})
        this.position = position
        this.velocity = {
            x: 0,
            y: 1
        }
        this.height = 100 / 4
        this.width = 100 / 4
        this.collisionBlocks = collisionBlocks
    }
    update() {
        ctxt.fillRect(this.position.x, this.position.y, this.width, this.height)
        ctxt.fillStyle = 'rgba(0, 255, 0, 0.2)'
        this.draw()
        this.position.x += this.velocity.x
        this.checkForHorizontalCollisions()
        this.applyGravity()
        this.checkForVerticalCollisions()
    }
    checkForHorizontalCollisions() {
        for (let i = 0; i < this.collisionBlocks.length; i++) {
            const collisionBlock = this.collisionBlocks[i]
            if (collisions({
                object1: this,
                object2: collisionBlock
            })) {
                if (this.velocity.x > 0) {
                    this.velocity.x = 0
                    this.position.x = collisionBlock.position.x - this.width - 0.01
                    break
                } else if (this.velocity.x < 0) {
                    this.velocity.x = 0
                    this.position.x = collisionBlock.position.x + collisionBlock.width + 0.01
                    break
                }
            }
        }
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
                if (this.velocity.y > 0) {
                    this.velocity.y = 0
                    this.position.y = collisionBlock.position.y - this.height - 0.01
                    break
                } else if (this.velocity.y < 0) {
                    this.velocity.y = 0
                    this.position.y = collisionBlock.position.y + collisionBlock.height + 0.01
                    break
                }
            }
        }
    }
}
