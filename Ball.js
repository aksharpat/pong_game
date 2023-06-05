export default class Ball {
    constructor(ballElm) {
        this.ballElm = ballElm
        this.reset()
    }

    get x() {
        return parseFloat(getComputedStyle(this.ballElm).getPropertyValue("--x"))
    }

    set x(value) {
        this.ballElm.style.setProperty("--x", value)
    }

    get y() {
        return parseFloat(getComputedStyle(this.ballElm).getPropertyValue("--y"))
    }

    set y(value) {
        this.ballElm.style.setProperty("--y", value)
    }

    reset() {
        this.x = 50
        this.y = 50
    }

    update(delta) {
        this.x = 5
        this.y = 15
    }
}