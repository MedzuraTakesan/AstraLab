<template>
  <v-form ref="form" class="astralForm background--astra--white">
    <astra-input
      v-for="(input, index) in inputs"
      :key="index"
      v-bind="input"
    />
  </v-form>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import AstraInput from '~/components/base/inputs/AstraInput.vue'
import { IAstraForm } from '~/interfaces/base/form/IAstraForm'
@Component({
  components: { AstraInput }
})
export default class AstraForm extends Vue {
  @Prop({ default: undefined }) readonly fill!: boolean
  @Prop({ default: undefined }) readonly inputs!: IAstraForm['inputs']
}
</script>

<style lang="scss">
 .astralForm {
   border-radius: 40px;
   padding: 23px;
 }
</style>
