sap.ui.define(
	[
		"sap/ui/core/mvc/Controller",
		"sap/m/MessageBox"
	],
	function (Controller, MessageBox) {
		"use strict";
		return Controller.extend("SAP-1.webApp.controllers.App", {
			onShowHello : function () {
				MessageBox.show("Hello openSAP", {
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
