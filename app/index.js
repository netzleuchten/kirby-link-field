import App from "./App.vue";
import Preview from "./Preview.vue";

panel.plugin("oblik/linklegacy-field", {
	fields: {
		linklegacy: App,
	},
	components: {
		"k-link-field-preview": Preview,
	},
});
