import React, { Component } from 'react';
import './ui-toolkit/css/nm-cx/main.css';
import './App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import withRouter from 'react-router-dom/withRouter';

const DESCRIPTION = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
//const users = ["Vince", "Bruce", "Sam", "Joe"]
const todos = ["Users and Todos", "Ghibli App", "Dojo Dossier", "Voting App II"]

const LocationDisplay = withRouter((props) => {
  return (<div style={{ width: '100px', margin: '50px' }}>
    <button onClick={() => props.history.push('/')}>Go Home</button>
  </div>
  )
})

const ButtonGroup = props => (
  <nav>
    <ul className="tabs">
      <NmTab exact={true} to="/" tabName="Home" />
      <NmTab to="/users" tabName="Users" />
      <NmTab to="/todos" tabName="Todos" />
    </ul>
  </nav>
)

const Home = (props) => (
  <div className="homeScreen">
    <div className="homeTextContainer">
      Users<br />and<br />Todos
    </div>
  </div>
)


const NmTab = ({ exact, to, tabName }) => {
  return (
    <Route exact={exact} path={to} children={({ match }) => {
      return (
        <li className={`tab-title ${match ? 'active' : ''}`} ><Link to={to}>{tabName}</Link></li>
      )
    }
    } />
  )
}

const TodoInput = props => (
  <div className="row" style={{ height: '50px' }}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }} className="small-2 medium-2 large-2 columns">Add Todo</div>
    <div className="small-4 medium-4 large-4 columns">
      <input type="text" placeholder="Todo" value={props.todoInputText} onChange={(e) => props.updateTodoInputText(e, props.userIndex)} />
    </div>
    <div className="small-6 medium-6 large-6 columns">
      <button onClick={() => props.addTodo(props.userIndex)}>Add Todo</button>
    </div>
  </div>
)

const User = props => {
  return (
    <Route exact={props.exact} path={props.to} children={({ match }) => {
      if (match) {
        console.log(match.params.index)
        return (
          <div className="userTodos">
            <div className="userTodoName">
              {props.users[match.params.index].name}
            </div>
            <TodoInput userIndex={match.params.index} todoInputText={props.users[match.params.index].todoInputText} updateTodoInputText={props.updateTodoInputText} addTodo={() => props.addTodo(match.params.index)} />
            <br />
            <div className="listOfItems">
              <ul>
                {props.users[match.params.index].todos.map((todo, index) => (<li key={index + todo} className="lineStyle"><div>{todo}</div></li>))}
              </ul>
            </div>
          </div>
        )
      } else
        return null;
    }
    } />
  )
}

const UserInput = props => (
  <div className="row" style={{ height: '50px' }}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }} className="small-2 medium-2 large-2 columns">Add User</div>
    <div className="small-4 medium-4 large-4 columns">
      <input type="text" placeholder="User" value={props.userInputText} onChange={props.updateUserInputText} />
    </div>
    <div className="small-6 medium-6 large-6 columns">
      <button onClick={props.addUser}>Add User</button>
    </div>
  </div>
)

const Users = props => {
  console.log("in users")
  return (
    <Route exact={props.exact} path={props.to} render={({ match }) => {
      console.log(match)
      return (
        <div className="pageDisplay">
          <br />
          <UserInput userInputText={props.userInputText} addUser={props.addUser} updateUserInputText={props.updateUserInputText} />
          <br />
          <div className="listOfItems">
            <ul>
              {props.users.map((user, index) => (<li key={index + user} className="lineStyle"><Link style={match.path === "/users/" + index ? { color: '#E1E1E1', textDecoration: 'none' } : { color: 'black', textDecoration: 'none' }} to={"/users/" + index}>{user.name}</Link></li>))}
            </ul>
          </div>
          <User to='/users/:index' todoInputText={props.todoInputText} updateTodoInputText={props.updateTodoInputText} addTodo={props.addTodo} users={props.users} />
        </div>
      )
    }
    } />
  )
}

const Todo = props => {
  const returnTodo = todos.includes(props.match.params.todoItem) ? (<div className="itemDescriptionContainer">
    <div className="itemName">
      {props.match.params.todoItem}
    </div>
    <div className="itemDescription">
      {DESCRIPTION}
    </div>
  </div>
  ) : (<div className="itemDescriptionContainer">
    <div className="itemName">
      {`No Such Todo. ${props.match.params.todoItem} not found.`}
    </div>
  </div>)

  return returnTodo
}

const Todos = props => {
  console.log("inTodos")
  console.log(props)

  let flatTodos = [];

  for (let userIterater = 0; userIterater < props.users.length; userIterater++) {
    for (let todoIterater = 0; todoIterater < props.users[userIterater].todos.length; todoIterater++) {
      flatTodos.push(props.users[userIterater].todos[todoIterater] + " - " + props.users[userIterater].name)
    }
  }

  

  return (
    <Route exact={props.exact} path={props.to} render={({ match }) => {
      return (
        <div className="pageDisplay">
          <div className="listOfItems">
            <ul>
              {flatTodos.map((todos, index) => <li key={index} className="lineStyle"><div>{todos}</div></li>)}
            </ul>
          </div>
          
        </div>
      )
    }
    } />
  )
}

const DynamicContent = ({ match }) => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="card" style={{ width: '400px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div>No page found at the path: {match.url}</div>
          </div>
        </div>

      </div>
      <LocationDisplay />
    </div>
  )
}
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userInputText: "",
      users: []
    }
    this.updateUserInputText = this.updateUserInputText.bind(this)
    this.addUser = this.addUser.bind(this)
    this.updateTodoInputText = this.updateTodoInputText.bind(this)
    this.addTodo = this.addTodo.bind(this)
  }

  updateUserInputText(event) {
    this.setState({ userInputText: event.target.value })
  }

  addUser() {
    let tempArray = this.state.users.slice();
    const newUser = { name: this.state.userInputText, todos: [], todoInputText: "" }
    tempArray.push(newUser)
    this.setState({ users: tempArray, userInputText: "" })
  }

  updateTodoInputText(event, userIndex) {
    console.log(userIndex)
    console.log(event)
    let tempArray = this.state.users.slice();
    tempArray[userIndex].todoInputText = event.target.value;
    this.setState({ users: tempArray })
  }

  addTodo(userIndex) {
    let tempArray = this.state.users.slice();
    tempArray[userIndex].todos.push(tempArray[userIndex].todoInputText);
    tempArray[userIndex].todoInputText = "";
    this.setState({ users: tempArray });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <ButtonGroup />
            <Route exact path="/" component={Home} />
            <Users to="/users" updateTodoInputText={this.updateTodoInputText} addTodo={this.addTodo} addUser={this.addUser} users={this.state.users} userInputText={this.state.userInputText} updateUserInputText={this.updateUserInputText} />
            <Todos to="/todos" users={this.state.users} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
