const SocialLink = (value) => {
  return (
    <li>
      <a
        href={value.iconLink}
        target="_blank"
        className={value.classname}
        rel="noreferrer"
      >
        <i className={value.iconClassLogo}></i>
      </a>
    </li>
  );
};
export default SocialLink;
