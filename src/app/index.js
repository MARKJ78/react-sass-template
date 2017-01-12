var React = require('react');
var ReactDOM = require('react-dom');
import {Router, Route, browserHistory, Link} from 'react-router'; //es2015 syntax
require('../css/index.scss');

//module requires
var TodoItem = require('./todoitem');
var AddItem = require('./additem');
var About = require('./about');
//Page routing
var App = React.createClass({
    render: function() {
        return (
            <Router history={browserHistory}>
                <Route path={'/'} component={TodoComponent}></Route>{/* home Route for dev env*/}
                <Route path={'/react-playground/'} component={TodoComponent}></Route>{/* home Route for gh-pages*/}
            </Router>
        );
    }
})
//component
var TodoComponent = React.createClass({
    getInitialState: function() {
        return {
            todos: [
                'ring by the 17th', 'go for car', 'exersise', 'clean bike'
            ],
            age: 40
        }
    }, //getInitialState

    render: function() {
        var todos = this.state.todos; //Load the data from todo's
        todos = todos.map(function(item, index) { //iterate todo array
            return (<TodoItem item={item} key={index} onDelete={this.onDelete}/>);
        }.bind(this)) //cycle through todo's and create li's
        return (
            <div id="todo-list">
                <Link to={'/about'}>About This App</Link>
                <p>Things to do before you're {this.state.age}...</p>
                <ul>
                    {todos}
                </ul>
                <AddItem onAdd={this.onAdd}/>
            </div>
        );
    }, //render

    //custom functions
    onDelete: function(item) {
        var updatedTodos = this.state.todos.filter(function(val, index) {
            return item !== val;
        });
        this.setState({todos: updatedTodos});
    }, //onDelete
    onAdd: function(item) {
        var updatedTodos = this.state.todos;
        updatedTodos.push(item);
        this.setState({todos: updatedTodos})
    }, //onAdd

    /*//lifecycle functions
    componentWillMount: function() {
        console.log('componentWillMount');
    },
    componentDidMount: function() {
        console.log('componentDidMount');
    },
    componentWillUpdate: function() {
        console.log('componentWillUpdate');
    }*/

}); //TodoComponent

//insert into html page
ReactDOM.render(
    <App/>, document.getElementById('todo-wrapper'));
