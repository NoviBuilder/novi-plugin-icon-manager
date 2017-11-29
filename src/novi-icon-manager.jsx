const React = novi.react.React;
import IconEditor from "./IconEditor";
import IconSettings from "./IconSettings";
const Language = novi.language;
const Plugin = {
    name: "novi-plugin-icon-manager",
    title: "Novi Icon",
    description: "Novi Plugin for change icons",
    version: "1.0.2",
    dependencies: {
        novi: "0.8.6"
    },
    defaults: {
        querySelector: ".novi-icon"
    },
    ui: {
        editor: [IconEditor],
        settings: <IconSettings />,
    },
    onLanguageChange: onLanguageChange
};

function onLanguageChange(plugin){
    let messages = Language.getDataByKey("novi-plugin-icon-manager");
    plugin.ui.editor[0].title = messages.editor.title;
    plugin.ui.editor[0].tooltip = messages.editor.tooltip;
    return plugin;
}
novi.plugins.register(Plugin);