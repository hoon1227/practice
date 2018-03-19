
// React.render(
//   <div>
//   <input type="text" value=""/>
//   <button>▼</button>
//   <button>▲</button>
//   </div>,
//   document.getElementById('example')
// );

var Spinbox = React.createClass({
  getInitialState: function(){
    return{
      value: this.props.value || 100
    }
  },
  render: function() {
    return (
      <div>
          <input type="text" value={ this.state.value }/>
          <button onClick={ this.decrease }>▼</button>
          <button onClick={ this.increase }>▲</button>
      </div>
    );
  },
  decrease: function(){
    this.state.value -= 1;
    this.setState( { value: this.adjustValue(this.state.value) } );
  },
  increase: function(){
    this.state.value += 1;
    this.setState( { value: this.adjustValue(this.state.value) } );
  },
  adjustValue: function(value){
    if (value < 100) {
      value = 100;
    }
    if (value > 200) {
      value = 200;
    }

    return value;
  }
});


React.render(
  <div>
  <Spinbox value="200" /><Spinbox />
  </div> ,
  document.getElementById('example')
);
