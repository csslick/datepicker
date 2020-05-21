/**
 * Simplified Chinese translation for bootstrap-datetimepicker
 * Yuan Cheung <advanimal@gmail.com>
 */
;(function($){
  // 한글 수정
	$.fn.datePicker.dates['ko'] = {
		days: ["일", 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
		months: ["1월", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
		now: "now",
		clear: 'clear',
		headerYearLink:'',
		units: ['-', ''],
		button: ["confirm", "cancel"],
		confirm: 'confirm',
		cancel: 'cancel',
		chooseDay: 'Choose Day',
		chooseTime: 'Choose Time',
		begin: 'Start Time',
		end: 'End Time',
		prevYear: 'prevYear',
		prevMonth: 'prevMonth',
		nextYear: 'nextYear',
		nextMonth: 'nextMonth',
		zero: '0:00'
	};
}(jQuery));
