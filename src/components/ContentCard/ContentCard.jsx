import "./ContentCard.scss"

const ContentCard = () => {
  return (
    <div className="card">
      <video controls  className="card__video">
        <source src="https://v.redd.it/rqo8uf77923e1/DASH_360.mp4?source=fallback" type="video/mp4" />
      </video>
    </div>
  );
};

export default ContentCard;
