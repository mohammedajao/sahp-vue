<template>
    <dl class="text-left">
      <b-row style="max-width: 300px;" v-for="(item, index) in list" :key="index">
        <b-col md="6">
          <dt>{{ item.title }}</dt>
        </b-col>
        <b-col md="6">
          <dd>{{ item.text }}</dd>
        </b-col>
      </b-row>
    </dl>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: {
    list: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>

</style>
