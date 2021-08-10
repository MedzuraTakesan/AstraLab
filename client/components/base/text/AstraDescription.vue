<template>
  <span class="text--astra--indigo base__astraDescription" v-text="value"/>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class AstraDescription extends Vue {
  @Prop({required: true, default: ''}) readonly value!: string
}
</script>

<style lang="scss">
.base__astraDescription {
  font-size: 14px;
  letter-spacing: 0.02em;
  font-weight: 400;
}
</style>
