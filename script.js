$(document).ready(function () {
    // Simbolo de # para hacer referencia al id de algun elemento 
    $("#btn1").click(function () {
        //alert("hello from jquery");
        $("#message").html("hello from JQery");
        $("#message").css({backgroundColor:"#000", color: "#FFF"});
    });

    $("#btn2").click(function () {
        $.get('script1.php')
        .done(function (data) {
            console.log(data);
            $("#message2").html(data);
        })
        .fail(function (error) {
            console.log(error);
        });
    });

    $("#btn3").click(function () {
        $.getJSON('customers.php', function(data) {
            $.each(data, function(index, customer) {
                console.log("Value " + customer.name);
                $("#tblCustomers > tbody:last-child").append(
                    "<tr>" +
                    "<td>" + customer.id + "</td>" +
                    "<td>" + customer.name + "</td>" +
                    "<td>" + customer.address + "</td>" +
                    "<td>" + customer.phone + "</td>" +
                    "</tr>"
                );
            });
        });
    });
});
