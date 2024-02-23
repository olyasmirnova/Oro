import BaseHelpers from './helpers/base-helpers';
import BurgerMenu from './modules/burger-menu';
import MobileChecker from "./helpers/mobile-checker.js";

BaseHelpers.checkWebpSupport();

BaseHelpers.addTouchClass();

const mobileChecker = MobileChecker.isAny;

if (!mobileChecker) {
    document.body.classList.add("desktop");
} else (
    document.body.classList.remove("desktop")
)

new BurgerMenu().init();
