import React from "react";
import code from '../../../images/portrait02.png';
/*
export default function withTitle(WrappedComponent) {
    return class extends React.Component {
        render() {
            return (
                <>
                    <h3>{this.props.name}</h3>
                    <WrappedComponent {...this.props} />
                </>
            );
        }
    }
}
*/
export function tmp () {
    console.log(code);
}

export default function withTitle (WrappedComponent) {
    return function (props) {
        class Tmp extends React.Component {
            render() {
                return (
                <>
                    <h3>{props.name}</h3>
                    <WrappedComponent {...props} />
                </>
                )
            }
        }
        return <Tmp />
    }
}