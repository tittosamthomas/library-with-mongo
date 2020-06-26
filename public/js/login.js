$('document').ready(function() {
    $('input').click(function() {
        console.log('input click verified')
        $('#emailvaltext').html("");
        $('#passvaltext').html("");


    });
    let n = 0,
        m = 0;
    $('#set').click(function(e) {
        e.preventDefault();
        //email and password null validation
        console.log('submit verified');
        if ($('#first_name').val() === "") {
            $('#fnamevaltext').html("*Name ");
            console.log('fisrt name blank if');
        }
        if ($('#last_name').val() === "") {
            $('#lnamevaltext').html("Intials please ");
            console.log('last name blank if');
        }

        if ($('#email').val() == '') {
            printerr1(function() {

                console.log('You entered the callback and email is blank ')
            });


        }
        if ($('#password').val() == '') {
            printerr1a(function() {

                    console.log('You entered the callback and password is blank')
                }

            );



        } else if ($('#email').val().length < 6) {

            printerr2(function() {

                console.log('Email is less than 6');
            });

            if ($('#password').val().length < 6) {

                printerr2a(function() {

                    console.log('entered in second loop');

                });
            }
        } else {
            let data1 = $('#email').val();

            emailchecker(data1, function() { console.log('Enterd main of email checker') });

        }


    });

    function printerr1(callback) {
        console.log('entered in email blank');
        $('#emailvaltext').html("*This is a required field");
        callback();
    }

    function printerr1a(callback) {
        console.log('entered in pass blank');
        $('#passvaltext').html("This is a required field");
        callback();
    }

    function printerr2(callback) {
        console.log('entered in email length');
        $('#emailvaltext').html("*Email shouldnt be less than 6");
        callback();

    }

    function printerr2a(callback) {
        console.log('entered in passs lngth');
        $('#passvaltext').html("*passsword must contain 6 characters");
        callback();
    }

    function emailchecker(data1, callback) {
        console.log('entered in mail checker');
        let flag = 0;
        let email = data1.toLocaleUpperCase().endsWith("COM");
        let chk = data1.includes('@');
        if (email === false) {
            console.log(email);
            $('#emailvaltext').html("You missed '.com'?");
            callback();
        } else if (chk === 'false') {
            console.log(chk)
            $('#emailvaltext').append(" where is @ ?");
            callback();
        } else {
            console.log('entered string checker')
            let m = data1.length;
            console.log(m);
            for (let i = 0; i < 20; i++) {
                if (data1.charAt(i) === '!' || data1.charAt(i) === '#' || data1.charAt(i) === '$' || data1.charAt(i) === '%' || data1.charAt(i) === '^' || data1.charAt(i) === '&' || data1.charAt(i) === '*') {
                    $('#emailvaltext').html("Not a valid email Address dont use " + data1.charAt(i));
                    console.log(data1.charAt(i))
                }
                $('#emailvaltext').css("color", "green");
                $('#emailvaltext').html("You have a nice email address");
                $('#passvaltext').css("color", "green");
                $('#passvaltext').html("Your accounted is being verified");
                console.log('loop is over ');

            }


        }


    }


});



s