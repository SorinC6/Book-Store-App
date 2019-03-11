import React from 'react';
import Register from '../../components/RegisterComponent/Register';
import { connect } from 'react-redux';
import { register } from '../../store/actions';

const RegisterView = (props) => {
   //console.log('REGISTER VIEW PROPS',props.isRegistering)
	return (
		<div>
			<Register register={props.register} isRegistering={props.isRegistering} />
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		isRegistering: state.isRegistering
	};
};

export default connect(mapStateToProps,{register})(RegisterView);
