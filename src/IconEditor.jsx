const React = novi.react.React;
const Icon = novi.ui.icon;
const Icons = novi.ui.icons;
const Types = novi.types;

const EditorItem = {
    trigger: <Icon>{Icons.ICON_ICONS_2}</Icon>,
    tooltip: "Replace Icon",
    closeIcon: "submit",
    title: "Replace icon",
    onTriggerClick: onClick
};

export default EditorItem;

function onClick(element) {
    novi.iconManager.choose({onSubmit: onSubmit.bind(this,element), element})
}

function onSubmit(element, oldClass, newClass){

    let classList = element.getAttribute("class").split(" ");
    let targetClass = oldClass ? oldClass.split(" ") : [];

    for (let i= classList.length -1; i >= 0; i--){
        for (let j=0; j <= targetClass.length -1; j++){
            if (classList[i] === targetClass[j]) classList.splice(i, 1);
        }
    }

    classList = classList.join(" ");
    classList += ` ${newClass}`;

    novi.element.setAttribute(element, "class", classList);
    element.setAttribute("class", classList);
}
