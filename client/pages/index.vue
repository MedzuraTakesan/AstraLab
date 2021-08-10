<template>
  <div class="d-flex flex-fill flex-column">
    <astra-header
      class="text-center text-offset"
      value="Ready for a great User experience?"
    />
    <astra-description
      class="text-center text-offset main--astraDescription"
      value="Bring your media to the next level!"
    />
    <div class="main--operations d-flex text-offset">
      <astra-button fill>
        Sign Up
      </astra-button>
      <v-btn class="main--operations--arrow" large fab depressed>
        <v-icon color="white">
          mdi-arrow-right
        </v-icon>
      </v-btn>
    </div>
    <img class="main--svg" src="/svg/astra-woman.svg" />
  </div>
</template>
<script>
import { Component, Vue } from 'nuxt-property-decorator'
import AstraHeader from '~/components/base/text/AstraHeader'
import AstraDescription from '~/components/base/text/AstraDescription'
import AstraButton from '~/components/base/buttons/AstraButton'
@Component({
  components: { AstraButton, AstraDescription, AstraHeader }
})
export default class index extends Vue {
}
</script>

<style lang="scss">
@import "assets/alias";

  .main {
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
