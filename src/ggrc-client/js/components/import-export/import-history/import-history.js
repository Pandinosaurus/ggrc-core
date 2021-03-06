/*
    Copyright (C) 2018 Google Inc.
    Licensed under http://www.apache.org/licenses/LICENSE-2.0 <see LICENSE file>
*/

import template from './import-history.mustache';
import {formatDate} from '../../../plugins/ggrc_utils';

export default can.Component.extend({
  tag: 'import-history',
  template,
  viewModel: {
    history: [],
    remove(id) {
      this.dispatch({
        type: 'removeItem',
        id,
      });
    },
    download(id, title) {
      this.dispatch({
        type: 'downloadCsv',
        id,
        title,
      });
    },
  },
  helpers: {
    createdAt(date) {
      let md = moment.utc(date());
      return formatDate(md.toDate());
    },
  },
});
