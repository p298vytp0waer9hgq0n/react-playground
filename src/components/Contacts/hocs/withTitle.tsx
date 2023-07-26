import React, { JSXElementConstructor } from "react";
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
type ContactProps = {
    img: string;
    name: string;
    phone: string;
    email: string;
}

export function tmp () {
    console.log(code);
}

export default function withTitle (WrappedComponent: JSXElementConstructor<ContactProps>) {
    return function (props: ContactProps) {
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