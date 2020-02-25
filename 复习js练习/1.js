// console.log('引入了我');

// document.write("写入内容"); // = "写入的内容";

// document.body.innerHTML = '<h1>Hello World</h1>';






var a = {
  "name": "发起人",
  "type": "start",
  "nodeId": "sid-startevent",
  "childNode": {
    "type": "route",
    "prevId": "sid-startevent",
    "nodeId": "eb90_975c",
    "conditionNodes": [
      {
        "name": "条件1",
        "type": "condition",
        "prevId": "eb90_975c",
        "nodeId": "b899_26c9",
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
        "prevId": "eb90_975c",
        "nodeId": "43cc_b5fd",
        "properties": {
          "conditions": [

          ]
        },
        "childNode": {
          "type": "route",
          "prevId": "43cc_b5fd",
          "nodeId": "e7b0_3ab4",
          "conditionNodes": [
            {
              "name": "条件1",
              "type": "condition",
              "prevId": "e7b0_3ab4",
              "nodeId": "23ec_ae00",
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
              "prevId": "e7b0_3ab4",
              "nodeId": "eeb1_f416",
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
    ],
    "properties": {

    }
  }
}






var c = {
  "name": "发起人",
  "type": "start",
  "nodeId": "sid-startevent",
  "childNode": {
    "type": "route",
    "prevId": "sid-startevent",
    "nodeId": "eb90_975c",
    "conditionNodes": [
      {
        "name": "条件1",
        "type": "condition",
        "prevId": "eb90_975c",
        "nodeId": "b899_26c9",
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
        "prevId": "eb90_975c",
        "nodeId": "43cc_b5fd",
        "properties": {
          "conditions": [

          ]
        },
        "childNode": {
          "type": "route",
          "prevId": "43cc_b5fd",
          "nodeId": "e7b0_3ab4",
          "conditionNodes": [
            {
              "name": "条件1",
              "type": "condition",
              "prevId": "e7b0_3ab4",
              "nodeId": "23ec_ae00",
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
              "prevId": "e7b0_3ab4",
              "nodeId": "eeb1_f416",
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
    ],
    "properties": {

    },
    "childNode": {
      "name": "UNKNOWN",
      "type": "approver",
      "prevId": "eb90_975c",
      "nodeId": "4e7a_3b4d",
      "properties": {
        "activateType": "ONE_BY_ONE",
        "agreeAll": false,
        "actionerRules": [
          {
            "type": "target_select",
            "multi": 0,
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
            "key": "manual_4e7a_3b4d_b330_3e04"
          }
        ]
      }
    }
  }
}






