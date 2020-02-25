// 表单里的联系人
// 选择的表单控件(名称为 联系人审批人) 依次审批 审批人为空时自动移交管理员

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
        "type": "target_formcomponent_approval",
        "paramKey": "InnerContactField-K6X8J6SZ",
        "isEmpty": false,
        "label": "联系人审批人"
      }
    ],
    "noneActionerAction": "admin"
  }
};






