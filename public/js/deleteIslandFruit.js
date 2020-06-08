function deleteIslandFruit(frid){
            $.ajax({
        url: '/island/dlFR/' + frid,
        type: 'DELETE',
        success: function(result){
            window.location.reload(true);
        }
    })
}