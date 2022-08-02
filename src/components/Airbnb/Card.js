export default function Card (props) {
    const hours = new Date().getHours();
    let timeOfDay;

    if (hours < 12) {
        timeOfDay = "morning";
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon";
    } else { timeOfDay = 'night'; }
    return (
        <div className="air-card">
            <div className="air-card__ticker">SOLD OUT</div> 
            <img className="air-card__img" src={props.img} alt="bride" />
            <div className="air-card__rating">
              <svg className="air-card__star" width="12" height="11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.524.464a.5.5 0 0 1 .952 0l.983 3.027a.5.5 0 0 0 .476.346h3.184a.5.5 0 0 1 .293.904L8.837 6.613a.5.5 0 0 0-.182.559L9.64 10.2a.5.5 0 0 1-.77.559L6.295 8.887a.5.5 0 0 0-.588 0L3.13 10.76a.5.5 0 0 1-.769-.56l.984-3.027a.5.5 0 0 0-.182-.56L.588 4.743a.5.5 0 0 1 .293-.905h3.184a.5.5 0 0 0 .476-.346L5.524.464Z" fill="#FE395C"/></svg>
              &nbsp;{props.rating}<span className="air-card__lighter">({props.reviewCount}) &middot; {props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="air-card__darker">From ${props.price}</span> / person</p>
            <p>Good {timeOfDay}!</p>
        </div>
    )
}