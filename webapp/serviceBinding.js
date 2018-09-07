function initModel() {
	var sUrl = "/destinations/ES5/sap/opu/odata/IWBEP/GWSAMPLE_BASIC/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}
