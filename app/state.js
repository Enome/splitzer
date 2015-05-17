import close from 'modules/close';
import immstruct from 'immstruct';

var state = immstruct({
  input: '',
  separator: '',
  sort: false,
  notifications: [],
});

close(state);

export default state;
