const t = TrelloPowerUp.iframe();

window.TrelloPowerUp.initialize({
  'card-buttons': function(t, options) {
    return [{
      icon: 'https://paulbaarn.nl/assets/images/clock.png',
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