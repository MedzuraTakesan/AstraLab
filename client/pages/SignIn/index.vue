<template>
  <div class="d-flex flex-column">
    <astra-header
      class="text-offset text-center"
      value="Sign Up"
    />
    <astra-form
      v-model="inputs"
      class="signIn--offset"
      ref="astraForm"
      @send="onSend"
    >
      <template #button>
        Sign In
      </template>
    </astra-form>
    <span class="text-offset text-center">
      Don’t have an account yet?
      <a class="text--astra--indigo" href="/signUp">Sign Up</a>
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
  Email,
  Password
}

@Component({
  components: { AstraForm, AstraHeader }
})
export default class index extends Vue {
  @Action(ActionType.SIGN_IN) protected signIn;
  @State('auth') readonly auth;

  @Watch('auth')
  onAuthChanged (value: boolean): void {
    if (value) {
      this.$router.replace('/Main')
    }
  }

  $refs!: {
    astraForm: AstraForm
  }

  inputs: IAstraForm['inputs'] = [
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
      value: 'asdfgWWW@@@@'
    }
  ]

  onSend (): void {
    this.signIn({
      email: this.inputs[INPUTS.Email].value,
      password: this.inputs[INPUTS.Password].value,
      errBack: () => {
        this.$notify({
          group: 'error',
          text: 'Wrong email or password!'
        })
        this.$refs?.astraForm?.reset()
      }
    })
  }
}
</script>

<style lang="scss">
@import "assets/alias";
  .signIn--offset {
    margin: $signFormOffset;
  }
</style>
