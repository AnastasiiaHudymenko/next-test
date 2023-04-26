const Socials = ({ socials }) => {
  if (!socials) {
    return null;
  }
  return (
    <>
      <ul>
        {socials &&
          socials.map(({ id, icon, path }) => {
            return (
              <li key={id}>
                <a href={path} target="_blank" rel="noopener noreferrer">
                  Link
                </a>
                <i className={`fab fa-${icon}`} aria-hidden="true" />
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Socials;
