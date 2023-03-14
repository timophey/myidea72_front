import FormBaseList from "./base_list";
// import FormEstimate from "./fin_part";
import FormEstimate from "./estimate";
import ListContext from "../../context/list.context";

class FormEstimateList extends FormBaseList{
    
    prefix = 'est';
    state = {
        data:{},
        arItems:[],
        sums:{
            sum:0,
            sum13:0,
            sum87:0,
        }
    }

    calsSum(arItems){
        let sum = arItems.map(item => item.est_sum).reduce((a,b)=> a + b, 0);
        // let sum13 = sum * 13 / 100;
        // console.log('context.update',arItems,sum,sum13);
        this.setState({
            data:{
                sum:   sum,
                sum13: sum / 0.87 * 0.13,
                sum87: sum / 0.87,
            }
        });
    }

    // getStorage(stateData){
    //     let data = super.getStorage(stateData);
    //     console.log(data)
    //     // this.calsSum();
    //     return data;
    // }
    // componentDidMount(){
    //     super.componentDidMount();
    //     this.calsSum(this.state.arItems);
    // }
    render(){
        let that = this;
        let fieldsetsAfter = [
            {
                helper: <span onClick={this.addItem.bind(this)} className="color_red">[+] Добавить</span>,
                // groups: [
                //     {
                //         type: 'action',
                //         name: ''
                //     }
                // ]
            },
            {
                helper:'',
                groups:[
                    {
                        name: '*Итого расходов без учета НДФЛ:',
                        fields: [{
                            name: 'sum',
                            type: 'number',
                            // value: this.state.sums.sum,
                        }]
                    },
                    {
                        name: '*Налог на доходы физических лиц 13%:',
                        fields: [{
                            name: 'sum13',
                            type: 'number',
                            // value: this.state.sums.sum13,
                        }]
                    },
                    {
                        name: '*Всего расходов на реализацию проекта с учетом НДФЛ:',
                        fields: [{
                            name: 'sum87',
                            type: 'number',
                        }]
                    }
                ]
            }
        ];
        let arItems = this.state.arItems.length ? this.state.arItems : [{}];
        let contextData = {
            update: (data, index)=>{
                let est_data_list = Object.assign({},this.state);
                    est_data_list.arItems[index] = data;
                    this.calsSum(est_data_list.arItems);
                
                // this.getStorage();
            },
        }

        console.log('FormEstimateList');

        return <>
        <ListContext.Provider value={contextData}>
            {arItems.map((el,i)=>{
                let fieldsetsMiddle = [{
                    helper: <span onClick={that.delItem.bind(that,el.index)} className="color_red">[-] Убрать</span>,
                }];
                
                return <div className="form_item table_item" key={i}>
                <div className="form" key={i}>
                    <FormEstimate data={el} index={el.index}/>
                </div>
                {(arItems.length > 1) && <div className="form">{this.renderFieldSets(fieldsetsMiddle)}</div>}
                </div>
            })}
        {/* <FormTeam/> */}
        </ListContext.Provider>
        <div className="form_item align-left">{this.renderFieldSets(fieldsetsAfter)}</div>

    </>
    }
}

export default FormEstimateList;