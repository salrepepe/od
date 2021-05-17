const POPUP_FORM = "POPUP_FORM";
const POPUP_THANKS = "POPUP_THANKS"
const BURGERMENU = "BURGERMENU"

const initState = {
  isPopupFormActive: false,
  isPopupThanksActive: false,
  isBurgerMenuActive: false,
}


export default (state = initState, action) => {
  switch (action.type) {
    case POPUP_FORM: {
      return {...state, isPopupFormActive: action.isPopupFormActive}
    }

    case POPUP_THANKS: {
      return {...state, isPopupThanksActive: action.isPopupThanksActive}
    }

    case BURGERMENU: {
      return {...state, isBurgerMenuActive: action.isBurgerMenuActive}
    }

    default: {
      return state
    }
  }
}

export const popupFormToggle = (bool) => {
  return {
    type: POPUP_FORM,
    isPopupFormActive: bool
    }
};

export const popupThanksToggle = (bool) => {
  return {
    type: POPUP_THANKS,
    isPopupThanksActive: bool
    }
};

export const burgerMenuToggle = (bool) => {
  return {
    type:BURGERMENU,
    isBurgerMenuActive: bool
  }
}

