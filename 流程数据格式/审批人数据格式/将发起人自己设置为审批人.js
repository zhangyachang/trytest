// 将发起人自己设置为审批人


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
        "type": "target_originator",
        "isEmpty": false
      }
    ]
  }
};

