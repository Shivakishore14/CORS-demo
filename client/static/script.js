function requestEndpoint(url){
    // $.post(url, {}, function(res){
    //     $("#response").html(res);
    // })
    $.ajax(
        {
            url: url,
            success: function(result){
                $("#response").html(result);
            },
            error: function(result,status,xhr){
                $("#response").html(result.statusText);
                console.log(result);
            }
        }
    );
}
