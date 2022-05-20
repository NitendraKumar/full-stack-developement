import React,{Component} from "react";
import { Route , Navigate} from "react-router-dom";
import AuthenticationService from "./AuthenticationService";
class AuthenticatedRoute extends Component {
    render(){
        
        if (AuthenticationService.isUserLoggedIn()){
            return {...this.props.children};
        } else {
            return <Navigate to="/login"/>;
        }
    }
}
export default AuthenticatedRoute;