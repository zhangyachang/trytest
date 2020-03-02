var obj = {
  "name": "发起人",
  "type": "start",
  "nodeId": "sid-startevent",
  "childNode": {
    "type": "route",
    "prevId": "sid-startevent",
    "nodeId": "9aac_b91d",
    "conditionNodes": [
      {
        "name": "条件1",
        "type": "condition",
        "prevId": "9aac_b91d",
        "nodeId": "2ced_f7f8",
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
                    "value": "054503434824052178",
                    "attrs": {
                      "name": "张亚昌",
                      "avatar": ""
                    }
                  },
                  {
                    "type": "user",
                    "value": "wangxi",
                    "attrs": {
                      "name": "王熙",
                      "avatar": ""
                    }
                  }
                ]
              },
              {
                "type": "dingtalk_actioner_range_condition",
                "paramKey": "MoneyField-K7AA81G2",
                "paramLabel": "金额（元）",
                "lowerBound": "",
                "upperBound": "",
                "isEmpty": false,
                "valid": "valid",
                "lowerBoundNotEqual": "1",
                "upperBoundEqual": "",
                "boundEqual": "",
                "key": "g"
              }
            ]
          ]
        },
        "childNode": {
          "type": "route",
          "prevId": "2ced_f7f8",
          "nodeId": "229b_b6be",
          "conditionNodes": [
            {
              "name": "条件1",
              "type": "condition",
              "prevId": "229b_b6be",
              "nodeId": "01cb_a7ef",
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
                          "value": "zhangjianfa",
                          "attrs": {
                            "name": "张健发",
                            "avatar": ""
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
              "prevId": "229b_b6be",
              "nodeId": "228c_8c14",
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
                          "value": "huodong",
                          "attrs": {
                            "name": "胡董",
                            "avatar": ""
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
      },
      {
        "name": "条件2",
        "type": "condition",
        "prevId": "9aac_b91d",
        "nodeId": "4c03_f8a6",
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