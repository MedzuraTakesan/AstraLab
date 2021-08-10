<template>
  <span class="text--astra--indigo base__astraHeader" v-text="value"/>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class AstraHeader extends Vue {
  @Prop({required: true, default: ''}) readonly value!: string
}
</script>

<style lang="scss">
.base__astraHeader {
  font-size: 22px;
  letter-spacing: 0.02em;
  font-weight: 800;
}
</style>
