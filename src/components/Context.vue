<template>
  <div class="hello">
    <h1 class="title">{{ msg }}</h1>
    <ul class="list">
      <router-link to="/task1" tag="li" class="item">
        <a class="text">有趣的鼠标悬浮模糊效果</a>
      </router-link>
      <router-link to="/task2" tag="li" class="item">
        <a class="text">CSS3饼状loading效果</a>
      </router-link>
      <router-link to="/task3" tag="li" class="item">
        <a class="text">CSS3实现3D 轮播图</a>
      </router-link>
      <router-link to="" tag="li" class="item">
        <a class="text">这是个空链接</a>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'context',
  data () {
    return {
      msg: 'IFE2017 任务列表'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
  list-style: decimal inside;
}
.hello {
  margin: 0 auto;
  text-align: center;
}
.title {
  margin: 20px 0 40px;
  text-shadow: 2px 2px 1px gray;
  font-weight: normal;
}

.list {
  font-family: 'simsun','helvetica';
  margin: 0 auto;
  width: 500px;
  text-align: left;
  font-size: 16px;
  border: 1px solid #aaaaaa;
}

.list .item {
  padding: 8px 0 8px 10px;
  background-color: #aaaaaa;
}

.list .item:nth-of-type(even) {
  background-color: white;
}

.list .item .text {
  display: inline-block;
}

.list .item:hover .text {
  text-decoration: underline;
}
</style>
