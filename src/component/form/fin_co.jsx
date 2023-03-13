// import React, { Component } from "react";
import FormBase from "./base";

class FormCofinancing extends FormBase{
    prefix = 'cofin';
    fieldsets = [
        {
            helper: 'Собственные средства, т.е. ресурсы, которые есть у команды проекта в наличии до подачи заявки на конкурс, включает в себя собственный вклад (руководителя и членов проектной команды, наставников)',
        },
        {
            groups: [
                {
                    name: 'Перечень расходов:',
                    type: 'textarea',
                    fields: [
                        {
                            name: 'cofin_list'
                        }
                    ]
                },
                {
                    name: 'Сумма:',
                    fields: [
                        {
                            placeholder: 'ххх руб.',
                            name: 'cofin_sum'
                        }
                    ]
                }
            ]
        }
    ];
}

export default FormCofinancing;