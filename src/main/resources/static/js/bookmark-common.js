function confirmBookmarkDelete(bookmarkId, afterDeleteAction) {
	if(confirm("Record will be deleted. Are you sure?")) {
		jQuery.ajax({
			url: '/bookmark/' + bookmarkId,
			type: 'DELETE',
			success: function(result) {
				alert('Record deleted Successfully!');
				afterDeleteAction(); 
			},
			error: function(result) {
				alert('Something wrong , server Failed to delete this record!');
			}
		});
	}
}

function pageRefresh(){
	bookmarkTable.setPage(1);// TODO: stay at current page or go to previous page if no data found in current page
}

function goHome(){
	window.location.href = '/bookmark/';
}