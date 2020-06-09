function deleteVillager(id){
            $.ajax({
        url: '/villagers/' + id,
        type: 'DELETE',
        success: function(result){
            window.location.reload(true);
        }
    })
}