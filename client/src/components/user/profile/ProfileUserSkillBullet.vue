<template>
<b-row class="mb-3">
  <b-col sm="12" class="mb-1">
    <dt>{{ title }}</dt>
  </b-col>
  <b-col sm="12" >
    <span class="bullet"  v-for="n in 10" :key="n" :class="{ 'bullet-fill' : counter[n] }">
     
    </span>
    <span class="progress-text text-muted-custom">{{ tag }}</span>
  </b-col>
</b-row>
</template>

<script>
export default {
  data () {
    return {
      counter: []
    }
  },
  created: function () {
    for (let i = 0; i <= this.filled; i++) {
      this.counter.push(true)
    }
  },
  props: {
    filled: {
      type: Number,
      required: true
    },
    title: String,
    tag: String
  }
}
</script>

<style>
.progress-text {
  display: inline-block;
  font-size: .8em;
  line-height: .938em;
}
.bullet {
  display: inline-block;
  border: 1px #c0e3e7 solid;
  width: .938em;
  height: .938em;
  border-radius: 50%;
  margin-right: .31em;
  line-height: .938em;
  vertical-align: middle;
}

.bullet-fill {
  background-color: #c0e3e7;
}
</style>
