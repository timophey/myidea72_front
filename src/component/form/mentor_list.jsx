import FormBaseList from "./base_list";
// import FormMentor from "./fin_part";
import FormMentor from "./mentor";
import ListContext from "../../context/list.context";

class FormMentorList extends FormBaseList{
    
    prefix = 'mentor';
    render(){
        let that = this;
        let fieldsetsBefore = [{
            helper: 'Тот, кто делится опытом и консультирует, работает с руководителем и командой проекта над идеей и концепцией проекта, его организацией, реализацией, будет сопровождать проект на всех этапах до его завершения'
        }];
        let fieldsetsAfter = [{
            helper: '',
            groups: [
                {
                    type: 'action',
                    name: <span onClick={this.addItem.bind(this)} className="color_red">[+] Добавить наставника</span>
                }
            ]
        }];
        let arItems = this.state.arItems.length ? this.state.arItems : [{}];
        let contextData = {
            update: this.putItem.bind(this),
        }

        return <>
        {this.renderFieldSets(fieldsetsBefore)}
        <ListContext.Provider value={contextData}>
            {arItems.map((el,i)=>{
            let fieldsetsMiddle = [{
                helper: <span onClick={that.delItem.bind(that,el.index)} className="color_red">[-] Убрать</span>,
            }];
            
            return <div className="form_item table_item" key={i}>
            <div className="form" key={i}>
                <FormMentor data={el} index={el.index}/>
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

export default FormMentorList;