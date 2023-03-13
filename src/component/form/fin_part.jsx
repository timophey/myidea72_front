// import React, { Component } from "react";
import FormBase from "./base";

class FormPartfinancing extends FormBase{
    
    prefix = 'finpart';

    fieldsets = [
        {
            groups: [
                {
                    name: 'Наименование партнера:',
                    fields: [
                        {
                            name: 'part_name',
                        }
                    ]
                }
            ]
        },
        {
            helper: 'Техническая, информационная, материальная, организационная и т.п.',
            groups: [
                {
                    name: 'Тип поддержки:',
                    fields: [
                        {
                            name: 'part_type',
                        }
                    ]
                },
                {
                    name: 'Перечень расходов:',
                    type: 'textarea',
                    fields: [
                        {
                            name: 'part_list',
                        }
                    ]
                },
                {
                    name: 'Сумма, руб.:',
                    // type: 'textarea',
                    fields: [
                        {
                            name: 'part_sum',
                            type: 'number',
                            placeholder: 'ххх руб.',
                        }
                    ]
                }
            ]
        }
    ];
}

export default FormPartfinancing;