import React, { Component } from "react";
import FormBase from "./base";

class FormTeam extends FormBase{

    fieldsets = [
        {
            helper: "",
            horisontal: true,
            groups: [
                {
                    name: "ФИО Участника",
                    type: 'text',
                    fields:[
                        {
                            name: 'part_name',
                            type: 'text',
                            value: "",
                            placeholder: "Иванов Иван Иванович",
                        }
                    ]
                },{
                    name: "Дата рождения",
                    type: 'text',
                    fields:[
                        {
                            name: 'part_name',
                            type: 'date',
                            value: "",
                            placeholder: "ХХ/хх/хххх",
                        }
                    ]
                }
            ],
        },
        {
            helper: "Контакты участника", 
            groups:[
                {
                    name: "Телефон:",
                    type: 'text',
                    fields:[
                        {
                            name: 'part_phone',
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
                            name: 'part_link',
                            type: 'text',
                            // value: "Отправить заявку",
                            placeholder: "vk.com/mylink",
                        }
                    ]
                },
            ]
        },
        {
            helper: 'Основные функции в проекте',
            groups: [
                {
                    name: 'Роль в проекте:',
                    fields:[
                        {
                            name: 'part_role',
                            placeholder: 'SMM-менеджер'
                        }
                    ]
                }
            ]
        },
        {
            helper: 'Компетенции / опыт, подтверждающие возможность участника выполнять роль в команде:',
            groups: [
                {
                    name: 'Компетенции участника:',
                    type: 'textarea',
                    fields:[
                        {
                            name: 'part_skill',
                        }
                    ]
                }
            ]
        }
    ]
    
    // render(){
    //     return <div className="form">
    //         {this.renderFieldSets()}
    //     </div>;
    // }

}

export default FormTeam;