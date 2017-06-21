var dateFromVM = new Vue({
	el: '#dateView',
	data: {
		year: year_today,
		month: month_today,
		day: day_today
	},
	computed:{
		fullYMD: function(){
			return String(this.year) + ("00" + this.month).slice(-2) + ("00" + this.day).slice(-2)
		}
	},
	components:{
		'input-date-pulldown': inputDatePulldown
	}
});