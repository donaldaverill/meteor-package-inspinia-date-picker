# Blaze date picker component for the [Inspinia](https://wrapbootstrap.com/theme/inspinia-responsive-admin-theme-WB0R5L90S) admin theme.
**Note:** [Inspinia Styles](https://wrapbootstrap.com/theme/inspinia-responsive-admin-theme-WB0R5L90S) must be included separately. See below for [instructions](#how-to-include-styles) on how to include styles.
### Installation
```bash
meteor add fourquet:inspinia-date-picker
```
### Example:
```html
<!-- formTemplate.html -->
<template name="formTemplate">
  <form id="someForm">
    {{> inspiniaDatePicker
      field='awesomeDate'
      initialDate=maybeYesterday
      onChange=dateChanged
      options=datePickerOptions}}
  </form>
</template>
```
```js
// formTemplate.js
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
```
See [full example in the repository](https://github.com/fourquet/meteor-package-inspinia-date-picker/tree/master/example).
##### Arguments:
- *field*, String, Required.
  - The name of the field.
- *initialDate*, Date, Optional.
  - The initial Date for the datepicker. Defaults to current date.
- *onChange*, Function, Optional.
  - Function to run on change events.
- *options*, Object, Optional.
  - Options to pass to datepicker. See datepicker [docs](http://bootstrap-datepicker.readthedocs.org/en/latest/index.html) for details.
- *success*, Boolean, Optional
  - Displays message below textField but only if the *success* is `false` and *submitted* is `true` and *error* message exists.
- *submitted*, Boolean, Optional
  - If *success* is `true`, an error message may be displayed below the textField.
- *errorMessage*, String, Optional
  - An error message to be displayed if *success* is `false` and *submitted* is `true`.

#### How to include styles
* [Purchase](https://wrapbootstrap.com/theme/inspinia-responsive-admin-theme-WB0R5L90S) theme at [wrapbootstrap.com](https://wrapbootstrap.com).
* In the app, if the `packages` directory does not exists, create it in the app root: `mkdir packages && cd packages`.
* Create a new Meteor package: `meteor create --package fourquet:inspinia-styles`
* Add the styles to the new package directory like below:

![screen shot 2016-01-13 at 9 22 48 am](https://cloud.githubusercontent.com/assets/5255608/12302061/2acfac3a-b9d8-11e5-8223-2f039527679e.png)

* Edit `package.js` so the `Package.onUse` looks like:

![screen shot 2016-01-13 at 9 36 55 am](https://cloud.githubusercontent.com/assets/5255608/12302280/4c34505a-b9d9-11e5-9064-022900fc92fe.png)

* Add the package to your app: `meteor add fourquet:inspinia-styles`.

#### Version
0.0.2

#### License
MIT
