import { Component } from 'react';

import styles from './class-something.module.css';

type Attitude = 'bored' | 'angry' | 'ambivalent' | 'confused';

interface Props {
    skill: string;
    attitude?: Attitude;
}

interface State {
    color: string;
    attitude: Attitude;
}

export class Something extends Component<Props, State> {
    state: State = { color: 'black', attitude: 'ambivalent' };
    constructor(props: Props) {
        super(props);
        this.state = { color: 'blue', attitude: 'angry' };
    }

    static getDerivedStateFromProps(props: Props, state: State) {
        if (state.attitude === 'confused') {
            return {};
        }
        return { attitude: props.attitude || state.color === 'green' ? 'bored' : 'ambivalent' };
    }

    componentDidMount(): void {
        setTimeout(() => {
            this.setState({ color: 'green' });
        }, 3000);
    }

    shouldComponentUpdate(_nextProps: Props, nextState: Readonly<State>): boolean {
        return nextState.color === 'blue' && nextState.attitude !== 'confused' ? false : true;
    }

    render() {
        return (
            <>
                <h2>
                    {`${this.state.attitude} `}
                    <span style={{ color: this.state.color }}>{this.state.color}</span>
                    {` something with a descent ${this.props.skill} skill`}
                </h2>

                <div className={styles.buttons}>
                    <button className={styles.button} type="button" onClick={() => this.changeColor('green')}>
                        Change color to green
                    </button>
                    <button className={styles.button} type="button" onClick={() => this.changeAttitude('confused')}>
                        Confuse
                    </button>
                </div>
            </>
        );
    }

    changeColor = (color: string) => {
        this.setState({ color: this.state.color === 'blue' ? color : 'blue' });
    };

    changeAttitude = (att: Attitude) => {
        this.setState({ attitude: att });
    };
}
