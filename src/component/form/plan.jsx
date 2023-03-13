// import React, { Component } from "react";
import FormBase from "./base";

class FormPlan extends FormBase{

    prefix = 'plan_i';

    fieldsets = [
        {
            groups:[
                {
                    name: 'Наименование',
                    fields: [
                        {
                            name: 'plan_name',
                            placeholder: 'задача',
                        }
                    ]
                },{
                    name: 'Срок выполнения',
                    fields: [
                        {
                            name: 'plan_deadline',
                            type: 'date',
                            placeholder: 'хх/хх/хххх',
                        }
                    ]
                },{
                    name: 'Описание мероприятия',
                    fields: [
                        {
                            name: 'plan_descr',
                            placeholder: '',
                        }
                    ]
                },{
                    name: 'Количество участников',
                    fields: [
                        {
                            name: 'plan_team',
                            type: 'number',
                            placeholder: 'ххх',
                        }
                    ]
                },{
                    name: 'Количество просмотров',
                    fields: [
                        {
                            name: 'plan_views',
                            type: 'number',
                            placeholder: 'ххх',
                        }
                    ]
                },{
                    name: 'Дополнительная информация',
                    fields: [
                        {
                            name: 'plan_detail',
                            placeholder: '',
                        }
                    ]
                }
            ]
        }
    ];
    
    render(){
        return <div className="form">
            {this.renderTableRow(this.state.sets)}
            {/* {this.renderFieldSets(this.state.sets)} */}
        </div>;
    }

}

export default FormPlan;