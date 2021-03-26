<template>
  <div class="home">
    <BaseComponent msg="Put your content here"/>
  </div>
</template>

<script>
// @ is an alias to /src
import BaseComponent from '@/components/BaseComponent.vue'

export default {
  name: 'Home',
  components: {
    BaseComponent,
  }
}
</script>
