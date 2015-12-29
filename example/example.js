if (Meteor.isClient) {
  Template.formTemplate.helpers({
    dateChanged() {
      return function() {
        fieldName = this.$('input').data().fieldName;
        newValue = this.$('input').val();
        console.log('You changed the date!', newValue);
      };
    },
    maybeYesterday() {
      const d = new Date();
      if (d.getHours() < 11) {
        d.setDate(d.getDate() - 1);
      }
      d.setHours(0, 0, 0, 0);
      return d;
    },
    datePickerOptions() {
      return {
        format: 'MM d yyyy',
        autoclose: true,
        orientation: 'top',
    	};
    }
  });
}
