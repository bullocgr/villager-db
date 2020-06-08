function deleteIslandFlower(flid){
            $.ajax({
        url: '/island/dlFL' + flid,
        type: 'DELETE',
        success: function(result){
            window.location.reload(true);
        }
    })
}