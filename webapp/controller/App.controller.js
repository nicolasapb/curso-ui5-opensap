sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "./Formatter"
], function(Controller, MessageToast, Formatter) {
    'use strict';

    Controller.extend("opensap.myapp.controller.App", {

        formatter: Formatter,

        onShowHello: function() {

            var oView = this.getView();
            var oBundle = oView.getModel('i18n').getResourceBundle();
            var sRecipient = oView.getModel('helloPanel').getProperty('/recipient/name');
            var sMsg = oBundle.getText("helloMsg", [sRecipient]);

            MessageToast.show(sMsg);
        }
    });
});
