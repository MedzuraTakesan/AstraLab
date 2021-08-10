<template>
  <div class="d-flex flex-fill flex-column">
    <astra-header
      class="text-center text-offset"
      value="Ready for a great User experience?"
    />
    <astra-description
      class="text-center text-offset index--astraDescription"
      value="Bring your media to the next level!"
    />
    <div class="index--operations d-flex text-offset">
      <astra-button fill @click="signUp">
        Sign Up
      </astra-button>
      <v-btn class="index--operations--arrow" large fab depressed @click="signIn">
        <v-icon color="white">
          mdi-arrow-right
        </v-icon>
      </v-btn>
    </div>
    <img class="index--svg" src="/svg/astra-woman.svg">
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import AstraHeader from '~/components/base/text/AstraHeader'
import AstraDescription from '~/components/base/text/AstraDescription'
import AstraButton from '~/components/base/buttons/AstraButton'
@Component({
  components: { AstraButton, AstraDescription, AstraHeader }
})
export default class index extends Vue {
  signIn (): void {
    this.$router.replace('/signIn')
  }

  signUp (): void {
    this.$router.replace('/signUp')
  }
}
</script>

<style lang="scss">
@import "assets/alias";

  .index {
    &--astraDescription {
      margin-top: 17px;
    }
    &--operations {
      padding: 0 $offset + 10px;
    }
    &--operations--arrow {
      margin-left: 16px;
    }
    &--svg {
      margin-top: auto;
    }
  }
</style>
