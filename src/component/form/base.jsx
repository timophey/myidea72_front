import React, { Component } from "react";
import ListContext from "../../context/list.context";

class FormBase extends Component{

    static contextType = ListContext;

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
    state = {
        data: {},
        sets: [],
    }

    constructor(props){
        // if()
        super(props);
        // let that = this;
        this.renderFieldSets = this.renderFieldSets.bind(this);
        this.renderTableRow = this.renderTableRow.bind(this);
        this.renderGroup = this.renderGroup.bind(this);
    }

    componentDidMount(){
        // console.log(this)
        let data = this.getDefaultData();
        // console.log('getDefaultData -> ',data);
        // if((this.props.data !== undefined) && (this.props.index !== undefined)){
        //     // this.getNested(data,this.props.data);
        //     // console.log()
        //     let propsData = Object.assign({},data,this.props.data);
        //     console.log('propsData',propsData);
        //     this.setState({data: propsData});
        //     // if()
        //     if( Object.entries(this.props).length == 0 ){
        //         // this.context.update(propsData,this.props.index);
        //     }
        // }else{
            let storageData = this.getStorage(data);
            // console.log('storageData',storageData)
            this.setState({data: storageData});
        // }

        // default empty data
    }
    
    getDefaultData(){
        let defData = {}
        for(let set of this.fieldsets){
            if(!set.groups) continue;
            for(let group of set.groups){
                for(let field of group.fields){
                    // console.log(field)
                    if(defData[ field.name ] === undefined){
                        let multiple = field.multiple ?? false;
                        defData[ field.name ] = (multiple) ? [] : '';
                    }
                }
            }
        }
        this.setState({
            // data: defData,
            sets: this.fieldsets
        });
        return defData;
        // let data = {}
    }
    // shouldComponentUpdate(nextProps, nextState){
    //     if(this.props.index !== undefined){
    //         console.log('shouldComponentUpdate',nextProps, nextState);
    //         // this.getNested(this.state.data);
    //         return true;
    //     }else{
    //         // return (JSON.stringify(this.props.data) !== JSON.stringify(nextProps.data));
    //     }
    // }
    componentWillReceiveProps(nextProps){
        // console.log('componentWillReceiveProps',nextProps)
        let propsData = Object.assign({},this.state.data, nextProps.data);
        this.setState({data: propsData});
        
    }
    getCheckedData(){

    }
    
    handleChange(field,e){
        // console.log(this,field,e);
        let key = field.name, data = this.state.data;
        // console.log(e)
        // if(key in data){
            if(field.type === 'radio' || field.type === 'checkbox'){
                let multiple = field.multiple ?? false;
                if(multiple){
                    let v = e.target.value;
                    if(e.target.checked){
                        data[key].push(v);
                    }else{
                        var index = data[key].indexOf(v);
                        if (index !== -1) {
                            data[key].splice(index, 1);
                        }
                    }
                }else{
                    if(e.target.checked){
                        data[key] = e.target.value;
                    }else{
                        data[key] = '';
                    }
                }
            }else{
                data[key] = e.target.value;
            }
        // }
        // console.log('changed',data);
        this.setState({ data:data });
        // save to storage
        // if(!!this.props.data && this.props.index !== undefined){
        //     // console.log('call context 0');
        //     // this.context.update(data,this.props.index);
        // }else{

        // }
        this.putStorage();
    }
    jsonDecode(str){
        let result = {}
        try{
            result = JSON.parse(str);
        }catch(e){
            return {}
        }
        return result;
    }
    get storageKey(){
        let id = this.props.index ?? 0;
        let px = this.prefix;
        if(px === undefined) return null;
        let key = `${px}_${id}`;
        return key;
    }
    getStorage(stateData = {}){
        let key = this.storageKey; if(!key){
            console.log('no key');
            return;
        }
        // window.localStorage.setItem(key,JSON.stringify(this.state.data))
        let strData = window.localStorage.getItem(key);
        let objData = this.jsonDecode(strData);
        // console.log('getStorage from ',key,stateData,objData)
        // let stateData = this.state;
        // console.log('stateData',stateData);
        for(let k in objData) if(k in stateData) stateData[k] = objData[k];
        // this.setState({data: stateData});
        // console.log('storage:',stateData)
        return stateData;
    }
    getNested(stateData = {}, objData = {}){
        // let objData = this.props.data;
        // console.log('getNested(',stateData,this.props,objData,')')
        // for(let k in objData) if(k in stateData) stateData[k] = objData[k];
        // this.setState({data: stateData});
    }
    putStorage(data = this.state.data){
        let key = this.storageKey; if(!key) return;
        window.localStorage.setItem(key,JSON.stringify(this.state.data));
    }
    
