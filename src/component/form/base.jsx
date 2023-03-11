import React, { Component } from "react";

class FormBase extends Component{
    fieldsets = 
        [
            {
                helper: "",
                groups: [
                    {
                        name: "",
                        type: 'submit',
                        fields:[
                            {
                                name: 'submit',
                                type: 'submit',
                                value: "Отправить заявку",
                            }
                        ]
                    }
                ]
            }
        ];
    renderGroup({name, type="text", fields = [], horisontal = false, cols = 0},i){
        if(type === 'checkbox'){ 
            return <div key={i}>
                <div className="checkbox_group" key={i} data-hor={horisontal} data-cols={cols}>{name}</div>
                {fields.map(({name,options},i) => <div key={i}>
                    {options.map((v,iv) => <div className="checkbox_group" key={iv+1}>
                        <input type="checkbox" name={name} id="" value={v.id}/>
                        <span>{v.name}</span>
                    </div>)}
                </div>)}
            </div>
        }

        if(type === 'select') return <div className="form_group" key={i} data-hor={horisontal} data-cols={cols}>
                <label>{name}</label>
                {fields.map(({
                    name,
                    type='text',
                    placeholder='',
                    className='form_control w100',
                    options
                    },i) => <select name={name} className={className} id="" key={i}>
                        {placeholder && <option value="" defaultValue key={0}>{placeholder}</option>}
                        {options.map(({id,name},iv) => <option value={id} key={iv+1}>{name}</option>)}
                    </select>
               )}
            </div>

        if(type === 'textarea'){
            return <div className="form_group" key={i}>
                <label>{name}</label>
                {fields.map(({
                    name,
                    placeholder='',
                    className='form_control w100'
                    },i) => 
                    <textarea name={name} type={type} className={className} placeholder={placeholder} key={i}></textarea>
                )}
            </div>
        }

        if(type === 'text') { // || type === 'email'
            return <div className="form_group" key={i} data-hor={horisontal} data-cols={cols}>
                <label>{name}</label>
                {fields.map(({
                    name,
                    type='text',
                    placeholder='',
                    className='form_control w100'
                    },i) => 
                    <input name={name} type={type} className={className} placeholder={placeholder} key={i}/>
                )}
            </div>        
            }
        return <div key={i}>0</div>
    }
    renderFieldSets(){
        return this.fieldsets.map(({
            helper = '',
            groups = [],
            horisontal = false
            },i) => <div className="form_set" key={i} data-g={groups.length}>
            <div className="form_helper">{helper}</div>
            <div className="form_fields" data-hor={horisontal}>
                {groups.map(this.renderGroup)}
            </div>
        </div>);
    }
    renderTableRow(){
        return this.fieldsets.map(({
            groups = []
        },i) => <div className="form_table" key={i} data-g={groups.length}>
            {groups.map(this.renderGroup)}
        </div>);
    }
    render(){
        return <div className="form">
            {this.renderFieldSets()}
        </div>;
    }
}

export default FormBase;