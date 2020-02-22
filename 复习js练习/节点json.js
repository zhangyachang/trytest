/* 节点json */


// var node = {
//   "name": "发起人",
//   "type": "start",
//   "nodeId": "sid-startevent",
//   "childNode": {
//     "name": "审批人",
//     "type": "approver",
//     "prevId": "sid-startevent",
//     "nodeId": "sid-1234_5678",
//     "properties": {
//       "activateType": "ONE_BY_ONE",
//       "agreeAll": false,
//       "allowTaskAppend": false,
//       "allowTaskRedirect": true,
//       "actionerRules": [{
//         "type": "target_select",
//         "multi": 1,
//         "select": ["allStaff"],
//         "range": { "approvals": [], "labels": [], "allStaff": null },
//         "isEmpty": false,
//         "key": "manual_sid-1234_5678_30a8_b373"
//       }]
//     },
//     "childNode": {
//       "name": "抄送人",
//       "type": "notifier",
//       "prevId": "sid-1234_5678",
//       "nodeId": "9955_7e43",
//       "properties": {
//         "actionerRules": [{ "select": ["allStaff"], "range": { "allStaff": null }, "multi": 1, "type": "target_select", "key": "manual_9955_7e43_0c96_39d8" }]
//       },
//       "childNode": { 
//         "type": "route", 
//         "prevId": "9955_7e43", 
//         "nodeId": "1f8d_c52d", 
//         "conditionNodes": [{ "name": "条件1", "type": "condition", "prevId": "1f8d_c52d", "nodeId": "986f_b504", "properties": { "conditions": [[{ "paramKey": "dingtalk_origin_dept", "type": "dingtalk_actioner_dept_condition", "paramLabel": "发起人", "isEmpty": false, "conds": [{ "type": "user", "value": "121923012658395122", "attrs": { "name": "张喜权", "avatar": "" } }] }]] }, "childNode": { "name": "UNKNOWN", "type": "approver", "prevId": "986f_b504", "nodeId": "f21d_1ef6", "properties": { "activateType": "ONE_BY_ONE", "agreeAll": false, "actionerRules": [{ "type": "target_approval", "approvals": [{ "userName": "张喜权", "workNo": "121923012658395122" }], "isEmpty": false }] } } }, { "name": "条件2", "type": "condition", "prevId": "1f8d_c52d", "nodeId": "c1fa_3b1f", "properties": { "conditions": [[{ "paramKey": "dingtalk_origin_dept", "type": "dingtalk_actioner_dept_condition", "paramLabel": "发起人", "isEmpty": false, "conds": [{ "type": "user", "value": "054503434824052178", "attrs": { "name": "张亚昌", "avatar": "" } }] }]] } }], "properties": {}, "childNode": { "name": "UNKNOWN", "type": "approver", "prevId": "1f8d_c52d", "nodeId": "08df_b60f", "properties": { "activateType": "ONE_BY_ONE", "agreeAll": false, "actionerRules": [{ "type": "target_approval", "approvals": [{ "userName": "张喜权", "workNo": "121923012658395122" }], "isEmpty": false }] } } }
//     }
//   }
// }


var node = {
  "name": "发起人",
  "type": "start",
  "nodeId": "sid-startevent",
  "childNode": {
    "name": "审批人",
    "type": "approver",
    "prevId": "sid-startevent",
    "nodeId": "sid-1234_5678",
    "properties": {
      "activateType": "ONE_BY_ONE",
      "agreeAll": false,
      "allowTaskAppend": false,
      "allowTaskRedirect": true,
      "actionerRules": [{
        "type": "target_select",
        "multi": 1,
        "select": ["allStaff"],
        "range": {
          "approvals": [],
          "labels": [],
          "allStaff": null
        },
        "isEmpty": false,
        "key": "manual_sid-1234_5678_30a8_b373"
      }]
    },
    "childNode": {
      "name": "抄送人",
      "type": "notifier",
      "prevId": "sid-1234_5678",
      "nodeId": "9955_7e43",
      "properties": {
        "actionerRules": [{
          "select": ["allStaff"],
          "range": {
            "allStaff": null
          },
          "multi": 1,
          "type": "target_select",
          "key": "manual_9955_7e43_0c96_39d8"
        }]
      },
      "childNode": {
        "type": "route",
        "prevId": "9955_7e43",
        "nodeId": "1f8d_c52d",
        "conditionNodes": [{
          "name": "条件1",
          "type": "condition",
          "prevId": "1f8d_c52d",
          "nodeId": "986f_b504",
          "properties": {
            "conditions": [
              [{
                "paramKey": "dingtalk_origin_dept",
                "type": "dingtalk_actioner_dept_condition",
                "paramLabel": "发起人",
                "isEmpty": false,
                "conds": [{
                  "type": "user",
                  "value": "121923012658395122",
                  "attrs": {
                    "name": "张喜权",
                    "avatar": ""
                  }
                }]
              }]
            ]
          },
          "childNode": {
            "name": "UNKNOWN",
            "type": "approver",
            "prevId": "986f_b504",
            "nodeId": "f21d_1ef6",
            "properties": {
              "activateType": "ONE_BY_ONE",
              "agreeAll": false,
              "actionerRules": [{
                "type": "target_approval",
                "approvals": [{
                  "userName": "张喜权",
                  "workNo": "121923012658395122"
                }],
                "isEmpty": false
              }]
            }
          }
        }, {
          "name": "条件2",
          "type": "condition",
          "prevId": "1f8d_c52d",
          "nodeId": "c1fa_3b1f",
          "properties": {
            "conditions": [
              [{
                "paramKey": "dingtalk_origin_dept",
                "type": "dingtalk_actioner_dept_condition",
                "paramLabel": "发起人",
                "isEmpty": false,
                "conds": [{
                  "type": "user",
                  "value": "054503434824052178",
                  "attrs": {
                    "name": "张亚昌",
                    "avatar": ""
                  }
                }]
              }]
            ]
          }
        }],
        "properties": {},
        "childNode": {
          "name": "UNKNOWN",
          "type": "approver",
          "prevId": "1f8d_c52d",
          "nodeId": "08df_b60f",
          "properties": {
            "activateType": "ONE_BY_ONE",
            "agreeAll": false,
            "actionerRules": [{
              "type": "target_approval",
              "approvals": [{
                "userName": "张喜权",
                "workNo": "121923012658395122"
              }],
              "isEmpty": false
            }]
          }
        }
      }
    }
  }
}