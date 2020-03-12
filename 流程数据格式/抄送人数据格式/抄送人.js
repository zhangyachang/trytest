// 

var a = {
  "name": "UNKNOWN",
  "type": "notifier",
  "prevId": "sid-startevent",
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
        "key": "manual_7d4e_ea8f_f915_21be"
      }
    ]
  }
}

// 抄送人2
var a = {
  "name": "UNKNOWN",
  "type": "notifier",
  "prevId": "sid-startevent",
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
        "type": "target_approval",
        "approvals": [
          {
            "userName": "张健发",
            "workNo": "zhangjianfa"
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
        "key": "manual_7d4e_ea8f_f915_21be"
      }
    ]
  }
}


var b = {
  "name": "UNKNOWN",
  "type": "notifier",
  "prevId": "sid-startevent",
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
        "type": "target_approval",
        "approvals": [
          {
            "userName": "张健发",
            "workNo": "zhangjianfa"
          }
        ]
      }
    ]
  }
}


//-----------抄送人---------------------------
var a = {
  "name": "UNKNOWN",
  "type": "notifier",
  "prevId": "sid-startevent",
  "nodeId": "dc92_0834",
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
        "type": "target_approval",
        "approvals": [
          {
            "userName": "张亚昌",
            "workNo": "054503434824052178"
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
        "key": "manual_dc92_0834_2e26_582d"
      }
    ]
  }
}





////-----------------------

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
        },
        "isAdd": false,
        "childNode": {
          "name": "审批人",
          "type": "approver",
          "prevId": "b899_26c9",
          "nodeId": "0b86dfa2-5ca6-4a35-9819-f569d01b6d6e",
          "isAdd": false,
          "childNode": {
            "name": "抄送人",
            "type": "notifier",
            "prevId": "0b86dfa2-5ca6-4a35-9819-f569d01b6d6e",
            "nodeId": "f5c16103-dde6-495d-a2da-51d977b434ef",
            "properties": {
              "actionerRules": [

              ]
            },
            "isAdd": false
          }
        },
        "isBranchEndAdd": false
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
          "name": "审批人",
          "type": "approver",
          "prevId": "43cc_b5fd",
          "nodeId": "4d7c0cf5-769b-4027-a187-16d487cc1f35",
          "isAdd": false,
          "childNode": {
            "type": "route",
            "prevId": "4d7c0cf5-769b-4027-a187-16d487cc1f35",
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

            },
            "isAdd": false
          }
        },
        "isAdd": false,
        "isBranchEndAdd": false
      }
    ],
    "properties": {

    },
    "isAdd": false
  },
  "isAdd": false
}






//---------------------------------------------------------------




var obj = {

  actionerRules: [{
    type: "member",
    approvals: [
      {
        userName: "葛建辉",
        userid: "1234"
      }
    ]
  }, {
    type: 'optional',
    multi: 1, // 是否支持自选 0 1
    optional: ['role', 'approvals'], // 自选范围
    range: { //范围内容
      role: [{
        id: { type: String, default: null }, //自选角色ID
        name: { type: String, default: null } //自选角色名称
      }],
      dep: [{
        id: { type: String, default: null }, //ID
        name: { type: String, default: null } //名称
      }],
      approvals: [{
        id: { type: String, default: null }, //ID
        name: { type: String, default: null } //名称
      }]
    }
  }]



}
