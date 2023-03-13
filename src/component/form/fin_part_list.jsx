import FormBaseList from "./base_list";
import FormPartfinancing from "./fin_part";
import ListContext from "../../context/list.context";

class FormPartfinancingList extends FormBaseList{
    
    prefix = 'finpart';
    render(){
        let that = this;
        let fieldsetsAfter = [{
            helper: '',
            groups: [
                {
                    type: 'action',
                    name: <span onClick={this.addItem.bind(this)} className="color_red">[+] Добавить партнёра</span>
                }
            ]
        }];
        let arItems = this.state.arItems.length ? this.state.arItems : [{}];
        let contextData = {
            update: this.putItem.bind(this),
        }

        return <>
        <ListContext.Provider value={contextData}>
            {arItems.map((el,i)=>{
            let fieldsetsMiddle = [{
                helper: <span onClick={that.delItem.bind(that,el.index)} className="color_red">[-] Убрать</span>,
            }];
            
            return <div className="form_item table_item" key={i}>
            <div className="form" key={i}>
                <FormPartfinancing data={el} index={el.index}/>
            </div>
            {(arItems.length > 1) && <div className="form">{this.renderFieldSets(fieldsetsMiddle)}</div>}
            </div>
        })}
        {/* <FormTeam/> */}
        </ListContext.Provider>
        <div className="form_item align-right">{this.renderFieldSets(fieldsetsAfter)}</div>

    </>
    }
}

export default FormPartfinancingList;