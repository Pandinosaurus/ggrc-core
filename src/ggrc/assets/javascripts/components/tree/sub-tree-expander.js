/*!
 Copyright (C) 2016 Google Inc.
 Licensed under http://www.apache.org/licenses/LICENSE-2.0 <see LICENSE file>
 */

(function (can) {
  'use strict';

  GGRC.Components('subTreeExpander', {
    tag: 'sub-tree-expander',
    template: '<content/>',
    scope: {
      expanded: null
    },
    events: {
      'a click': function () {
        var treeViewEl = this.element.closest('.cms_controllers_tree_view');
        var ctrl = treeViewEl.control();

        if (this.scope.expanded) {
          treeViewEl.find('.parent-related').hide();
        } else {
          ctrl.display(true);
        }

        this.scope.attr('expanded', !this.scope.attr('expanded'));
      }
    }
  });
})(window.can);
