import photo from '../../images/portrait01.png';
import email from '../../images/email.svg';

export default function Info () {
    return (
        <div className="visit-card__info">
            <img className="visit-card__img" alt="user" src={photo} />
            <h2 className="visit-card__name">Raphaella Ambrosia Cousteau</h2>
            <p className="visit-card__occupation">Fire mage, mostly</p>
            <a className="visit-card__link" href="https://github.com/p298vytp0waer9hgq0n?tab=repositories" rel="noreferrer" target="_blank">conflagation.shanshiracademy.edu</a>
            <button className="visit-card__email-btn" type="button">
               <img src={email} alt=""></img>Email 
            </button>
        </div>
    )
}