export const lineImage =  require("../assets/images/line.png");
export const coinImage =  require("../assets/images/coin.png");
export const handImage =  require("../assets/images/hand.png");
export const bankImage =  require("../assets/images/Bank.png");
export const cashImage =  require("../assets/images/Cash.png");
export const logoImage =  require("../assets/images/logo.png");
export const yellowGlowImage = require("../assets/images/bg.png");
export const purpleGlow = require("../assets/images/purpleGlow.png");

export const SendMoeny = require("../assets/images/SendMoeny.png")
export const Trust = require("../assets/images/Trust.png")
export const ReceiveMoney= require("../assets/images/ReceiveMoney.png")
export const DimondIcon = require("../assets/images/dimond.png")

// models/index.ts

import { Models } from '@rematch/core';
import { form } from './form'; // Assuming you have a form model

export interface RootModel extends Models<RootModel> {
  form: typeof form;
}

export const models: RootModel = {
  form,
};


// constants.ts

export const FORM_IDS = {
    USER_REGISTRATION_FORM: 'USER_REGISTRATION_FORM',
    EVENT_FORM: 'EVENT_FORM',
    ERRORS: 'ERRORS',
  };
  
