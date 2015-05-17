var gui = window.require('nw.gui');
var win = gui.Window.get();

var close = (state) => {
  
  var stored_state = localStorage.state;

  if (typeof stored_state !== 'undefined') {
    state.cursor().update((map) => map.mergeDeep(JSON.parse(stored_state)));
  }

  win.on('close', function () {
    localStorage.state = JSON.stringify(state.cursor().toJS());
    this.close(true);
  });

};

export default close;
