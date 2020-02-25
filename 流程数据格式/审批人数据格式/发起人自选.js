// 发起人自选 自选多个人 选择范围 全公司 依次审批
var a = {
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
        "key": "manual_sid-1234_5678_b834_1121",
        "actType": ""
      }
    ]
  }
}

// 发起人自选 自选多个人 范围全公司 会签
var a = {
  "name": "审批人",
  "type": "approver",
  "prevId": "sid-startevent",
  "nodeId": "sid-1234_5678",
  "properties": {
    "activateType": "ALL",
    "agreeAll": true,
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
        "key": "manual_sid-1234_5678_b834_1121",
        "actType": "and"
      }
    ]
  }
};

// 发起人自选 自选多人 指定成员 或签
var a = {
  "name": "审批人",
  "type": "approver",
  "prevId": "sid-startevent",
  "nodeId": "sid-1234_5678",
  "properties": {
    "activateType": "ALL",
    "agreeAll": false,
    "allowTaskAppend": false,
    "allowTaskRedirect": true,
    "actionerRules": [
      {
        "type": "target_select",
        "multi": 1,
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
              "userName": "张健发",
              "workNo": "zhangjianfa"
            },
            {
              "userName": "赵鹏鹏",
              "workNo": "zhaopengpeng"
            }
          ]
        },
        "isEmpty": false,
        "key": "manual_sid-1234_5678_b834_1121",
        "actType": "or"
      }
    ]
  }
};


// 发起人自选 自选一个人 选择范围 全公司
var a = {
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
        "key": "manual_sid-1234_5678_b834_1121",
        "actType": ""
      }
    ]
  }
}

// 自选一个人 选择范围:指定成员
var a = {
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
        "multi": 0,
        "select": [
          "approvals"
        ],
        "range": {
          "approvals": [
            {
              "userName": "张亚昌",
              "workNo": "054503434824052178"
            },
            {
              "userName": "王熙",
              "workNo": "wangxi"
            },
            {
              "userName": "赵鹏鹏",
              "workNo": "zhaopengpeng"
            },
            {
              "userName": "张喜权",
              "workNo": "zhangxiquan"
            }
          ]
        },
        "isEmpty": false,
        "key": "manual_sid-1234_5678_fda0_4575"
      }
    ]
  }
}


// 自选多个人 指定范围：人员
var a = {
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
          "approvals"
        ],
        "range": {
          "approvals": [
            {
              "userName": "张亚昌",
              "workNo": "054503434824052178"
            },
            {
              "userName": "王熙",
              "workNo": "wangxi"
            },
            {
              "userName": "赵鹏鹏",
              "workNo": "zhaopengpeng"
            },
            {
              "userName": "张喜权",
              "workNo": "zhangxiquan"
            }
          ]
        },
        "isEmpty": false,
        "key": "manual_sid-1234_5678_fda0_4575"
      }
    ]
  }
}



// 自选一个人 指定成员
var a = {
  "name": "审批人",
  "type": "approver",
  "prevId": "sid-startevent",
  "nodeId": "sid-1234_5678",
  "properties": {
    "activateType": "ALL",
    "agreeAll": false,
    "allowTaskAppend": false,
    "allowTaskRedirect": true,
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
              "userName": "张健发",
              "workNo": "zhangjianfa"
            },
            {
              "userName": "赵鹏鹏",
              "workNo": "zhaopengpeng"
            }
          ]/*  */
        },
        "isEmpty": false,
        "key": "manual_sid-1234_5678_b834_1121",
        "actType": "or"
      }
    ]
  }
}



// 自选一个人 从管理员中自选
var a = {
  "name": "审批人",
  "type": "approver",
  "prevId": "sid-startevent",
  "nodeId": "sid-1234_5678",
  "properties": {
    "activateType": "ALL",
    "agreeAll": false,
    "allowTaskAppend": false,
    "allowTaskRedirect": true,
    "actionerRules": [
      {
        "type": "target_select",
        "multi": 0,
        "select": [
          "labels"
        ],
        "range": {
          "labels": [
            {
              "labels": 495131628,
              "labelNames": "主管理员"
            }
          ]
        },
        "isEmpty": false,
        "key": "manual_sid-1234_5678_b834_1121",
        "actType": "or"
      }
    ]
  }
};


// 自选一个人 从标签中自选
var a = {
  "name": "审批人",
  "type": "approver",
  "prevId": "sid-startevent",
  "nodeId": "sid-1234_5678",
  "properties": {
    "activateType": "ALL",
    "agreeAll": true,
    "allowTaskAppend": false,
    "allowTaskRedirect": true,
    "actionerRules": [
      {
        "type": "target_select",
        "multi": 0,
        "select": [
          "labels"
        ],
        "range": {
          "labels": [
            {
              "labels": 495131628,
              "labelNames": "主管理员"
            }
          ]
        },
        "isEmpty": false,
        "key": "manual_sid-1234_5678_b834_1121",
        "actType": "and" // 这个属性其实是没用的 默认值
      }
    ]
  }
}

// 自选一个人 从标签中选
var a = {
  "name": "审批人",
  "type": "approver",
  "prevId": "sid-startevent",
  "nodeId": "sid-1234_5678",
  "properties": {
    "activateType": "ONE_BY_ONE",
    "agreeAll": false,
    "allowTaskAppend": false,
    "allowTaskRedirect": true,/*  */
    "actionerRules": [
      {
        "type": "target_select",
        "multi": 0,
        "select": [
          "labels"
        ],
        "range": {
          "labels": [
            {
              "labels": 495131628,
              "labelNames": "主管理员"
            }
          ]
        },
        "isEmpty": false,
        "key": "manual_sid-1234_5678_b834_1121",
        "actType": ""
      }
    ]
  }
}



