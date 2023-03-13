// import React, { Component } from "react";
import FormBase from "./base";

class FormResult extends FormBase{
    prefix = 'result';
    fieldsets = [
        {
            helper: 'Информация о результатах социального проекта, которые предполагается достичь в ходе реализации проекта в количественном и качественном выражении, они являются критериями эффективности проекта'
        },
        {
            groups:[
                {
                    name: 'Количество мероприятий, проведенных в рамках проекта:',
                    // type: 'textarea',
                    fields: [
                        {
                            name: 'result_event_count',
                            type: 'number',
                        }
                    ]
                },
                {
                    name: 'Количество участников мероприятий, вовлеченных в реализацию проекта:',
                    // type: 'textarea',
                    fields: [
                        {
                            name: 'result_team_count',
                            type: 'number',
                        }
                    ]
                },
                {
                    name: 'Количество публикаций о мероприятиях проекта в средствах массовой информации, а также в информационно телекоммуникационной сети «Интернет»:',
                    // type: 'textarea',
                    fields: [
                        {
                            name: 'result_pub_count',
                            type: 'number',
                        }
                    ]
                }
                ,
                {
                    name: 'Количество просмотров публикаций о мероприятиях проекта в информационно телекоммуникационной сети «Интернет»:',
                    // type: 'textarea',
                    fields: [
                        {
                            name: 'result_pub_views',
                            type: 'number',
                        }
                    ]
                }
            ]
        },
        {
            helper: 'Все позитивные изменения, которые произойдут в результате реализации проекта: уровень знаний участников проекта, развитие компетенций, популяризация вида деятельности, повышение уровня информированности и вовлеченности и др.',
            groups: [
                {
                    name: 'Социальный эффект:',
                    type: 'textarea',
                    fields: [
                        {
                            name: 'result_positives'
                        }
                    ]
                }
            ]
        }/*,
        
        */
    ]
}


export default FormResult;