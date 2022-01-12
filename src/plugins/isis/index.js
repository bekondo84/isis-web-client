import IFormContainer from "./directives/formContent";
import IInput from "./components/IInput";
import IFormRow from "./components/IFormRow"; 
import ISectionRow from "./components/ISectionRow";
import ITabRow from "./components/ITabRow"

export default {
    install: function(Vue) {
        
       // Vue.filter()
       Vue.directive("iFormContainer", IFormContainer);
       Vue.component("iFormInput", IInput);
       Vue.component("iFormRow", IFormRow);
       Vue.component("iSectionRow", ISectionRow);
       Vue.component("iTabRow", ITabRow);
    }
}