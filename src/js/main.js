import BaseHelpers from './helpers/base-helpers';
import BurgerMenu from './modules/burger-menu';

BaseHelpers.checkWebpSupport();

BaseHelpers.addTouchClass();

new BurgerMenu().init();
