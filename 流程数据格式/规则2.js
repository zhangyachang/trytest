var a = {
  "name": "发起人",
  "type": "start",
  "nodeId": "sid-startevent",
  "childNode": {
    "name": "UNKNOWN",
    "type": "approver",
    "prevId": "sid-startevent",
    "nodeId": "b3a0_b9ba",
    "properties": {
      "activateType": "ONE_BY_ONE",
      "agreeAll": false,
      "actionerRules": [
        {
          "type": "target_approval",
          "approvals": [
            {
              "userName": "张亚昌",
              "workNo": "054503434824052178"
            }
          ],
          "isEmpty": false
        }
      ]
    },
    "childNode": {
      "name": "UNKNOWN",
      "type": "notifier",
      "prevId": "b3a0_b9ba",
      "nodeId": "7d4e_ea8f",
      "properties": {
        "actionerRules": [
          {
            "type": "target_approval",
            "approvals": [
              {
                "userName": "王熙",
                "workNo": "wangxi"
              }
            ]
          },
          {
            "select": [
              "allStaff"
            ],
            "range": {
              "allStaff": null
            },
            "multi": 1,
            "type": "target_select",
            "key": "manual_7d4e_ea8f_dcc3_2144"
          }
        ]
      },
      "childNode": {
        "type": "route",
        "prevId": "7d4e_ea8f",
        "nodeId": "2b67_fae2",
        "conditionNodes": [
          {
            "name": "条件1",
            "type": "condition",
            "prevId": "2b67_fae2",
            "nodeId": "1feb_69a9",
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
            }
          },
          {
            "name": "条件2",
            "type": "condition",
            "prevId": "2b67_fae2",
            "nodeId": "98c4_6635",
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
            }
          }
        ],
        "properties": {

        }
      }
    }
  }
}