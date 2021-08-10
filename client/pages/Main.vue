<template>
  <div class="d-flex flex-fill flex-column">
    <astra-header
      class="main--header text-center text-offset"
      value="Ready for a great User experience?"
    />
    <img src="/svg/astra-woman-chill.svg">
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import AstraHeader from '~/components/base/text/AstraHeader'
@Component({
  components: { AstraHeader }
})
export default class index extends Vue {

}
</script>

<style lang="scss">
.main--header {
  margin-top: auto;
}
</style>
