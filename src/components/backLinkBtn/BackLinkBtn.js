const { useRef } = require('react');
const { useLocation } = require('react-router-dom');
const { BackLink } = require('./BackLinkBtn.styled');

const BackLinkBtn = ({ title }) => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  return (
    <BackLink to={backLinkLocationRef.current}>{title ?? 'Go Back'}</BackLink>
  );
};

export default BackLinkBtn;
