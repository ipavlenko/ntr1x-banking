import $ from 'jquery'

export default {
    name: 'accounts',
    data: function() {
        return {
            cards: this.cards,
            index: this.index
        }
    },
    created: function() {

        this.cards = [
            {
                offset: 0,
                title: 'Bank Name',
                background: 'url("/static/img/cards/1.png")'
            },
            {
                offset: 0,
                title: 'Your Bank',
                background: 'url("/static/img/cards/2.png")'
            },
            {
                offset: 0,
                title: 'Walmart',
                background: 'url("/static/img/cards/3.png")'
            },
            {
                offset: 0,
                title: 'Second Bank Name',
                background: 'url("/static/img/cards/1.png")'
            },
            {
                offset: 0,
                title: 'Another Bank',
                background: 'url("/static/img/cards/2.png")'
            }
        ]

        this.index = this.cards.length - 1
    },
    methods: {
        transform: function(i) {
            let scale = i <= this.index
                ? 1.0 + (i - this.index) / (2 * this.cards.length)
                : null
            return scale ? `scale(${scale})` : 'none'
        },
        top: function(i) {
            let c = this.cards[i]
            let top = i <= this.index
                ? c.offset + 10 * (i - this.index)
                : null
            return top ? `${top}px` : 'auto'
        },
        bottom: function(i) {
            let c = this.cards[i]
            let bottom = i <= this.index
                ? null
                : -180 - c.offset
            return bottom ? `${bottom}px` : 'auto'
        }
    },
    mounted: function() {

        $(this.$refs.body).on('tapstart', (e, touch) => {
            this.dragged = {
                startY: touch.position.y,
                currentY: touch.position.y,
                card: this.cards[this.index],
                previous: this.index < this.cards.length - 1 ? this.cards[this.index + 1] : null
            }
        })

        $(this.$refs.body).on('tapend', () => {
            if (this.dragged) {
                if (this.dragged.card) {
                    this.dragged.card.offset = 0
                }
                if (this.dragged.previous) {
                    this.dragged.previous.offset = 0
                }
                this.dragged = null
            }
        })

        $(this.$refs.body).on('tapmove', (e, touch) => {

            if (this.dragged) {

                this.dragged.currentY = touch.position.y
                let offset = this.dragged.currentY - this.dragged.startY

                if (offset > 0) {
                    if (this.dragged.card) {
                        this.dragged.card.offset = offset
                    }
                    if (this.dragged.previous) {
                        this.dragged.previous.offset = 0
                    }
                } else {
                    if (this.dragged.card) {
                        this.dragged.card.offset = 0
                    }
                    if (this.dragged.previous) {
                        this.dragged.previous.offset = offset
                    }
                }

                if (this.dragged.card && this.dragged.card.offset > 250) {
                    if (this.dragged.card) {
                        this.dragged.card.offset = 0
                    }
                    if (this.dragged.previous) {
                        this.dragged.previous.offset = 0
                    }
                    this.dragged = null
                    this.index--
                } else if (this.dragged.previous && this.dragged.previous.offset < -250) {
                    if (this.dragged.card) {
                        this.dragged.card.offset = 0
                    }
                    if (this.dragged.previous) {
                        this.dragged.previous.offset = 0
                    }
                    this.dragged = null
                    this.index++
                }
            }
        })
    }
}
