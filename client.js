//const t = TrelloPowerUp.iframe();

TrelloPowerUp.initialize({
  'card-buttons': function(t, options) {
    return [{
      icon: 'https://google-drive.trello.services/images/icon.svg',
      text: 'Checklist+',
      callback: function(t) {
        return t.popup({
          title: "Set Checklist Durations",
          url: './popover.html',
          height: 200
        });
      }
    }];
  },

  'show-settings': function(t, options) {
    return t.popup({
      title: "Checklist+ Settings",
      url: './settings.html',
      height: 100
    });
  }
});