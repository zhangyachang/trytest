// 从角色中选  会签  审批人为空自动移交给管理员
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
        "type": "target_label",
        "labelNames": "主管理员",
        "labels": 495131628,
        "isEmpty": false,
        "memberCount": 1,
        "actType": "and"
      }
    ],
    "noneActionerAction": "admin"
  }
}

// 从角色中选 会签 审批人为空时自动通过
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
        "type": "target_label",
        "labelNames": "主管理员",
        "labels": 495131628,
        "isEmpty": false,
        "memberCount": 1,
        "actType": "and"
      }
    ],
    "noneActionerAction": "auto"
  }
};


// 指定角色 或签 自动通过
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
        "type": "target_label",
        "labelNames": "主管理员",
        "labels": 495131628,
        "isEmpty": false,
        "memberCount": 1,
        "actType": "or"
      }
    ],
    "noneActionerAction": "auto"
  }
};

