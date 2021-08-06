export const state = () => ({
  isLoginCardOpen: false,
  isCartCardOpen: false,
})

export const getters = {
  isLoginCardOpen: (state) => {
    return state.isLoginCardOpen
  },
  isCartCardOpen: (state) => {
    return state.isCartCardOpen
  },
}

export const actions = {
  toggleLoginCard({ commit, state }) {
    if (state.isLoginCardOpen) {
      commit('closeCards')
    } else {
      commit('openLoginCard')
      const onOutsideClick = (event) => {
        const loginCard =
          document.querySelector('.login-card')
        const accountButton = document.querySelector(
          '.account-button'
        )
        if (
          !loginCard.contains(event.target) &&
          !accountButton.contains(event.target)
        ) {
          commit('closeCards')
          window.removeEventListener(
            'click',
            onOutsideClick
          )
        }
      }

      window.addEventListener('click', onOutsideClick)
    }
  },

  toggleCartCard({ commit, state }) {
    if (state.isCartCardOpen) {
      commit('closeCards')
    } else {
      commit('openCartCard')
      const onOutsideClick = (event) => {
        const cartCard =
          document.querySelector('.cart-card')
        const cartButton =
          document.querySelector('.cart-button')
        if (
          !cartCard.contains(event.target) &&
          !cartButton.contains(event.target)
        ) {
          commit('closeCards')
          window.removeEventListener(
            'click',
            onOutsideClick
          )
        }
      }

      window.addEventListener('click', onOutsideClick)
    }
  },
}

export const mutations = {
  openLoginCard(state) {
    state.isLoginCardOpen = true
    state.isCartCardOpen = false
  },
  openCartCard(state) {
    state.isCartCardOpen = true
    state.isLoginCardOpen = false
  },
  closeCards(state) {
    state.isCartCardOpen = false
    state.isLoginCardOpen = false
  },
}
