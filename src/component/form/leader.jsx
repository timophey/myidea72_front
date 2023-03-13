import FormBase from "./base";

class FormLeader extends FormBase{

    prefix = "leader";
    fieldsets = [
        {
            helper: "",
            groups: [
                {
                    name: "ФИО Руководителя:",
                    type: 'text',
                    fields:[
                        {
                            name: 'leader_name',
                            type: 'text',
                            value: "",
                            placeholder: "Иванов Иван Иванович",
                        }
                    ]
                },{
                    name: "Дата рождения:",
                    type: 'text',
                    fields:[
                        {
                            name: 'leader_bday',
                            type: 'date',
                            value: "",
                            placeholder: "ХХ/хх/хххх",
                        }
                    ]
                }
            ],
            horisontal: true,
        },
        {
            helper: "Контакты руководителя",
            groups: [
                {
                    name: "E-mail:",
                    fields:[
                        {
                            name: 'leader_email',
                            type: 'email',
                            // value: "Отправить заявку",
                            placeholder: "Pochta@mail.ru",
                        }
                    ]
                },
                {
                    name: "Телефон:",
                    fields:[
                        {
                            name: 'leader_phone',
                            type: 'text',
                            // value: "Отправить заявку",
                            placeholder: "+7 (987) 65 43 21",
                        }
                    ]
                },
                {
                    name: "Ссылка вконтакте:",
                    fields:[
                        {
                            name: 'leader_link',
                            type: 'text',
                            // value: "Отправить заявку",
                            placeholder: "vk.com/mylink",
                        }
                    ]
                },
            ]
        },
        {
            helper: "В данном поле необходимо указать информацию, которая поможет экспертам конкурса убедиться в том, что руководитель проекта обладает достаточными знаниями, опытом и компетенциями для качественной реализации проекта",
            groups: [
                {
                    name: "Опыт руководителя:",
                    type: 'textarea',
                    fields:[
                        {
                            name: 'leader_ux',
                            type: 'text',
                            // value: "Отправить заявку",
                            // placeholder: "vk.com/mylink",
                        }
                    ]
                },
                {
                    name: "Адрес регистрации руководителя проекта:",
                    type: 'textarea',
                    fields:[
                        {
                            name: 'leader_addr',
                            type: 'text',
                        }
                    ]
                }
            ]
        },{
            helper:"Это видеоролик о проекте, в рамках которого руководитель проекта рассказывает о планируемой Реализации проекта (не менее одной минуты)",
            groups:[
                {
                    name: 'Видео-визитка:',
                    fields:[
                        {
                            name: 'leader_vc',
                            placeholder: 'Youtube.com/link',
                        }
                    ]
                }
            ]
        }
    ]

    
}

export default FormLeader;