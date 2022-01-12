export default {
    update(el, binding) {
        console.log('Call of directive '+el+" with biending : "+binding.value)
        let meta = binding.value ;

        if (meta == null) {
            return
        }

        if (meta.commons != null && meta.commons.length > 0) {
            formRowBuilder(el, meta.commons[0]);
        }
        
    }
}
function formRowBuilder(el, form) {
   
    if (form == null) {
        return 
    }
    let formRow = document.createElement('div');
    formRow.setAttribute('class', 'form-row');
     //Build Field
     fieldsFormBuilder(formRow, form.fields);
    //Add Fields 
    el.appendChild(formRow);

    if (form.sections != null) {
        form.sections.forEach(section => {
           sectionFormBuilder(el, section);
        });
    }
}

function sectionFormBuilder(el , section) {
    if (section == null) {
        return
    }
    
    let fieldset = document.createElement('fieldset') ;
    let legend = document.createElement('legend');
    legend.innerHTML = section.name ;
    fieldset.appendChild(legend);
    let formRow = document.createElement('div');
    fieldsFormBuilder(formRow, section.fields);
    fieldset.appendChild(formRow);

    el.appendChild(fieldset);
}
function fieldsFormBuilder(el, fields) {
     if (fields == null || fields.length <= 0) {
         return 
     }
     fields.forEach(field => {
         fieldFormBuilder(el, field);
     });
}
function fieldFormBuilder(el, field) {
    if ("text , number".includes(field.widget) ) {
         inputForm(el, field);
    }
}
function inputForm(el, field) {
    let input = document.createElement('i-form-input');
    input.setAttribute(':label', field.label);
    input.setAttribute(':id', field.fieldname+(Math.random()*1000));
    input.setAttribute(':type', field.widget);
    input.setAttribute(':placeholder', field.description);
    input.setAttribute('class', 'col-md-4 mb-3');
    el.appendChild(input);
}