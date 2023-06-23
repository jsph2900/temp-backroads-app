const Tour = (value) => {
  return (
    <article className="tour-card">
      <div className="tour-img-container">
        <img src={value.picture} className="tour-img" alt="" />
        <p className="tour-date">{value.date}</p>
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>{value.tourTitle}</h4>
        </div>
        <p>{value.tourText}</p>
        <div className="tour-footer">
          <p>
            <span>
              <i className="fas fa-map"></i>
            </span>{' '}
            {value.country}
          </p>
          <p>{value.days}</p>
          <p>{value.price}</p>
        </div>
      </div>
    </article>
  );
};
export default Tour;
