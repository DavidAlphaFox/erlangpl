// @flow
import * as t from './actionTypes';

export const updateAppsInfo = (data: any) => ({
  type: t.UPDATE_APPS_INFO,
  data
});

export const updateNodeInfo = (info: any) => ({
  type: t.UPDATE_NODE_INFO,
  info
});

export const pushTimelinePid = (pid: string) => ({
  type: t.PUSH_TIMELINE_PID,
  pid
});
