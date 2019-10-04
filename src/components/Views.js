import React, { Component } from 'react';

export default class Views extends Component {
	render() {
		return (
			<div className="image-container">
				<div className="big-container">
					<img alt="" src="http://cdn.cnn.com/cnnnext/dam/assets/140127103345-peninsula-shanghai-deluxe-mock-up.jpg" />
				</div>
				<div className="big-container">
					<img alt="" src="https://images.wsj.net/im-95036?width=620&size=1.5" />
				</div>
				<div className="big-container">
					<div className="big-small">
						<div className="small-container">
							<img alt="" src="https://www.manakaimaui.com/wp-content/uploads/2018/12/Hotel-Room-1.jpg" />
						</div>
						<div className="small-container">
							<img alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRaIlnTAf1bouXVFo_JU-LaDAjKTr4uD1QzJredZI_1M9LqBFxs" />
						</div>
					</div>
					<div className="big-small">
						<div className="small-container">
							<img alt="" src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fsarahturner%2Ffiles%2F2019%2F03%2FluxVCEGLgr-247365-Landmark-Grand-Canal-Room-Med-1200x774.jpg" />
						</div>
						<div className="small-container">
							<img alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQS8q9uwrQiOzplFGanEOyVuJSWKd6-sma966Q28bmsKpApUlsi" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

