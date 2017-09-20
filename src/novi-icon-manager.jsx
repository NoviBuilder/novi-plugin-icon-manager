const React = novi.react.React;
import IconEditor from "./IconEditor";
import IconSettings from "./IconSettings";

const Plugin = {
    name: "novi-plugin-icon-manager",
    title: "Novi Icon",
    description: "Novi Plugin for change icons",
    version: "1.0.1",
    dependencies: {
        novi: "0.8.5"
    },
    defaults: {
        querySelector: ".novi-icon"
    },
    ui: {
        editor: [IconEditor],
        settings: <IconSettings />,
    }
};

novi.plugins.register(Plugin);