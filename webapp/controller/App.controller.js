sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function(Controller, MessageToast) {
    'use strict';

    Controller.extend("opensap.myapp.controller.App", {

        onShowHello: function() {

            var oView = this.getView();
            var oBundle = oView.getModel('i18n').getResourceBundle();
            var sRecipient = oView.getModel('helloPanel').getProperty('/recipient/name');
            var sMsg = oBundle.getText("helloMsg", [sRecipient]);

            MessageToast.show(sMsg);
        }
    });
});
