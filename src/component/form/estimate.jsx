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
                            readonly: true,
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

    getStorage(stateData = {}){
        let data = super.getStorage(stateData);
        // console.log(data)
        this.context.update(data, this.props.index);
        return data;
    }

    handleChange(field,e){
        super.handleChange(field,e);
        // console.log('handleChange',field,e);
        if(field.name === 'est_price' || field.name === 'est_count'){
            let est_data = this.state.data;//Object.assign({},this.state.data, {est_sum: est_sum});
                est_data[field.name] = e.target.value;
            let {est_price, est_count} = est_data;
            let est_sum = est_price * est_count;
                est_data.est_sum = est_sum;
            // this.handleChange()
            this.setState({ data: est_data });
            this.putStorage();
            this.context.update(est_data, this.props.index);  
            // console.log(.est_price)
        }
    }

    render(){
        let sets = this.state.sets;
            // sets
        return <>
            {this.renderTableRow(sets)}
        </>;
    }
}

export default FormEstimate;