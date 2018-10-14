import * as React from 'react';

interface IHomeProps {
	name: string;
	age: number;
}

export default class Home extends React.Component<IHomeProps, object> {
	public render() {
		return <div>
			Hello there, {this.props.name}, you are {this.props.age}, right?
		</div>
	}
}
