var json = {
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
      "nodeId": "4698_4355",
      "conditionNodes": [
        {
          "name": "条件1",
          "type": "condition",
          "prevId": "4698_4355",
          "nodeId": "6c61_5f20",
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
            "type": "route",
            "prevId": "6c61_5f20",
            "nodeId": "2764_2386",
            "conditionNodes": [
              {
                "name": "条件1",
                "type": "condition",
                "prevId": "2764_2386",
                "nodeId": "5564_2c26",
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
                  "type": "route",
                  "prevId": "5564_2c26",
                  "nodeId": "131e_ecd9",
                  "conditionNodes": [
                    {
                      "name": "条件1",
                      "type": "condition",
                      "prevId": "131e_ecd9",
                      "nodeId": "36a6_3b6d",
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
                        "prevId": "36a6_3b6d",
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
                      "prevId": "131e_ecd9",
                      "nodeId": "94d6_b96e",
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
              },
              {
                "name": "条件2",
                "type": "condition",
                "prevId": "2764_2386",
                "nodeId": "f1f4_d816",
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
        },
        {
          "name": "条件2",
          "type": "condition",
          "prevId": "4698_4355",
          "nodeId": "eb48_de0b",
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