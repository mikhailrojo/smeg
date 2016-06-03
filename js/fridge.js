var Sticker = React.createClass({
	render: function(){
		
		return (<div className="sticker">
			<p>Тут текст записки</p>
			</div>);
	}
});

ReactDOM.render(<Sticker />, document.getElementById('fridge'));