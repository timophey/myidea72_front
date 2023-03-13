import FormBaseList from "./base_list";
import FormTeam from "./team";
import ListContext from "../../context/list.context";

class FormTeamList extends FormBaseList{

    prefix = 'team_i';

    render(){
        let that = this;
        let fieldsetsBefore = [{
            helper: <span className="color_red">Не менее 3 участников</span>,
            click: function(){
               
            }
        }];
        let fieldsetsAfter = [{
            helper: '',
            groups: [
                {
                    type: 'action',
                    name: <span onClick={this.addItem.bind(this)} className="color_red">[+] Добавить участника</span>
                }
            ]
        }]
        

        let arItems = this.state.arItems.length ? this.state.arItems : [{}];

        let contextData = {
            update: this.putItem.bind(this),
        }
        // console.log('that',that)
        return <>
            
            <div className="form">{this.renderFieldSets(fieldsetsBefore)}</div>
            <ListContext.Provider value={contextData}>
                {arItems.map((el,i)=>{
                let fieldsetsMiddle = [{
                    helper: '',
                    groups: [{
                        type: 'action',
                        name: <span onClick={that.delItem.bind(that,el.index)} className="color_red">[-] Убрать</span>}]
                }];

                return <div className="form_item" key={i}>
                <div className="form" key={i}>
                    <FormTeam data={el} index={el.index}/>
                </div>
                {(arItems.length > 1) && <div className="form">{this.renderFieldSets(fieldsetsMiddle)}</div>}
                </div>
            })}
            {/* <FormTeam/> */}
            </ListContext.Provider>
            <div className="form">{this.renderFieldSets(fieldsetsAfter)}</div>
            </>
        // <div className="form">
        //     <div class="form_set" data-g="0">
        //         <div class="form_helper"></div>
        //         <div class="form_fields" data-hor="false">
        //     </div></div>
        // </div>
    }
}

export default FormTeamList;