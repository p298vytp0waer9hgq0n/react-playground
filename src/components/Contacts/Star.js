import './Contacts.css';


export default function Star (props) {
    const starStyle = props.isFavorite ? 'contact__favorite contact__favorite_active' : 'contact__favorite';
    return (
        <svg onClick={props.callback} className={starStyle} width="30" height="30" viewBox="0 0 7.938 7.938" xmlns="http://www.w3.org/2000/svg"><path d="M8.764 7.747 1.686 4.342l-5.683 6.182 1.05-7.785-7.635-3.494 7.728-1.406.964-8.342 3.725 6.916 8.232-1.661L4.64.432Z" transform="matrix(.33342 .0004 -.0004 .32419 4.103 3.955)" /></svg>
    );
}