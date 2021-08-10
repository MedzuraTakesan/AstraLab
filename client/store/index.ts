import type { Context } from '@nuxt/types'
import type { GetterTree, ActionTree, MutationTree } from 'vuex'

export interface RootState {
  auth: boolean,
}

export const state = (): RootState => ({
  auth: false
})

export enum MutationType {
  CHANGE_AUTH= 'changeDescription',
  CANCEL_AUTH= 'changeDescription'
}
export enum ActionType {
  SIGN_IN = 'changeDescriptionAction',
  SIGN_UP = 'changeDescriptionAction',
  SIGN_OUT = 'changeDescriptionAction'
}

export const mutations: MutationTree<RootState> = {
  [MutationType.CHANGE_AUTH]: (state, newStateAuth: RootState['auth']) => { state.auth = newStateAuth }
}

export const actions: ActionTree<RootState, RootState> = {

}
