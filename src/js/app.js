'use strict';

import header from './blocks/header';
import adapt_table from './blocks/adapt-table';
import swiper from './blocks/carousel';
import './blocks/popup';

$(() => {
  header();
  adapt_table();
  swiper();
});