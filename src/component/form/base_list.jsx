// import React, { Component } from "react";
import FormBase from "./base";

class FormBaseList extends FormBase{

    // prefix = "some_i";

    state = {
        arItems: [
            {}
        ]
    }

    componentDidMount(){
        this.getDefaultState();
        this.getStorage();
        // default empty data
    }

    getDefaultState(){
        this.setState({
            arItems: [
                {}
            ]
        })
    }

    getStorage(){
        // let storage_keys = Object.keys(window.localStorage).filter(k => k.toString().startsWith(`${this.prefix}_`));
        let preRegExp = new RegExp(`${this.prefix}_\\d+`,'i');

        let storage_keys = Object.keys(window.localStorage).filter(k => !!preRegExp.exec(k));
        // new RegExp(`${prefix}\\d+`,'i').exec(


        storage_keys.sort((a,b) => {return a > b ? 1 : a === b ? 0 : -1;});
        // Object.keys(window.localStorage).filter(k => k.toString().startsWith('plan_i'))
        // console.log(this.prefix,`${this.prefix}_`,storage_keys)
        // console.log('storage_keys',`${this.prefix}_`,preRegExp,storage_keys)
        let indexes = Array.from(storage_keys).map((key)=> window.localStorage.getItem(key) ).map((src,i) => {
            let match = storage_keys[i].match(/\d+$/i);
            return +match[0];
        });
        // console.log('indexes',indexes)
        let arItems = Array.from(storage_keys).map((key)=> window.localStorage.getItem(key) ).map((src,i) => {
            let data = this.jsonDecode(src);
            let match = storage_keys[i].match(/\d+$/i);
                data.index = +match[0];//storage_keys[i].toString();//.match(/\d+$/i)[0];
            return data;
        });
        if(arItems.length === 0){
            arItems = [{}];
            indexes = [0];
        }
        
        this.setState({arItems: arItems, indexes: indexes});

        // let key = this.storageKey; if(!key) return;
        // let strData = window.localStorage.getItem(key);// ?? [{}];
        // let objData = this.jsonDecode(strData);
        // console.log(objData);
        // let stateData = this.state.arItems;
        // console.log('stateData',stateData);
        // for(let k in objData) if(k in stateData) stateData[k] = objData[k];
        // 
    }

    putStorage(){
        // let key = this.storageKey; if(!key) return;
        // window.localStorage.setItem(key,JSON.stringify(this.state.arItems));
    }

    addItem(){
        let arItems = this.state.arItems.length ? this.state.arItems : [{}];
        let indexes = this.state.indexes.length ? this.state.indexes : [];
        
        let newIndex = this.state.indexes.length ? Math.max(...this.state.indexes)+1 : 0;
        
        // console.log('addItem',newIndex)
        arItems.push({index: newIndex});
        indexes.push(newIndex);
        this.setState({arItems:arItems, indexes: indexes});
        
    }
    putItem(data, index){
        // console.log('putItem(',data, index,')');
        let arItems = this.state.arItems ?? [{}];
            console.log(data, index, arItems)
            arItems[index] = data;
        this.setState({arItems:arItems});
        // this.putStorage();
    }
    delItem(index){
        // if(index === 0) return;
        
        let arItems = this.state.arItems ?? [{}];
        // console.log(index,arItems.length);
        // if(arItems.length < 2) return;
        console.log(index,arItems);

        window.localStorage.removeItem(`${this.prefix}_${index}`);
        this.getStorage();
        // arItems.splice(index, 1);
        // this.setState({arItems:arItems});
        // this.putStorage();
    }

    render(){
        // FormBase
        return <>
        {/* <div className=""></div> */}
        </>
    }
}

export default FormBaseList;