// create marker collection

AutoForm.debug();
Meteor.subscribe('markers');
Meteor.subscribe('cases');
Session.set("desaparecidos", 0);
Session.set("deaths", 0);
FS.HTTP.setBaseUrl('/files');

Template.page_template.helpers({
    showCreateDialog:function () {
      return Session.get("showCreateDialog");
    },
    showErrorCountry:function () {
    return Session.get("showErrorCountry");
  },
    showError:function () {
        return Session.get("showError");
    }


    });



