function deleteIslandVillager(vid){
            $.ajax({
        url: '/island/dlV/' + vid,
        type: 'DELETE',
        success: function(result){
            window.location.reload(true);
        }
    })
}