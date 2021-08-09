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

let handler

export const actions = {
  toggleLoginCard({ commit, state }) {
    const onOutsideClick = (event) => {
      const loginCard =
        document.querySelector('.login-card')
      const accountButton = document.querySelector(
        '.account-button'
      )
      const bulb = document.querySelector('.bulb')
      if (
        !loginCard.contains(event.target) &&
        !accountButton.contains(event.target) &&
        !bulb.contains(event.target)
      ) {
        window.removeEventListener('click', onOutsideClick)
        commit('closeCards')
      }
    }

    if (state.isLoginCardOpen) {
      window.removeEventListener('click', onOutsideClick)
      commit('closeCards')
    } else {
      commit('openLoginCard')
      window.removeEventListener('click', handler)
      handler = onOutsideClick
      window.addEventListener('click', handler, false)
    }
  },

  toggleCartCard({ commit, state }) {
    const onOutsideClick = (event) => {
      const cartCard = document.querySelector('.cart-card')
      const cartButton =
        document.querySelector('.cart-button')
      const bulb = document.querySelector('.bulb')
      if (
        !cartCard.contains(event.target) &&
        !cartButton.contains(event.target) &&
        !bulb.contains(event.target)
      ) {
        commit('closeCards')
        window.removeEventListener('click', onOutsideClick)
      }
    }
    if (state.isCartCardOpen) {
      commit('closeCards')
      window.removeEventListener('click', onOutsideClick)
    } else {
      commit('openCartCard')
      window.removeEventListener('click', handler)
      handler = onOutsideClick
      window.addEventListener('click', handler)
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
