sap.ui.define(
	[
		"sap/ui/core/mvc/Controller",
		"sap/m/MessageBox",
		"SAP-1/webApp/models/formatter",
		"sap/ui/model/Filter",
		"sap/ui/model/FilterOperator"
	],
	function (Controller, MessageBox, formatter,  Filter, FilterOperator) {
		"use strict";
		return Controller.extend("SAP-1.webApp.controllers.App", {
			formatter : formatter,
			onShowHello : function () {
				var oBundle = this.getView().getModel("i18n").getResourceBundle();
				var sRecipient = this.getView().getModel("helloPanel").getProperty("/recipient/name");
				var sMsg = oBundle.getText("helloMsg", [sRecipient]);
				MessageBox.show(sMsg, {
				    icon: sap.m.MessageBox.Icon.NONE,
				    title: "MessageBox",
				    actions: sap.m.MessageBox.Action.OK,
				    onClose: null,
				    styleClass: "",
				    initialFocus: null,
				    textDirection: sap.ui.core.TextDirection.Inherit
				});
			},
			onFilterProducts : function (oEvent) {
				var aFilter = [], sQuery = oEvent.getParameter("query"),
				oList = this.getView().byId("productsList"),
				oBinding = oList.getBinding("items");
				if (sQuery) {
					aFilter.push(new Filter("ProductID", FilterOperator.Contains, sQuery));
				}
				oBinding.filter(aFilter);
			}
		});
	}
);
