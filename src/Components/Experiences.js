import Star from "../Images/Star.png";

export default function ExperienceCard(listing) {
    let badgeText;
    let badgeColor;
    if (listing.openSpots === 0) {
        badgeText = "sold out";
        badgeColor = "lightcoral";
    } else if (listing.location === "Online") {
        badgeText = "online";
        badgeColor = "lightgreen";
    }

    console.log(listing);
    return (
        <div className="experience-card">
            {badgeText && (
                <span
                    className="experience--badge"
                    style={{ backgroundColor: badgeColor }}
                >
                    {badgeText}
                </span>
            )}
            <img
                src={`../Images_pub/${listing.coverImg}`}
                alt=""
                className="experience-image"
            />
            <div className="experience--info">
                <div className="experience--rating">
                    <img src={Star} alt="Star" className="star" />
                    <span className="experience--stars">
                        {listing.rating}&nbsp;
                    </span>
                    <span className="grey">
                        ({listing.reviewCount}) •&nbsp;
                    </span>
                    <span className="grey">{listing.location}</span>
                </div>
                <div className="experience--description">
                    {listing.title}
                </div>
                <div className="experience--pricing">
                    From ${listing.price}/person
                </div>
            </div>
        </div>
    );
}
