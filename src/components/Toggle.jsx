/* eslint-disable react/jsx-one-expression-per-line */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

class Toggle extends React.Component {
	state = {
		on: false,
	}

	toggle = () => {
		const { on } = this.state;
		this.setState({
			on: !on,
		});
	}

	render() {
		const { render, children } = this.props;
		const { on } = this.state;
		/* Contents of client are called here, using either
		   children or render props (or both) */
		return (
			<Fragment>
				{
					/* if children prop is defined, call it to render
					   the content from the client, passing along the
					   value of on state and toggle API */
					children && children({
						on,
						toggle: this.toggle,
					})
				}
				{
					/* if render prop is defined, call it to render
					   the content from the client, passing along the
					   value of on state and toggle API */
					render && render({
						on,
						toggle: this.toggle,
					})
				}
				{
					!children && !render
					&& <pre>Are you sure you wanted to use the Toggle component?</pre>
				}
			</Fragment>
		);
	}
}

Toggle.propTypes = {
	children: PropTypes.func,
	render: PropTypes.func,
};

// Both children and render are optional.
Toggle.defaultProps = {
	children: undefined,
	render: undefined,
};

export default Toggle;
