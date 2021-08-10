<template>
  <div class="d-flex flex-column">
    <astra-header
      class="text-offset text-center"
      value="Sign Up"
    />
    <astra-form
      class="signUp--offset"
      :inputs="inputs"
    />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import AstraHeader from '~/components/base/text/AstraHeader.vue'
import AstraForm from '~/components/base/forms/AstraForm.vue'
import { IAstraForm } from '~/interfaces/base/form/IAstraForm'
@Component({
  components: { AstraForm, AstraHeader }
})
export default class index extends Vue {
  inputs: IAstraForm['inputs'] = [
    {
      label: 'Full name',
      required: true,
      value: ''
    },
    {
      label: 'Email',
      required: true,
      type: 'email',
      value: ''
    },
    {
      label: 'Password',
      required: true,
      type: 'password',
      toolTip: 'Password must contain 8+ symbols, 1 special and 2 capital letters',
      value: ''
    },
    {
      label: 'Repeat password',
      required: true,
      value: ''
    }
  ]
}
</script>

<style lang="scss">
@import "assets/alias";
  .signUp--offset {
    margin: $signFormOffset;
  }
</style>
