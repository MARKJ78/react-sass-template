var React = require('react');
require('../css/additem.scss');
//component

var AddItem = React.createClass({
    render: function() {
        return (
            <form id="add-todo" onSubmit={this.handleSubmit}>
                <input type="text" required ref="newItem"/>
                <input type="submit" value="Enter"/>
            </form>
        );
    },
    //custom functions
    handleSubmit: function(e) {
        e.preventDefault();
        this.props.onAdd(this.refs.newItem.value);
    }
});
module.exports = AddItem;
