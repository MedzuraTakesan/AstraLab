<template>
  <notifications group="error" position="bottom center" width="90%" :ignore-duplicates="true">
    <template slot="body" slot-scope="props">
      <div class="notificationErrors d-flex align-center">
        <span class="flex-fill text-center" v-text="props.item.text" />
        <v-btn
          icon
          x-small
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.25 0.758309C10.925 0.433309 10.4 0.433309 10.075 0.758309L5.99998 4.82498L1.92498 0.749976C1.59998 0.424976 1.07498 0.424976 0.749976 0.749976C0.424976 1.07498 0.424976 1.59998 0.749976 1.92498L4.82498 5.99998L0.749976 10.075C0.424976 10.4 0.424976 10.925 0.749976 11.25C1.07498 11.575 1.59998 11.575 1.92498 11.25L5.99998 7.17497L10.075 11.25C10.4 11.575 10.925 11.575 11.25 11.25C11.575 10.925 11.575 10.4 11.25 10.075L7.17497 5.99998L11.25 1.92498C11.5666 1.60831 11.5666 1.07498 11.25 0.758309Z" fill="white"/>
          </svg>
        </v-btn>
      </div>
    </template>
  </notifications>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component()
export default class NotificationErrors extends Vue {
}
</script>

<style lang="scss">
@import "assets/alias";

.notificationErrors {
  color: $astra-white;
  border-radius: 50px;
  font-size: 14px;
  padding: 15px 25px;
  background-color: #FF6683;
}
</style>