    renderGroup({name, type="text", fields = [], horisontal = false, cols = 0},i){
        let that = this;
        let data = that.state.data ?? {};
        // console.log(that)
        if(type === 'checkbox'){ 
            return <div key={i}>
                <div className="checkbox_group" key={i} data-hor={horisontal} data-cols={cols}>{name}</div>
                {fields.map((field,i) =><div key={i}>
                    {field.options.map((v,iv) =>  {
                        let mpl = field.multiple ?? false;
                        let value = data[ field.name ] ?? ((mpl)?[]:'');
                        let chk = (mpl) ? value.contains(v.id) : (+value === +v.id);
                        // console.log(field.name,mpl,data[ field.name ],value,v.id,chk)
                        return <label className="checkbox_group" key={iv+1}>
                        <input type="checkbox" name={name} id="" value={v.id} checked={chk} onChange={that.handleChange.bind(that,field)}/>
                        <span>{v.name}</span>
                    </label>
                    })}
                </div>)}
            </div>
        }
        // .bind(that,field)

        if(type === 'select') return <div className="form_group" key={i} data-hor={horisontal} data-cols={cols}>
                <label>{name}</label>
                {fields.map(({
                    name,
                    // type='text',
                    placeholder='',
                    className='form_control w100',
                    options
                    },i) => <select name={name} className={className} id="" key={i} onChange={that.handleChange.bind(that,fields[i])} value={data[ name ] ?? null}>
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
                    <textarea name={name} type={type} className={className} placeholder={placeholder} key={i} onChange={that.handleChange.bind(that,fields[i])}  value={data[ name ] ?? ''}/>
                )}
            </div>
        }

        if(type === 'text') { // || type === 'email'
            return <div className="form_group" key={i} data-hor={horisontal} data-cols={cols}>
                <label>{name}</label>
                {fields.map(({
                    name,
                    type = 'text',
                    placeholder = '',
                    className = 'form_control w100',
                    readonly=false
                    },i) => {
                        let val = data[ name ] ?? '';
                        if(type === 'number') val = Math.round(val,2);
                        return <input name={name} type={type} className={className} placeholder={placeholder} key={i} onChange={that.handleChange.bind(that,fields[i])} value={val} readOnly={readonly}/>
                    }
                )}
            </div>        
            }

        if(type === 'action'){
            return <div className="form_group action" key={i} data-hor={horisontal} data-cols={cols}>
                {name}
            </div>
        }
        return <div key={i}>0</div>
    }
    renderFieldSets(sets){
        if(!sets) return <></>;
        return sets.map(({
            helper = '',
            groups = [],
            horisontal = false,
            click = ()=>{},
            },i) => <div className="form_set" key={i} data-g={groups.length} onClick={click}>
            <div className="form_helper">{helper}</div>
            <div className="form_fields" data-hor={horisontal}>
                {groups.map(this.renderGroup)}
            </div>
        </div>);
    }
    renderTableRow(sets){
        return sets.map(({
            groups = []
        },i) => <div className="form_table" key={i} data-g={groups.length}>
            {groups.map(this.renderGroup)}
        </div>);
    }
    render(){
        return <div className="form">
            {this.renderFieldSets(this.state.sets)}
        </div>;
    }
}

export default FormBase;