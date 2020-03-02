var obj = {
  "name": "发起人",
  "type": "start",
  "nodeId": "sid-startevent",
  "childNode": {
    "type": "route",
    "prevId": "sid-startevent",
    "nodeId": "d748_5e4f",
    "conditionNodes": [
      {
        "name": "条件1",
        "type": "condition",
        "prevId": "d748_5e4f",
        "nodeId": "a04b_8e08",
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
              }
            ]
          ]
        }
      },
      {
        "name": "条件2",
        "type": "condition",
        "prevId": "d748_5e4f",
        "nodeId": "1bf8_cf6b",
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