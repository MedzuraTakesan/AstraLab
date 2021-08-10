import { validateType } from '~/constants/helpers/Validator'

export interface IAstraInput {
  /**
   * Лэйбл инпута
   **/
  label?: string;
  /**
   * Туллтип у инпута
   */
  toolTip?: string;
  /**
   * Туллтип у инпута
   */
  required?: boolean;
  /**
   * Тип инпута
   */
  type?: validateType;
  /**
   * Значение поля
   */
  value: string;
}
