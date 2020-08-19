import React from "react";
import { Redirect } from "react-router";
import { Modal, Button } from 'antd';
// import { Mutation } from 'react-apollo'
// import queries from "../../utils/queries";
import "../scss/ui.scss";
class Logout extends React.Component {
    constructor(props) {
        super(props);
    }
    redirectLogin = () =>{
        location.reload();
    }
    
    render(){
        const topModel = {
        marginTop: -30
        };
        return(
            <div>
                <Modal
                    keyboard={false}
                    maskClosable={false}
                    visible={this.props.visible}
                    onCancel={this.props.close}
                    destroyOnClose={true}
                    footer={null}
                    className='textAldrich'
                    style={topModel}
                    > 
                    
                    <div className="main">
                        <h1>Do you want logout?</h1>
                        <div style={{textAlign:'right'}}>
                            <Button onClick={this.props.close}>Cancel</Button>
                            {/* <Mutation mutation={queries.mutation.logout}>
                                {postMutation => <Button type="primary" style={{marginLeft: 10}} onClick={() => {postMutation(); this.redirectLogin();}}>Ok</Button>}
                            </Mutation> */}
                            <Button type="primary" style={{marginLeft: 10}} >Ok</Button>
                        </div>
                    </div>
                
                </Modal>
            </div>
        )
    }       
}


export default (Logout);