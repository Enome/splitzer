var gui = window.require('nw.gui');

var Menu = () => {

  var menu = new gui.Menu();

  var cut = new gui.MenuItem({
    label: 'Cut',
    click: () => {
      document.execCommand('cut');
      console.log('Menu:', 'cutted to clipboard');
    }
  });

  var copy = new gui.MenuItem({
    label: 'Copy',
    click: () => {
      document.execCommand('copy');
      console.log('Menu:', 'copied to clipboard');
    }
  });

  var paste = new gui.MenuItem({
    label: 'Paste',
    click: () => {
      document.execCommand('paste');
      console.log('Menu:', 'pasted to textarea');
    }
  });

  menu.append(cut);
  menu.append(copy);
  menu.append(paste);

  return menu;

};

export default {

  start () {
    var menu = new Menu();

    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      menu.popup(e.x, e.y);
    });
  }

}
