/*
    Copyright (C) 2018 Google Inc.
    Licensed under http://www.apache.org/licenses/LICENSE-2.0 <see LICENSE file>
*/

import template from './add-object-button.mustache';

export default can.Component.extend({
  tag: 'add-object-button',
  template,
  viewModel: {
    instance: null,
    linkclass: '@',
    content: '@',
    text: '@',
    singular: '@',
    plural: '@',
    define: {
      noparams: {
        type: 'htmlbool',
        value: false,
      },
    },
  },
});
