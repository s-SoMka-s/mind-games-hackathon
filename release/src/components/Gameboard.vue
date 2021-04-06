<template>
    <div class="gameboard" id="gameboard">
        <canvas id="draw-field" width="200" height="100"></canvas>
    </div>
</template>
<script>
export default {
    name: 'Gameboard',
    props: {
        size: Number,
        board: Array(Array),
        moveNumber: Number,
        stone: {
            x: Number,
            y: Number,
            color: String,
        },
    },
    watch: {
        moveNumber: function() {
            var canvas = document.getElementById('draw-field')
            var ctx = canvas.getContext('2d')
            const gap = canvas.offsetWidth / this.size
            console.log(gap)
            var r = gap / 2
            this.drawStone(ctx, this.stone.x * gap, this.stone.y * gap, r)
        },
    },
    methods: {
        fitToContainer: function(canvas) {
            canvas.style.width = '100%'
            canvas.style.height = '100%'

            canvas.width = canvas.offsetWidth
            canvas.height = canvas.offsetHeight
        },
        drawField: function(ctx, gap) {
            ctx.fillStyle = '#000000'
            const xStart = 0
            const yStart = 0
            for (var y = 0; y < this.size; y++) {
                for (var x = 0; x < this.size; x++) {
                    ctx.rect(xStart + gap * x, yStart + gap * y, gap, gap)
                    ctx.stroke()
                }
            }
        },
        drawStone: function(ctx, xCoord, yCoord, radius) {
            switch (this.stone.color) {
                case 'black':
                    ctx.fillStyle = '#000000'
                    break
                case 'white':
                    ctx.fillStyle = '#FFFFFF'
                    break
            }
            ctx.beginPath()
            ctx.arc(xCoord, yCoord, radius, 0, 2 * Math.PI, false)
            ctx.fill()
            ctx.stroke()
        },
    },
    mounted: function() {
        var canvas = document.getElementById('draw-field')
        this.fitToContainer(canvas)
        var ctx = canvas.getContext('2d')
        console.log(ctx)

        const gap = canvas.offsetWidth / this.size

        this.drawField(ctx, gap)
    },
}
</script>
<style lang="scss">
$color-red: #e03e3b;
$color-black: #3c3c3a;
$color-white: #ffffff;
$color-yellow: #fbc467;

.gameboard {
    padding: 10px;
    width: 380px;
    height: 380px;
    background-color: $color-yellow;
}
</style>
