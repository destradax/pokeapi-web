import Input from 'components/Input';
import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';

const findMatch = (value, suggestions) => {
  if (value.length > 2) {
    const sortedSuggestions = [...suggestions].sort();
    return sortedSuggestions.find(s => s.toLowerCase().startsWith(value));
  }

  return null;
};

const AutocompleteInput = ({ value, onChange, suggestions, placeholder }) => {
  const ref = useRef();

  const [typedValue, setTypedValue] = useState(value);
  const [selectionRange, setSelectionRange] = useState(null);

  useEffect(() => {
    if (selectionRange) {
      ref.current?.setSelectionRange(selectionRange.start, selectionRange.end);
    }
  }, [selectionRange]);

  const handleChange = event => {
    const newValue = event.target.value;

    if (newValue.length > typedValue.length) {
      const match = findMatch(newValue, suggestions);

      if (match) {
        setTypedValue(newValue);
        onChange(match);
        setSelectionRange({ start: newValue.length, end: match.length });
        return;
      }
    }

    setTypedValue(newValue);
    onChange(newValue);
    setSelectionRange(null);
  };

  const handleBlur = () => {
    setTypedValue(value);
    setSelectionRange(null);
  };

  return (
    <Input
      type="text"
      value={value}
      onChange={handleChange}
      ref={ref}
      onBlur={handleBlur}
      placeholder={placeholder}
    />
  );
};

AutocompleteInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  suggestions: PropTypes.arrayOf(PropTypes.string),
  placeholder: PropTypes.string
};

export default AutocompleteInput;
