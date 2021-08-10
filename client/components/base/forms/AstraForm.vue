<template>
  <v-form ref="form" class="astralForm d-flex flex-column background--astra--white">
    <astra-input
      v-for="(input, index) in inputs"
      :key="index"
      v-bind="input"
      @change="onChange(index, $event)"
    />
    <astra-button fill color="info" :disabled="buttonDisablesStatus" @click="send">
      <slot name="button">
        button
      </slot>
    </astra-button>
  </v-form>
</template>
<script lang="ts">
import { Component, Prop, Emit, Vue, Model } from 'nuxt-property-decorator'
import type Vuetify from 'vuetify'
import AstraInput from '~/components/base/inputs/AstraInput.vue'
import { IAstraForm } from '~/interfaces/base/form/IAstraForm'
import AstraButton from '~/components/base/buttons/AstraButton.vue'

@Component({
  components: { AstraButton, AstraInput }
})
export default class AstraForm extends Vue {
  @Model('change', { required: true, default: [] }) readonly inputs!: IAstraForm['inputs']
  @Prop({ default: undefined }) readonly fill!: boolean

  mounted (): void {
    this.buttonDisablesStatus = !this.$refs?.form?.validate()
  }

  $refs!: {
    form: Vuetify['form']
  }

  buttonDisablesStatus = true

  public reset ():void {
    this.$refs?.form?.reset()
  }

  @Emit('change')
  onChange (index: number, value: string): IAstraForm['inputs'] {
    this.buttonDisablesStatus = !this.$refs?.form?.validate()
    const inputs = [...this.inputs]
    inputs[index].value = value
    return inputs
  }

  @Emit('send')
  send (): true {
    return true
  }
}
</script>

<style lang="scss">
 .astralForm {
   border-radius: 40px;
   padding: 23px;
 }
</style>
