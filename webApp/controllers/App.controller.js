sap.ui.define(
	[
		"sap/ui/core/mvc/Controller",
		"sap/m/MessageBox"
	],
	function (Controller, MessageBox) {
		"use strict";
		return Controller.extend("SAP-1.webApp.controllers.App", {
			onShowHello : function () {
				var oBundle = this.getView().getModel("i18n").getResourceBundle();
				var sRecipient = this.getView().getModel("helloPanel").getProperty("/recipient/name");
				var sMsg = oBundle.getText("helloMsg", [sRecipient]);
				MessageBox.show(sMsg, {
				    icon: sap.m.MessageBox.Icon.NONE,
				    title: "",
				    actions: sap.m.MessageBox.Action.OK,
				    onClose: null,
				    styleClass: "",
				    initialFocus: null,
				    textDirection: sap.ui.core.TextDirection.Inherit
				});
			}
		});
	}
);
