import type { Context } from '@nuxt/types'
import type { GetterTree, ActionTree, MutationTree } from 'vuex'

export interface RootState {
  auth: boolean,
}

export const state = (): RootState => ({
  auth: false
})

export enum MutationType {
  CHANGE_AUTH= 'changeDescription'
}
export enum ActionType {
  SIGN_IN = 'changeDescriptionAction',
  SIGN_UP = 'changeDescriptionAction',
}

export const mutations: MutationTree<RootState> = {
  [MutationType.CHANGE_AUTH]: (state, newStateAuth: RootState['auth']) => { state.auth = newStateAuth }
}

export const actions: ActionTree<RootState, RootState> = {
  [ActionType.SIGN_IN]: ({ commit, dispatch }, { email, password, errBack }: {email: string, password: string, errBack: () => void}) => {
    if (localStorage.getItem(email) && localStorage.getItem(email) === password) {
      commit(MutationType.CHANGE_AUTH, true)
    } else {
      errBack()
    }
  },
  [ActionType.SIGN_UP]: ({ commit }, { email, password, errBack }: {email: string, password: string, errBack: () => void}) => {
    if (!localStorage.getItem(email)) {
      localStorage.setItem(email, password)
      commit(MutationType.CHANGE_AUTH, true)
    } else {
      errBack()
    }
  }
}
