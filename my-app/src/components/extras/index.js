import { Component } from "react";

class TabItems extends Component{
    render(){
        const {tabDetails, updateActiveTabID} = this.props;
        const {tabID, name} = tabDetails;
    
        const onClickTabItem =() =>{
            updateActiveTabID(tabID);
        }
        return (
            <>
            <button type="button" onClick={onClickTabItem}>
                {name}
            </button>
            </>
        )
    }
}

export default TabItems;









