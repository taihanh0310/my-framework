import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import PageHead from '../app/PageHead';
import Breadcrumb from '../app/Breadcrumb';
import PageContent from '../app/PageContent';

import * as DoctorActions from './actions/view';
import {routerActions} from 'react-router-redux';
import Routes from '../common/config/routes';

class DoctorView extends Component{
	componentDidMount(){
		this.props.doctorBackendLoadList();
	}
	render(){
		return(
			<div className="page-content-wrapper">
				<PageHead title={'Doctor List'}/>
				<PageContent>
					<Breadcrumb>
						<li>
							<span>Doctor List</span>
						</li>
					</Breadcrumb>
					<div className="page-content-inner">
						<div className="row">
							<div className="col-md-12">
								
								<div className="portlet box blue-hoki">
									<div className="portlet-title">
										<div className="caption">
											Doctor List
										</div>
										<div className="actions">
											<a className="btn btn-default btn-sm"
												onClick={()=>this.props.push(Routes.backend.doctorNew)}>
												<i className="fa fa-plus"/> New Doctor
											</a>
										</div>
									</div>
								</div>

							</div>
						</div>
					</div>
				</PageContent>
			</div>
		);
	};
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators({
		...DoctorActions,
		...routerActions
	}, dispatch);
};

export default connect(null, mapDispatchToProps)(DoctorView);