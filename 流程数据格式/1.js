var obj = {
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
      "name": "UNKNOWN",
      "type": "notifier",
      "prevId": "sid-1234_5678",
      "nodeId": "942b_b7da",
      "properties": {
        "actionerRules": [
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
            "key": "manual_942b_b7da_0c19_8d88"
          }
        ]
      }
    }
  }
}























//--------------------------------------------------





activateType: "ALL"  指定审批人
activateType: "ONE_BY_ONE"  发起人自选

"agreeAll": false, //  这个是或签的标签  true 会签 false 或签


  actionerRules: {
  "type": "target_approval", // 指定审批人
    "actType": "and" // and会签   or 或签
}

























