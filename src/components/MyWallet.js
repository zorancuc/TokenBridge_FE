import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { getCurrentUser } from '../actions/authentication';
import { logoutUser } from '../actions/authentication';
import { getExchangeBalance } from '../actions/wallet';
import classnames from 'classnames';
import Footer from './Footer';
import { withRouter } from 'react-router-dom';

class MyWallet extends Component {
	constructor() {
		super();
		this.state = {
			circlePopUp: false,
		}
		this.settingBtnClick = this.settingBtnClick.bind(this);
		this.circlePopupBtnClick = this.circlePopupBtnClick.bind(this);
	}

	circlePopupBtnClick() {
		this.setState({
			circlePopUp: !this.state.circlePopUp
		});
	}
	
	componentDidUpdate(props) {
		// console.log("PIA_BLANCE:", this.props.wallet.piaBalance);
	}
	componentDidMount() {
		this.props.getExchangeBalance();
	}

	settingBtnClick(e) {
		e.preventDefault();
		this.props.logoutUser(this.props.history);
	}

	render() {
		const {circlePopUp} = this.state;
		return (
			<section className="mywalletSection">
				<div className="container">
					<div className="row">
						<div className="col-12 headerTitle">
							<h1><img src="images/logoIc.png"/> MY WALLET</h1>
						</div>
						<div className="col-12">
							<div className="walletTotal">
								<div className="walletTitle">total</div>
								<div className="walletPrice">
									<h1><span>$</span> {this.props.wallet.piaBalance * 10 + this.props.wallet.ethBalance * 10}</h1>
									<div className="krwText"><img src="images/krw.png"/>{(this.props.wallet.piaBalance * 10 + this.props.wallet.ethBalance * 10) * 1000}</div>
								</div>
							</div>
						</div>
						<div className="col-12 text-center">
							<div className="row">
								<div className="col-6">
									<button type="button" className="btn_2"><img src="images/ic_Up.png"/> 송금</button>
								</div>
								<div className="col-6">
									<button type="button" className="btn_2"><img src="images/ic_Down.png"/> 받기</button>
								</div>
								<div className="col-12">
									<hr className="hrBlue"/>
								</div>
							</div>
						</div>
						<div className="col-12">
							<table className="table table-borderless tableList">
								<tbody>
									<tr>
										<td><span className="icLogo"><img src="images/ic_oas.png"/></span> OAS [PASTA]</td>
										<td>{this.props.wallet.piaBalance}
										<span><strong>$</strong> {this.props.wallet.piaBalance * 10}</span>
										</td>
									</tr>
									<tr>
										<td><span className="icLogo"><img src="images/ic_oas_2.png"/></span> OAS [ERC 20]</td>
										<td>{this.props.wallet.ethBalance}
										<span><strong>$</strong> {this.props.wallet.ethBalance * 10}</span>
										</td>
									</tr>
									<tr>
										<td><span className="icLogo"><img src="images/ic_bnb.png"/></span> BNB</td>
										<td>100.000
										<span><strong>$</strong> 0</span>
										</td>
									</tr>
									<tr>
										<td><span className="icLogo"><img src="images/ic_pia.png"/></span> PIA</td>
										<td>100.000
										<span><strong>$</strong> 0</span>
										</td>
									</tr>
									<tr>
										<td><span className="icLogo"><img src="images/ic_snac_2.png"/></span> SNAC</td>
										<td>100.000
										<span><strong>$</strong> 0</span>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
				<Footer />
			</section>
		);
	}
}

MyWallet.propTypes = {
	logoutUser: PropTypes.func.isRequired,
	getExchangeBalance: PropTypes.func.isRequired,
	// user: PropTypes.object.isRequired,
	wallet: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	wallet: state.wallet,
	errors: state.errors
})

export default connect(mapStateToProps, { logoutUser, getExchangeBalance })(withRouter(MyWallet))