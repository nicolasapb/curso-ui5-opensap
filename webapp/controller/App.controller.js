sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/m/GroupHeaderListItem',
    "sap/m/MessageToast",
    'sap/ui/model/Filter',
    "./Formatter"
], function(Controller, GroupHeaderListItem, MessageToast, Filter, Formatter) {
    'use strict';

    Controller.extend("opensap.myapp.controller.App", {

        formatter: Formatter,

        onShowHello: function() {

            var oView = this.getView();
            var oBundle = oView.getModel('i18n').getResourceBundle();
            var sRecipient = oView.getModel('helloPanel').getProperty('/recipient/name');
            var sMsg = oBundle.getText("helloMsg", [sRecipient]);

            MessageToast.show(sMsg);
        },

        getGroupHeader: function (oGroup){
			return new GroupHeaderListItem( {
				title: oGroup.key,
				upperCase: false
			} );
		},

        onFilterProducts: function(oEvent) {

            var aFilters = [];
            var sQuery = oEvent.getSource().getValue();
            if (sQuery && sQuery.length > 0) {
                var filter = new Filter("ProductID", sap.ui.model.FilterOperator.Contains, sQuery);
                aFilters.push(filter);
            }

            var oList = this.byId("invoiceList");
            var oItems = oList.getBinding("items");
            oItems.filter(aFilters, "Application");
        },

        onItemSelected: function(oEvent) {

            var oItemContextPath = oEvent.getParameter("listItem")
                                     .getBindingContextPath();
            console.log(oItemContextPath);

            var oProductDetailPanel = this.byId('productDetailsPanel');
            oProductDetailPanel.bindElement({path: oItemContextPath});
            oProductDetailPanel.setVisible(true);
        }
    });
});
