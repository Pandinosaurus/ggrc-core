# Copyright (C) 2018 Google Inc.
# Licensed under http://www.apache.org/licenses/LICENSE-2.0 <see LICENSE file>
"""PyTest fixture utils."""
import os

from lib import cache, constants, factory, url
from lib.constants import path
from lib.page import dashboard
from lib.utils import selenium_utils


def get_lhn_accordion(driver, object_name):
  """Select relevant section in LHN and return relevant section accordion."""
  selenium_utils.open_url(driver, url.Urls().dashboard)
  lhn_menu = dashboard.Header(driver).open_lhn_menu()
  # if object button not visible, open this section first
  if object_name in cache.LHN_SECTION_MEMBERS:
    method_name = factory.get_method_lhn_select(object_name)
    lhn_menu = getattr(lhn_menu, method_name)()
  return getattr(lhn_menu, constants.method.SELECT_PREFIX + object_name)()


def delete_obj_via_info_widget(driver, object_name):
  """Delete object via Info Widget."""
  (factory.get_cls_widget(object_name, is_info=True)(driver)
   .open_3bbs().select_delete().confirm_delete())


class DevLogRetriever(object):
  """A class to retrieve logs from the dev server.
  Only logs added between class initialization and retrieval are returned."""
  # pylint: disable=too-few-public-methods

  def __init__(self, filename):
    self.path = path.LOGS_DIR + filename
    self.position = os.stat(self.path).st_size

  def get_added_logs(self):
    """Return logs appeared in the file since object instantiation"""
    with open(self.path, "r") as log_file:
      log_file.seek(self.position)
      contents = log_file.read()
      self.position = log_file.tell()
      return contents
