<template>
  <div class="wrapper">
    <Task3Component ref="child" :options="options" :image-urls="urls"></Task3Component>
    <div class="operator">
      <span class="item left" @click="switchImage(-1)">&#9668</span>
      <span class="item" :class="animationStatus" @click="handleAnimation">{{info[animationStatus]}}</span>
      <span class="item right" @click="switchImage(1)">&#9658</span>
    </div>
  </div>
</template>

<script type="text/javascript">
import Task3Component from '@/tasks/components/Task3_cxd_3_component'
export default {
  components: { Task3Component },
  data () {
    return {
      animationStatus: 'paused',
      options: {
        imageWidth: 400, // image width为400px
        imageHeight: 200, // image height为200px
        imageDistance: 100, // 该值越大，2个image之间的距离越大, 单位px
        transitionDuration: 1000, // image完成一次切换设置的过渡时间,单位ms
        animationDuration: 2000, // image完成一次切换需要的总时间,单位ms
        animationDirection: -1, // 1代表向右旋转，-1代表向左旋转
        perspective: 2000 // 就是perspective,单位px
      },
      urls: ['https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3346899083,378209289&fm=23&gp=0.jpg',
        'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4007000612,3029502591&fm=23&gp=0.jpg',
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1556026799,127855153&fm=23&gp=0.jpg',
        'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=438155865,1502224858&fm=23&gp=0.jpg',
        'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2414460273,1885753838&fm=23&gp=0.jpg',
        'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4294606076,2616318684&fm=23&gp=0.jpg',
        'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1155387389,1530103222&fm=23&gp=0.jpg',
        'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=601266480,2228607274&fm=23&gp=0.jpg'
      ]
    }
  },
  computed: {
    info (status) {
      let info = {
        'running': '转动',
        'paused': '暂停'
      }
      return info
    }
  },
  methods: {
    handleAnimation () {
      let status = this.animationStatus
      let child = this.$refs.child
      if (status === 'running') {
        this.animationStatus = 'paused'
        child.$emit('startAnimation')
      } else {
        this.animationStatus = 'running'
        child.$emit('pauseAnimation')
      }
    },
    switchImage (direction) {
      let child = this.$refs.child
      child.$emit('switchImage', direction)
    }
  }
}
</script>

<style type="text/css" lang="styl" scoped>
.wrapper
  margin: 200px auto
.operator
  margin-top: 100px
  text-align: center
  .item
    display: inline-block
    padding: 10px 30px
    border: 1px solid gray
    border-radius: 3px
    cursor: pointer
</style>
