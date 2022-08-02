import twitter from '../../images/twitter.svg';
import facebook from '../../images/facebook.svg';
import insta from '../../images/insta.svg';
import linkedin from '../../images/linkedin.svg';
import github from '../../images/github.svg';

export default function Footer () {
    return (
        <div className="visit-card__footer">
            <img src={twitter} className="visit-card__footer-icon" alt=""></img>
            <img src={facebook} className="visit-card__footer-icon" alt=""></img>
            <img src={insta} className="visit-card__footer-icon" alt=""></img>
            <img src={linkedin} className="visit-card__footer-icon" alt=""></img>
            <img src={github} className="visit-card__footer-icon" alt=""></img>
        </div>
    )
}