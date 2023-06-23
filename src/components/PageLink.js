const pageLink = (value) => {
  return (
    <li>
      <a href={value.links} className={value.class}>
        {value.text}
      </a>
    </li>
  );
};
export default pageLink;
