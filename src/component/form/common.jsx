import React, { Component } from "react";
import FormBase from "./base";

class FormCommon extends FormBase{
    
    fieldsets = 
        [
            {
                helper: "Город, в котором будет проходить защита проекта",
                groups: [
                    {
                        name: "ЗАЩИЩАЮ ПРОЕКТ В:",
                        type: 'checkbox',
                        fields:[
                            {
                                type: 'radio',
                                name: 'project_city',
                                options: [
                                    {id: 1, name: 'Тюмени',},
                                    {id: 2, name: 'Тобольске',},
                                    {id: 3, name: 'Ишиме',},
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                helper: "Должно содержать в себе как описательную часть, так и творческую, креативную",
                groups: [
                    {
                        name: "Название проекта:",
                        // type: 'text',
                        fields:[
                            {
                                type: 'text',
                                name: 'project_name',
                                placeholder: "Проект «вверх»",
                            }
                        ]
                    },
                    {
                        name: "Направление",
                        type: 'select',
                        fields:[
                            {
                                type: 'select',
                                name: 'project_direction',
                                placeholder: "Выберите",
                                options: [
                                    {id: 1, name: 'Север',},
                                    {id: 2, name: 'Юг',},
                                    {id: 3, name: 'Запад',},
                                    {id: 4, name: 'Восток',},
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                helper: "Необходимо указать город/муниципальное образование, где будет реализована инициатива",
                groups:[
                    {
                        name: "География проекта:",
                        type: 'text',
                        fields:[
                            {
                                type: 'text',
                                name: 'project_location',
                                placeholder: "Тюменская область",
                            }
                        ]
                    }  
                ]
            },
            {
                helper: "Сроки реализации проекта",
                groups: [
                    {
                        name: "Дата начала и окончания проекта:",
                        horisontal: true,
                        // type: '',
                        fields:[
                            {
                                name: 'date_from',
                                type: 'date',
                                value: "",
                                placeholder: 'хх/хх/хххх',
                                className: 'form_control w50',
                            },
                            {
                                name: 'date_to',
                                type: 'date',
                                value: "",
                                placeholder: 'хх/хх/хххх',
                                className: 'form_control w50',
                            }
                        ]
                    }
                ]
            }
        ];
    
    render(){
        return <div className="form">
            {this.renderFieldSets()}
        </div>;
    }
}

export default FormCommon;