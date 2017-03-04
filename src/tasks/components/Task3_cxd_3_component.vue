<template>
  <div class="camera" :style="cameraStyleObject">
    <div class="space" :style="spaceStyleObject">
      <ul class="box">
        <li v-for="(url, idx) in imageUrls" v-if="imageUrls.length" class="item" :style="styleConfigArray[idx]">
          <img :src="url" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'Task3Cxd3Component',
  props: {
    options: [Object, null],
    imageUrls: Array
  },
  data () {
    return {
      styleConfigArray: [],
      cameraStyleObject: {},
      rotateY: 0
    }
  },
  created () {
    // 这里_transtionDurationCopy作为副本在switchImage中使用
    this._transtionDurationCopy = this.config.transitionDuration
    let imageWidth = parseFloat(this.config.imageWidth)
    let imageHeight = parseFloat(this.config.imageHeight)
    let perspective = parseFloat(this.config.perspective)
    let len = this.len = parseFloat(this.imageUrls.length)
    let averageAngle = this.averageAngle = parseFloat(360 / len)
    let translateZ = ((0.5 * imageWidth / Math.tan(Math.PI * averageAngle / 180 / 2)) + this.config.imageDistance).toFixed(2)
    console.log(translateZ)
    // 初始化cameraStyleObject
    // 验证是不是百分数
    let re = /^((\d+\.?\d*)|(\d*\.?\d+))%$/
    this.cameraStyleObject = {
      margin: '0 auto',
      width: re.test(imageWidth) ? imageWidth : imageWidth + 'px',
      height: re.test(imageHeight) ? imageHeight : imageHeight + 'px',
      perspective: perspective + 'px',
      'perspective-origin': 'center center'
    }
    // 初始化每个图片的style
    for (let i = 0; i < len; i++) {
      let rotateY = i * averageAngle
      let _styleObject = {
        transform: 'rotateY(' + rotateY + 'deg) translateZ(' + translateZ + 'px)'
      }
      this.styleConfigArray.push(_styleObject)
    }
    // 初始化监听事件
    this.$on('startAnimation', () => {
      this.startAnimation()
    })
    this.$on('pauseAnimation', () => {
      this.pauseAnimation()
    })
    this.$on('switchImage', (dir) => {
      this.switchImage(dir)
    })
    // 初始化转动
    this.startAnimation()
  },
  methods: {
    startAnimation () {
      this.interval = setInterval(() => {
        this.switchImage(this.config.animationDirection)
      }, this.config.animationDuration)
    },
    pauseAnimation () {
      clearInterval(this.interval || null)
    },
    // 这是函数是向左或是向右旋转一张图片
    switchImage (direction) {
      // direction为1表示向右转，为-1表示向左转
      if (direction !== 1 && direction !== -1) {
        throw new Error('direction error: should be 1 or -1')
      }
      this.config.transitionDuration = this._transtionDurationCopy
      this.rotateY += this.averageAngle * direction
      // 调用计数器次数增加1次
      let counter = this.switchImageCounter(1 * direction)
      // 如果旋转了一周后，将rotateY重置
      if (counter === 0) {
        // 重置时候transition-duration设置为0，即不要有过渡
        setTimeout(() => {
          this.config.transitionDuration = 0
          this.rotateY -= 360 * direction
        }, this._transtionDurationCopy)
      }
    },
    // 这个函数是获取旋转次数对图片长度的模，目的是判断是否旋转了一周
    switchImageCounter (num) {
      num = num || 0
      this.switchImage.counter || (this.switchImage.counter = 0)
      this.switchImage.counter += num
      this.switchImage.counter %= this.len
      return this.switchImage.counter
    }
  },
  computed: {
    config () {
      let options = this.options || {}
      let config = {
        imageWidth: options.imageWidth || 400,
        imageHeight: options.imageHeight || options.imageWidth / 2 || 200,
        imageDistance: options.imageDistance || 0,
        transitionDuration: options.transitionDuration || 1500,
        animationDuration: options.animationDuration || 3000,
        animationDirection: options.animationDirection || 1,
        perspective: options.perspective || 2000
      }
      return config
    },
    spaceStyleObject () {
      let obj = {
        transform: 'rotateY(' + this.rotateY + 'deg)',
        transition: 'transform ' + this.config.transitionDuration + 'ms'
      }
      return obj
    }
  }
}
</script>

<style type="text/css" lang="styl" scoped>
.camera
  img
    width: 100%
    height: 100%
  .space
    width: 100%
    height: 100%
    transform-style: preserve-3d
  .box
    position: relative
    height: 100%
    transform-style: preserve-3d
  .item
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    transition: all 2s linear
</style>
