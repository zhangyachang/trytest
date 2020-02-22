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
      "actionerRules": [
        {
          "type": "target_select",
          "multi": 1,
          "select": [
            "allStaff"
          ],
          "range": {
            "approvals": [

            ],
            "labels": [

            ],
            "allStaff": null
          },
          "isEmpty": false,
          "key": "manual_sid-1234_5678_30a8_b373"
        }
      ]
    },
    "childNode": {
      "type": "route",
      "prevId": "sid-1234_5678",
      "nodeId": "b3a8_a347",
      "conditionNodes": [
        {
          "name": "条件1",
          "type": "condition",
          "prevId": "b3a8_a347",
          "nodeId": "8647_1ba7",
          "properties": {
            "conditions": [
              [
                {
                  "paramKey": "dingtalk_origin_dept",
                  "type": "dingtalk_actioner_dept_condition",
                  "paramLabel": "发起人",
                  "isEmpty": false,
                  "conds": [
                    {
                      "type": "dept",
                      "value": 147825546,
                      "attrs": {
                        "name": "运维测试",
                        "memberCount": 7
                      }
                    }
                  ]
                }
              ]
            ]
          },
          "childNode": {
            "name": "抄送人",
            "type": "notifier",
            "prevId": "8647_1ba7",
            "nodeId": "9955_7e43",
            "properties": {
              "actionerRules": [
                {
                  "select": [
                    "allStaff"
                  ],
                  "range": {
                    "allStaff": null
                  },
                  "multi": 1,
                  "type": "target_select",
                  "key": "manual_9955_7e43_0c96_39d8"
                }
              ]
            }
          }
        },
        {
          "name": "条件2",
          "type": "condition",
          "prevId": "b3a8_a347",
          "nodeId": "73c2_f93a",
          "properties": {
            "conditions": [
              [
                {
                  "paramKey": "dingtalk_origin_dept",
                  "type": "dingtalk_actioner_dept_condition",
                  "paramLabel": "发起人",
                  "isEmpty": false,
                  "conds": [
                    {
                      "type": "user",
                      "value": "wangxi",
                      "attrs": {
                        "name": "王熙",
                        "avatar": ""
                      }
                    },
                    {
                      "type": "user",
                      "value": "054503434824052178",
                      "attrs": {
                        "name": "张亚昌",
                        "avatar": ""
                      }
                    }
                  ]
                }
              ]
            ]
          },
          "childNode": {
            "name": "UNKNOWN",
            "type": "approver",
            "prevId": "73c2_f93a",
            "nodeId": "d372_adc0",
            "properties": {
              "activateType": "ONE_BY_ONE",
              "agreeAll": false,
              "actionerRules": [
                {
                  "type": "target_select",
                  "multi": 0,
                  "select": [
                    "approvals"
                  ],
                  "range": {
                    "approvals": [
                      {
                        "userName": "王熙",
                        "workNo": "wangxi"
                      },
                      {
                        "userName": "张亚昌",
                        "workNo": "054503434824052178"
                      }
                    ]
                  },
                  "isEmpty": false,
                  "key": "manual_d372_adc0_7e6c_fe2b"
                }
              ]
            }
          }
        },
        {
          "name": "条件3",
          "type": "condition",
          "prevId": "b3a8_a347",
          "nodeId": "faa3_7d99",
          "properties": {
            "conditions": [

            ]
          }
        }
      ],
      "properties": {

      }
    }
  }
}