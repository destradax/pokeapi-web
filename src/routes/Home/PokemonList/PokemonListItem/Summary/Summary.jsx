import PropTypes from 'prop-types';

const Summary = ({ pokemonData, className }) => {
  return <div className={className}>Types: normal fighting flying</div>;
};

Summary.propTypes = {
  pokemonData: PropTypes.object,
  className: PropTypes.string
};

export default Summary;
