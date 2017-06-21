// コンポーネント定義
var inputDatePulldown = Vue.extend({
	props:['yearSelect'],
	template:'<select name="year"><option value={{ yearSelect.year }}></option>'
});