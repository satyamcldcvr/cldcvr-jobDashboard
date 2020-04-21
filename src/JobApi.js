import React from 'react';
import Axios from 'axios'

class JobApi extends React.Component{
    constructor(props){
        super(props)
        this.state={
            value:{},
        }
    }
    componentDidMount(){
        Axios.get('https://03d7retu7f.execute-api.eu-west-1.amazonaws.com/default/jobDashboardApi',{
        params:{
            id:'2899C56D8173DD33'
        }
        }).then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          })
    }
    render(){
        return(
            <div>
            satyam
            </div>
        )
        
    }
}

export default JobApi;