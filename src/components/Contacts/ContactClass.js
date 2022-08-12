import React from "react";

export default class Contact extends React.Component {
    render () {
        return (
            <div className='contact'>
                <img className='contact__img' src={this.props.img} alt='contact' />
                <h2 blahblah="true" className='contact__title'>{this.props.name}</h2>
                <div>
                    <p className='contact__info'>
                        <svg className='contact__icon' fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.102 1.707 6.5 4.906l6.398-3.199A1.6 1.6 0 0 0 11.3.2H1.7A1.6 1.6 0 0 0 .102 1.707Z" fill="#1E1F26" /><path d="m12.9 3.494-6.4 3.2-6.4-3.2V8.2a1.6 1.6 0 0 0 1.6 1.6h9.6a1.6 1.6 0 0 0 1.6-1.6V3.494Z" fill="#1E1F26" /></svg>
                        {this.props.phone}
                    </p>
                    <p className='contact__info'>
                        <svg className='contact__icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 202.592 202.592"><path d="m198.048 160.105-31.286-31.29c-6.231-6.206-16.552-6.016-23.001.433L128 145.009a649.985 649.985 0 0 1-3.11-1.732c-9.953-5.515-23.577-13.074-37.914-27.421C72.599 101.48 65.03 87.834 59.5 77.874c-.587-1.056-1.145-2.072-1.696-3.038l10.579-10.565 5.2-5.207c6.46-6.46 6.639-16.778.419-23.001L42.715 4.769c-6.216-6.216-16.541-6.027-23.001.433l-8.818 8.868.243.24c-2.956 3.772-5.429 8.124-7.265 12.816-1.696 4.466-2.752 8.729-3.235 12.998-4.13 34.25 11.52 65.55 53.994 108.028 58.711 58.707 106.027 54.273 108.067 54.055 4.449-.53 8.707-1.593 13.038-3.275 4.652-1.818 9.001-4.284 12.769-7.233l.193.168 8.933-8.747c6.446-6.459 6.632-16.777.415-23.015zm-7.365 16.059-3.937 3.93-1.568 1.507c-2.469 2.387-6.743 5.74-12.984 8.181-3.543 1.364-7.036 2.24-10.59 2.663-.447.043-44.95 3.84-100.029-51.235C14.743 94.38 7.238 67.395 10.384 41.259c.394-3.464 1.263-6.95 2.652-10.593 2.462-6.277 5.812-10.547 8.181-13.02l5.443-5.497c2.623-2.63 6.714-2.831 9.112-.433l31.286 31.286c2.394 2.401 2.205 6.492-.422 9.13L45.507 73.24l1.95 3.282c1.084 1.829 2.23 3.879 3.454 6.106 5.812 10.482 13.764 24.83 29.121 40.173 15.317 15.325 29.644 23.27 40.094 29.067 2.258 1.249 4.32 2.398 6.17 3.5l3.289 1.95 21.115-21.122c2.634-2.623 6.739-2.817 9.137-.426l31.272 31.279c2.391 2.397 2.201 6.488-.426 9.115z" /></svg>
                        {this.props.email}
                    </p>
                </div>
            </div>
        )
    }
}