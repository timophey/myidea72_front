import React, { Component } from "react";
import FormBase from "./base";

class FormPartfinancing extends FormBase{
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
                    name: 'Наименование партнера:',
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
                            name: 'part_type',
                        }
                    ]
                },
                {
                    name: 'Сумма, руб.:',
                    // type: 'textarea',
                    fields: [
                        {
                            name: 'part_type',
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