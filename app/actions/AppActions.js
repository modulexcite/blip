/**
 * Copyright (c) 2014, Tidepool Project
 *
 * This program is free software; you can redistribute it and/or modify it under
 * the terms of the associated License, which is identical to the BSD 2-Clause
 * License as published by the Open Source Initiative at opensource.org.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the License for more details.
 *
 * You should have received a copy of the License along with this program; if
 * not, you can obtain one from Tidepool Project at tidepool.org.
 */

var AppDispatcher = require('../AppDispatcher');
var AppConstants = require('../AppConstants');

var AppActions = {

  dismissBrowserWarning: function() {
    AppDispatcher.dispatch({type: AppConstants.ui.DISMISSED_BROWSER_WARNING});
  },

  acceptTerms: function() {
    AppDispatcher.dispatch({type: AppConstants.ui.ACCEPTED_TERMS});
  },

  hideWelcomeSetup: function() {
    AppDispatcher.dispatch({type: AppConstants.ui.HID_WELCOME_SETUP});
  }

};

module.exports = AppActions;
