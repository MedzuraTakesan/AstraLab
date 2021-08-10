<template>
  <div class="astraInput d-flex flex-column">
    <div class="d-flex justify-end astraInput--description align-center">
      <v-tooltip
        v-if="toolTip"
        v-model="show"
        class="astraInput--toolTip"
        content-class="right-arrow"
        top
      >
        <template #activator="{ on }">
          <v-btn
            icon
            x-small
            @click="show = !show"
          >
            <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.2">
                <path d="M7.13983 1.16667C3.92324 1.16667 1.3065 3.7834 1.3065 7C1.3065 10.2166 3.92324 12.8333 7.13983 12.8333C10.3564 12.8333 12.9732 10.2166 12.9732 7C12.9732 3.7834 10.3564 1.16667 7.13983 1.16667ZM6.89678 10.4028C6.49428 10.4028 6.16761 10.0761 6.16761 9.67361C6.16761 9.27111 6.49428 8.94444 6.89678 8.94444C7.29928 8.94444 7.62594 9.27111 7.62594 9.67361C7.62594 10.0761 7.29928 10.4028 6.89678 10.4028ZM8.9924 6.08951C8.84219 6.33014 8.55685 6.60042 8.13587 6.90083C7.45483 7.40444 7.47331 7.51625 7.47331 7.97222H6.27893C6.27893 7.6159 6.27115 7.34222 6.46365 7.00924C6.58664 6.79583 6.81219 6.56882 7.13983 6.32868C7.5331 6.04771 7.91518 5.77694 7.91518 5.30542C7.91518 4.86354 7.53699 4.70604 7.09511 4.70604C6.64449 4.70604 6.13067 4.85333 5.55365 5.14792L5.06219 4.16111C6.11074 3.5734 7.76546 3.3075 8.67011 4.04396C9.33414 4.585 9.33803 5.53632 8.9924 6.08951Z" fill="#1E1A3E" />
              </g>
            </svg>
          </v-btn>
        </template>
        <div class="astraInput--toolTip--text">
          <span v-text="toolTip" />
        </div>
      </v-tooltip>
    </div>
    <v-text-field
      rounded
      :append-icon="appendIcon"
      :rules="rules"
      :type="typeFormatted"
      :label="label"
      background-color="astraInput--input"
      :value="value"
      @change="change"
      @click:append="showPassword = !showPassword"
    >
      <template v-if="label" #label>
        <span class="astraInput--label" v-text="label" />
      </template>
    </v-text-field>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Emit } from 'nuxt-property-decorator'
import { mdiInformation } from '@mdi/js'
import { IAstraInput } from '~/interfaces/base/inputs/AstraInput'
import { validator, validationRules, validateType } from '~/constants/helpers/Validator'

@Component
export default class AstraInput extends Vue {
  @Prop({ default: null })readonly label?: IAstraInput['label'];
  @Prop({ default: null })readonly toolTip?: IAstraInput['toolTip'];
  @Prop({ default: false })readonly required?: IAstraInput['required'];
  @Prop({ default: 'text' })readonly type!: IAstraInput['type'];
  @Prop({ required: true, default: null })readonly value!: IAstraInput['value'];
  show = false
  showPassword = false

  icons = {
    mdiInformation
  }

  get rules (): validator {
    return validationRules[this.type as validateType]
  }

  get typeFormatted (): IAstraInput['type'] {
    if (this.type === 'password') {
      return this.showPassword ? 'text' : 'password'
    }
    return this.type
  }

  get appendIcon (): string | undefined {
    if (this.type === 'password') {
      return this.showPassword ? 'mdi-eye' : 'mdi-eye-off'
    }
    return undefined
  }

  @Emit('change')
  change (value: string): string {
    return value
  }
}
</script>

<style lang="scss">
@import "assets/alias";
.astraInput {
  &--input {
    height: 36px;
    background-color: #F3F3FA;
  }
  .error--text {
    .astraInput--input {
      background-color: $astra-pink;
    }
  }
  &--label {
    color: black;
  }
  &--description {
    height: $input-label-translate;
  }
  &--toolTip--text {
    max-width: 184px;
  }
  .v-text-field__details {
    padding: $text-field-outlined-rounded-padding;
  }
}
</style>
