require('bootstrap');
require('jquery');
require('jquery-validation');
require('node-waves');
require('../scss/app.scss');

Waves.init();
Waves.attach('.btn', ['waves-button', 'waves-float']);


$("#form").validate({
    rules: {
        name: {
            required: true,
            minlength: 3
        },
        about: {
            required: true,
            minlength: 5
        },
        checkbox: "required",        
        email: {
          required: true,
          email: true
        }
    },
    messages: {
        name: "Podaj poprawne imię - minimum 3 znaki!",
        about: "Napisz coś o sobie - minimum 5 znaków!",
        checkbox: "Musisz zaznaczyć checkboxa aby wysłać formularz!",
        email: {
            required: "Musisz wypełnić e-mail aby wysłać formularz!",
            email: "Twój e-mail musi mieć format adres@domena.pl lub podobny!"
        }
    },

    errorClass: "error", 
    validClass: "success",
    errorElement: "label",

    errorPlacement: function(error, element) {
        error.appendTo(element.parent("div").closest(".container"));
    },
    submitHandler: function() { 
        form.submit(),
        alert("Kim jesteś? Jesteś zwycięzcą ;)")
    },
    success: function(element) {
        element.remove();
    }
});