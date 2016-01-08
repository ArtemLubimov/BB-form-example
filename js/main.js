$(function() {
    var User = Backbone.Model.extend({
        template: _.template($('#form').html()),
        schema: {
            name:       'Text',
            surname:     'Text',
            birthday:   'Date'
        },
        defaults:{
            name: 'name',
            surname:'surname',
            birthday: '01.01.1990'
        }
    });
    data = {
        name: 'Stiven',
        surname: 'Gregorin',
        birthday: new Date(1978, 6, 12)
    }
    var user = new User(data);
    var form = new Backbone.Form({
        model: user,
        fields: Object.keys(data)
    }).render();


    data = { name: 'Mark',
        surname: 'Kint'}
    var user2 = new User(data);
    var form2 = new Backbone.Form({
        model: user,
        fields: Object.keys(data)
    }).render();

    $('body').append(form.el);
    $('body').append(form2.el);
});