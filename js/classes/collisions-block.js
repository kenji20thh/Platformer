class CollisionBlock {
    constructor({ position, }) {
        this.position = position
        this.width = 16
        this.height = 16
    }
    draw() {
        ctxt.fillStyle = 'rgba(255, 0, 0, 0.5)'
        ctxt.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update() {
        this.draw()
    }
}
