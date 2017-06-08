// カレンダーページ

$(document).ready(function () {
	// カレンダー生成
	var dayClick = function(date){
		dateModel.year = date._d.getFullYear();
		dateModel.month = date._d.getMonth() + 1;
		dateModel.day = date._d.getDate();
		$('select[name=year] option[value=' + dateModel.year + ']').prop('selected', true);
		$('select[name=month] option[value=' + dateModel.month + ']').prop('selected', true);
		$('select[name=day] option[value=' + dateModel.day + ']').prop('selected', true);
		$('#date-input-modal').modal('show');
	};
	$('#calendar').fullCalendar({
		header: {
            left: 'title',
            right: 'prev,next today'
        },
        events: [
				{
					title: 'All Day Event',
					start: '2017-05-01'
				},
				{
					title: 'Long Event',
					start: '2017-06-07',
					end: '2017-06-10'
				},
				{
					id: 999,
					title: 'Repeating Event',
					start: '2017-05-09T16:00:00'
				},
				{
					id: 999,
					title: 'Repeating Event',
					start: '2017-05-16T16:00:00'
				},
				{
					title: 'Conference',
					start: '2017-05-11',
					end: '2017-05-13'
				},
				{
					title: 'Meeting',
					start: '2017-05-12T10:30:00',
					end: '2017-05-12T12:30:00'
				},
				{
					title: 'Lunch',
					start: '2017-05-12T12:00:00'
				},
				{
					title: 'Meeting',
					start: '2017-05-12T14:30:00'
				},
				{
					title: 'Happy Hour',
					start: '2017-05-12T17:30:00'
				},
				{
					title: 'Dinner',
					start: '2017-05-12T20:00:00'
				},
				{
					title: 'Birthday Party',
					start: '2017-05-13T07:00:00'
				},
				{
					title: 'Click for Google',
					url: 'http://google.com/',
					start: '2017-05-28'
				}
			],
		editable: true,
		droppable: true,
		dayClick: dayClick,
	});
	
	
	
	// 入力フォーム
	// 現在日時
	//var current = new Date();
	
	//var year_val = current.getFullYear();
	//var month_val = current.getMonth() + 1;
	//var day_val = current.getDate();
	
	var year_val = dateModel.year;
	var month_val = dateModel.month;
	var day_val = dateModel.day;

	// プルダウン生成
	$('#year_pulldown').html('<select name="year">');
	// 昇順
	for (var i = year_val; i <= year_val + 10; i++) {
		$('#year_pulldown select').append('<option value="' + i + '">' + i + '</option>');
	}
	$('#year_pulldown').append('年');

	$('#month_pulldown').html('<select name="month">');
	for (var i = 1; i <= 12; i++) {
		$('#month_pulldown select').append('<option value="' + i + '">' + i + '</option>');
	}
	$('#month_pulldown').append('月');
  
	$('#day_pulldown').html('<select name="day">');
	for (var i = 1; i <= 31; i++) {
		$('#day_pulldown select').append('<option value="' + i + '">' + i + '</option>');
	}
	$('#day_pulldown').append('日');
  
  	// デフォルト
  	$('select[name=year] option[value=' + year_val + ']').prop('selected', true);
  	$('select[name=month] option[value=' + month_val + ']').prop('selected', true);
  	$('select[name=day] option[value=' + day_val + ']').prop('selected', true);
  	// 年を選択ごとに日付を修正して表示
    $('select[name=year]').change(function(){
		leapYearCheck();
    });
    // 月を選択ごとに日付を修正して表示
    $('select[name=month]').change(function(){
		leapYearCheck();
    });
    
    function leapYearCheck(){
    	var savedDate = $('select[name=day]').val();
		$('select[name=day]').empty();
    	var y = $("select[name=year]").val();
    	var m = $("select[name=month]").val();
    	if (2 == m && (0 == y % 400 || (0 == y % 4 && 0 != y % 100))) {
    		var last = 29;
    	} else {
    		var last = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31)[m - 1];
    	}
    	for (var i = 1; i <= last; i++) {
    		$('select[name=day]').append('<option value="' + i + '">' + i + '</option>');
    	}
    	if(savedDate <= last){
    		$('select[name=day] option[value=' + savedDate + ']').prop('selected', true);
    	}else{
    		$('select[name=day] option[value=' + last + ']').prop('selected', true);
    	}
	}
});