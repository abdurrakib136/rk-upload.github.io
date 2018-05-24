(function ($) {
    "use strict";


    $('#select').keypress(function (event) {

        if (event.keyCode === 13) {
            $("#search").focus();
        }
    });

    $('#search').keypress(function (event) {

        var select = $("#select").val();
        if (event.keyCode === 13 && select == 'Dr') {
            $("#debit").focus();
        }
    });

    $('#search').keypress(function (event) {

        var select = $("#select").val();
        if (event.keyCode === 13 && select == 'Cr') {
             $("#debit").val('');
            $("#cradit").focus();
        }
    });

    jQuery(document).ready(function ($) {



        $('#debit').keypress(function (event) {

            var search = $("#search").val();
            var select = $("#select").val();
            var debit = $("#debit").val();
            var cradit = $("#cradit").val();
            if (event.which == 13 && select == 'Dr') {

                $("#search").val('');
                 $("#debit").val('');
                 $("#cradit").val('');
                var markup = "<tr> <td>" + select + "</td> <td>" + search + "</td> <td>" + debit + "</td> <td>" + cradit + "</td> </tr>";
                $("table tbody").append(markup);

            }
        });
        $('#cradit').keypress(function (event) {

            var search = $("#search").val();
            var select = $("#select").val();
            var debit = $("#debit").val();
            var cradit = $("#cradit").val();
            if (event.which == 13  && select == 'Cr') {
                $("#search").val('');
                 $("#debit").val('');
                 $("#cradit").val('');
                var markup = "<tr> <td>" + select + "</td> <td>" + search + "</td> <td>" + debit + "</td>  <td>" + cradit + "</td> </tr>";
                $("table tbody").append(markup);

            }
        });




    });

}(jQuery));
