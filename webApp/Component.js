sap.ui.define(
	[ 
		"sap/ui/core/UIComponent"
	],
	function (UIComponent) { 
		"use strict";
		
		return UIComponent.extend("SAP-1.webApp.Component", {
			metadata: { manifest: "json" },
			init : function () {
				UIComponent.prototype.init.apply(this, arguments);
				this.getModel().setUseBatch(false);
			}
		});
	}
);
