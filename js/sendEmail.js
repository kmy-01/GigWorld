function sendEmail(){ 
    var custName = $('#name').val();
    var custEmail = $('#email').val();
    var custSubj = $('#subject').val();
    var custMessage = $('#message').val();
    $.ajax({
        method: 'POST',
        url: 'https://formsubmit.co/ajax/d7fb7afd00762e9e4b260831ed2f3b9d',
        dataType: 'json',
        accepts: 'application/json',
        data: {
            name: custName,
            email: custEmail,
            subject: custSubj,
            message: custMessage,
        },
        success: (data) => console.log(data),
        error: (err) => console.log(err)
    });
}
