<template>
  <div class="d-flex flex-column">
    <astra-header
      class="text-offset text-center"
      value="Sign Up"
    />
    <astra-form
      v-model="inputs"
      class="signUp--offset"
      @send="onSend"
    >
      <template #button>
        Sign Up
      </template>
    </astra-form>
    <span class="text-offset text-center">
      Already have an account?
      <a class="text--astra--indigo" href="/signIn">Sign In</a>
    </span>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Action, Watch, State } from 'nuxt-property-decorator'
import { ActionType } from '~/store'
import AstraHeader from '~/components/base/text/AstraHeader.vue'
import AstraForm from '~/components/base/forms/AstraForm.vue'
import { IAstraForm } from '~/interfaces/base/form/IAstraForm'

enum INPUTS {
  FullName,
  Email,
  Password,
  RepeatPassword
}

@Component({
  components: { AstraForm, AstraHeader }
})
export default class index extends Vue {
  @Action(ActionType.SIGN_UP) protected signUp;
  @State('auth') readonly auth;

  @Watch('auth')
  onAuthChanged (value: boolean): void {
    if (value) {
      this.$router.replace('/Main')
    }
  }

  inputs: IAstraForm['inputs'] = [
    {
      label: 'Full name',
      required: true,
      type: 'fullName',
      value: 'Enter Name'
    },
    {
      label: 'Email',
      required: true,
      type: 'email',
      value: 'dsads@dsad'
    },
    {
      label: 'Password',
      required: true,
      type: 'password',
      toolTip: 'Password must contain 8+ symbols, 1 special and 2 capital letters',
      value: 'asdfgWWW@@@@'
    },
    {
      label: 'Repeat password',
      type: 'password',
      required: true,
      value: 'asdfgWWW@@@@'
    }
  ]

  onSend (): void {
    console.log('sad')
    if (this.inputs[INPUTS.Password].value !== this.inputs[INPUTS.RepeatPassword].value) {
      this.$notify({
        group: 'error',
        text: 'Repeat Password incorrect!'
      })
    } else {
      this.signUp({
        email: this.inputs[INPUTS.Email].value,
        password: this.inputs[INPUTS.Password].value,
        errBack: () => {
          this.$notify({
            group: 'error',
            text: 'Email is busy!'
          })
        }
      })
    }
  }
}
</script>

<style lang="scss">
@import "assets/alias";
  .signUp--offset {
    margin: $signFormOffset;
  }
</style>
