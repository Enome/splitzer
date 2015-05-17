import R from 'ramda';

var functions = {

  stringToArray: R.compose(
    R.uniq,
    R.reject(R.eq('')),
    R.split(' '),
    (string) => string.replace(/\n/g, ' '),
    (string) => string.replace(/;/g, ' '),
    (string) => string.replace(/,/g, ' ')
  ),

  join (separator, array) {

    if (array.length === 0) {
      return '';
    }

    if (separator === '') {
      return 'Please provide a separator. (\\r for newlines)';
    }

    separator = separator.replace(/\\r/g, '\r', 'g');

    return array.join(separator);

  },

  output (input, separator, sort) {

    var values = functions.stringToArray(input);

    if (sort) {
      values.sort();
    }
    
    return functions.join(separator, values);

  },
  
};

export default functions;
