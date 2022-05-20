import React,{Component} from "react";
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import withNavigation from "./WithNavigation";
import withParams from "./withParams";
import AuthenticationService from "./AuthenticationService.js";
import AuthenticatedRoute from "./AuthenticatedRoute";

class TodoApp extends Component {
    render(){
        const LoginComponentWithNavigation = withNavigation(LoginComponent);
        const WelcomeComponentWithParams = withParams(WecomeComponent);
        const HeaderComponentWithNavigation = withNavigation(HeaderComponent);
        
        return(
            <div className="TodoApp">
                <Router>
                    <HeaderComponentWithNavigation />
                    <Routes>
                        <Route path="/" exact element={<LoginComponentWithNavigation/>}/>
                        <Route path="/login" element={<LoginComponentWithNavigation/>}/>
                        <Route path="/welcome/:name" element={<AuthenticatedRoute><WelcomeComponentWithParams/></AuthenticatedRoute>}/>
                        <Route path="/todos" element={<AuthenticatedRoute><TODOComponent/></AuthenticatedRoute>}/>
                        <Route path="/logout" element={<LogoutComponent/>} />
                        <Route path="*" element={<ErrorComponent/>}/>
                    </Routes>
                    <FooterComponent/>
                </Router>
                
            </div>
        );
    }
}

class LoginComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            username:"Nitendra",
            password:'',
            isFailed : false,
            isSuccess: false
        }

    }
    render(){
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                {/* <LoginFailedComponent loginFailed = {this.state.isFailed}/> */}
                {/* <LoginSuccessComponent loginSucces = {this.state.isSucces}/> */}
                {this.state.isFailed && <div className="alert alert-danger">Login Failed</div>}
                {this.state.isSuccess && <div>Login Success</div>}
                User Name <input type="text" name="username" value={this.state.username} onChange={this.handleOnChange}></input>
                Password <input type="password" name="password" value = {this.state.password} onChange={this.handleOnChange}></input>
                <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>
            </div>
        );
    }

    handleOnChange = (event)=> {
        console.log(event.target.name);
        this.setState({
         [event.target.name]: event.target.value   
        })
    }

    loginClicked = () =>{
        console.log("login clicked")
        if (this.state.username === "nit" && this.state.password === "pass"){
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
            this.props.navigate(`/welcome/${this.state.username}`)
            // this.setState({
            //     isFailed : false,
            //     isSuccess: true
            // })
        } else {
            this.setState({
                isFailed : true,
                isSuccess: false
            })
        }

    }
}


class TODOComponent extends Component {

    constructor(props){
        super(props);

        this.state = {
            todos: [
                {id:1, description:"Learning React", done:false, targetDate:new Date().toLocaleString()},
                {id:2, description:"Learning Java", done:false, targetDate:new Date().toLocaleString()},
                {id:3, description:"Learning Python", done:false, targetDate:new Date().toLocaleString()}
            ]
        }

    }

    render(){
        return (
            <div>
                <h1>List TODOs</h1>
                <div className="container">
                    <table>
                        <thead className="table">
                            <tr>
                               
                                <th>Description</th>
                                <th>Done</th>
                                <th>Target Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(
                                    todo=> 
                                <tr key={todo.id}>
                                   
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toLocaleString()}</td>
                                    <td>{todo.targetDate}</td>
                                </tr>
                                )
                            }
                            
                        </tbody>
                    </table>        

                </div>
            </div>
        );
    }
}


function HeaderComponent(){
    const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
    console.log(isUserLoggedIn)
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div><a href="#" className="navbar-brand">Website</a></div>
            <ul className="navbar-nav">
                {isUserLoggedIn && <li ><Link className="nav-link" to="/welcome/nitendra">Home</Link></li>}
                {isUserLoggedIn && <li ><Link className="nav-link" to="/todos">Todos</Link></li>}
            </ul>
            <ul className="navbar-nav navbar-collapse justify-content-end">
                {!isUserLoggedIn && <li ><Link className="nav-link" to="/login">Login</Link></li>}
                {isUserLoggedIn && <li ><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
            </ul>
            </nav>
        </header>
    );
}


function LogoutComponent(){
    return (
        <>
            <h1>You are logged out</h1>
            <div className="container">
                Thank you for using the TODO app.
            </div>
        </>
    );
}

function FooterComponent(){
    return (
      <footer className="footer">
          <span className="text-muted">Copywrite reseverd</span>
      </footer>
    );
}

class WecomeComponent extends Component {
    render(){
        
        return (
            <>
            <h1>Welcome</h1>
            <div className="container">
            Welcome - {this.props.params.name}- to TODO App. Manage your todos <Link to="/todos">here</Link>
            </div>
            </> 
        );
    }
}

function ErrorComponent(){
    return (
        <div>
            <h1>I dont know </h1>
        </div>
    );
}
// function LoginFailedComponent(props){
//     if (props.loginFailed){
//         return <div>Login Failed</div>;
//     }
//     return null;
// }

// function LoginSuccessComponent(props){
//     if (props.loginSucces){
//         return <div>Login Success</div>;
//     }
//     return null;
// }



export default TodoApp;