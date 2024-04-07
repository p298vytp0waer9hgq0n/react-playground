import { Component } from 'react';

interface Props {
    skill: string;
}

interface State {
    color: string;
    attitude: 'bored' | 'angry' | 'ambivalent';
}

export class Something extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { color: 'green', attitude: 'angry' };
    }

    render() {
        return (
            <>
                <h2>
                    {`${this.state.attitude} ${this.state.color} something with a descent ${this.props.skill} skill`}
                </h2>

                <button type="button" onClick={this.changeColor}>
                    Change color
                </button>
            </>
        );
    }

    changeColor = () => {
        this.setState({ color: this.state.color === 'green' ? 'cyan' : 'green' });
    };
}
