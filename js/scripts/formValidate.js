export const formValidate = (form, select1, select2, field1, field2, from_btn) => {
    const { elements } = form;
    Array.from(elements)
        .forEach((element) => {
            element.addEventListener("input", (event) => {
                event.preventDefault();
                serializeInput(select1, select2, field1, field2, from_btn)
            })
        })
}

const serializeInput = (select1, select2, field1, field2, form_btn) => {
    if (field1.value.length > 0 && field2.value.length > 0 && select1.value != "Марка" && select2.value != "Модель") {
        form_btn.classList.add("form__button-active");
    } else {
        form_btn.classList.remove("form__button-active");
    }
}