require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';

import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import calc from './modules/calc';
import cards from './modules/cards';
import forms from './modules/forms';
import slider from './modules/slider';
import {openModal} from './modules/modal'
window.addEventListener('DOMContentLoaded', function () {
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 300000);
    tabs('.tabheader__item','.tabcontent','.tabheader__items','tabheader__item_active');
    modal('[data-modal]', '.modal', modalTimerId);
    timer('.timer', '2022-05-11');
    cards();
    calc();
    forms('form', modalTimerId);
    slider({
        container : '.offer__slider',
        prevArrow : '.offer__slider-prev',
        nextArrow : '.offer__slider-next',
        slide: '.offer__slide',
        totalCounter : '#total',
        currentCounter : '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner',
    });
});