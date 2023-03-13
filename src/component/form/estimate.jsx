// import React, { Component } from "react";
import FormBase from "./base";

class FormEstimate extends FormBase{
    
    prefix="est";
    
    fieldsets = [
        {
            groups: [
                {
                    name: 'Название товара / услуги',
                    cols: 40,
                    fields: [
                        {
                            name: 'est_name',
                            placeholder: 'Товар / услуга',
                        }
                    ]
                },
                {
                    name: 'Цена за ед., руб.',
                    cols: 20,
                    fields: [
                        {
                            name: 'est_price',
                            placeholder: 'ххх руб.',
                        }
                    ]
                },
                {
                    name: 'Количество',
                    cols: 30,
                    fields: [
                        {
                            name: 'est_count',
                            type: 'number',
                            placeholder: 'ххх',
                        }
                    ]
                },
                {
                    name: 'Сумма, руб.',
                    cols: 30,
                    fields: [
                        {
                            name: 'est_sum',
                            type: 'number',
                            placeholder: 'ххх руб.',
                        }
                    ]
                }
            ]
        },
        {
            groups: [
                {
                    name: 'Обоснование',
                    horisontal: true,
                    fields: [
                        {
                            name: 'est_reason'
                        }
                    ]
                }
            ]
        },
    ];

    render(){
        return <div className="form">
            {this.renderTableRow(this.state.sets)}
        </div>;
    }
}

export default FormEstimate;