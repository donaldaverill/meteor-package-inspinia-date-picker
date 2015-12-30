Template.inspiniaDatePicker.onRendered(function() {
	const instance = this;
	const options = instance.data &&
		instance.data.options ?
		instance.data.options : {
			format: 'D MM d yyyy',
			autoclose: true,
			orientation: 'bottom',
		};
	const datePicker = instance.$('[data-date-picker]');
	const initialDate = instance.data &&
		instance.data.initialDate ?
		instance.data.initialDate : new Date();

	datePicker.datepicker(options);
	datePicker.datepicker('setDate', initialDate);

	if (instance.data && instance.data.onChange) {
		datePicker.datepicker().on('changeDate', () => {
			instance.data.onChange.call(instance);
		});
	}
});
