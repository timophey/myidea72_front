// import React, { Component } from "react";
import FormBase from "./base";

class FormMentor extends FormBase{
    prefix = 'mentor';
    fieldsets = [
        /*{
            helper: 'Тот, кто делится опытом и консультирует, работает с руководителем и командой проекта над идеей и концепцией проекта, его организацией, реализацией, будет сопровождать проект на всех этапах до его завершения'
        },*/
        {
            groups: [
                {
                    name: 'ФИО наставника:',
                    fields: [
                        {
                            name: 'mentor_name'
                        }
                    ]
                }
            ]
        },
        {
            helper: "Контакты наставника", 
            groups:[
                {
                    name: "Телефон:",
                    type: 'text',
                    fields:[
                        {
                            name: 'mentor_phone',
                            type: 'text',
                            // value: "Отправить заявку",
                            placeholder: "+7 (987) 65 43 21",
                        }
                    ]
                },
                {
                    name: "Ссылка вконтакте:",
                    type: 'text',
                    fields:[
                        {
                            name: 'mentor_link',
                            type: 'text',
                            // value: "Отправить заявку",
                            placeholder: "vk.com/mylink",
                        }
                    ]
                },
            ]
        },
        {
            helper: 'Компетенции / опыт, подтверждающие возможность участника выполнять роль в команде:',
            groups: [
                {
                    name: 'Компетенции наставника:',
                    type: 'textarea',
                    fields:[
                        {
                            name: 'part_skill',
                        }
                    ]
                }
            ]
        }
    ];
}

export default FormMentor;