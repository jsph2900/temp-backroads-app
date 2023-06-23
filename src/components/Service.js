const Service = (links) => {
  return (
    <article className="service">
      <span className="service-icon">
        <i className={links.logo}></i>
      </span>
      <div className="service-info">
        <h4 className="service-title">{links.title}</h4>
        <p className="service-text">{links.text}</p>
      </div>
    </article>
  );
};
export default Service;
