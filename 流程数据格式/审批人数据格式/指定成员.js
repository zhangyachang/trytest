// 指定单个成员
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
        "type": "target_approval",
        "approvals": [
          {
            "userName": "张亚昌",
            "workNo": "054503434824052178"
          }
        ],
        "isEmpty": false,
        "actType": ""
      }
    ]
  }
};


// 指定多个成员会签
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
        "type": "target_approval",
        "approvals": [
          {
            "userName": "张亚昌",
            "workNo": "054503434824052178"
          },
          {
            "userName": "王熙",
            "workNo": "wangxi"
          }
        ],
        "isEmpty": false,
        "actType": "and"
      }
    ]
  }
}

// 指定多个成员或签
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
        "type": "target_approval",
        "approvals": [
          {
            "userName": "张亚昌",
            "workNo": "054503434824052178"
          },
          {
            "userName": "王熙",
            "workNo": "wangxi"
          }
        ],
        "isEmpty": false,
        "actType": "or"
      }
    ]
  }
}

// 指定多个成员依次审批
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
        "type": "target_approval",
        "approvals": [
          {
            "userName": "张亚昌",
            "workNo": "054503434824052178"
          },
          {
            "userName": "王熙",
            "workNo": "wangxi"
          }
        ],
        "isEmpty": false,
        "actType": ""
      }
    ]
  }
}

