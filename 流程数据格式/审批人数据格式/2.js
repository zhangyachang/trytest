var obj = {
  "name": "发起人",
  "type": "start",
  "nodeId": "sid-startevent",
  "childNode": {
    "type": "route",
    "prevId": "sid-startevent",
    "nodeId": "2bdd_3209",
    "conditionNodes": [
      {
        "name": "条件1",
        "type": "condition",
        "prevId": "2bdd_3209",
        "nodeId": "899f_14db",
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
        "prevId": "2bdd_3209",
        "nodeId": "948c_73a3",
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
                    "value": "wangxi",
                    "attrs": {
                      "name": "王熙",
                      "avatar": ""
                    }
                  },
                  {
                    "type": "user",
                    "value": "zhangjianfa",
                    "attrs": {
                      "name": "张健发",
                      "avatar": ""
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




//------------------------------------------
var graphData = {
  "name": "开始",
  "type": " start",
  "prevId": "nid-start",
  "nodeId": "nid-start",
  "properties": {
    "activateType": "ONE_BY_ONE",
    "actionerRules": [
      {
        "type": "manage",
        "level": 1,
        "isEmpty": true,
        "autoUp": true
      }
    ],
    "noneActionerAction": "auto"
  },
  "childNode": {
    "name": "条件集合",
    "type": " route",
    "prevId": "nid-start",
    "nodeId": "node-001",
    "properties": {
      "activateType": "ONE_BY_ONE",
      "actionerRules": [
        {
          "type": "manage",
          "level": 1,
          "isEmpty": true,
          "autoUp": true
        }
      ],
      "noneActionerAction": "auto"
    },
    "conditionNodes": [
      {
        "name": "条件2",
        "type": "condition",
        "prevId": "node-001",
        "nodeId": "node-002",
        "properties": {
          "activateType": "ONE_BY_ONE",
          "actionerRules": [
            {
              "type": "manage",
              "level": 1,
              "isEmpty": true,
              "autoUp": true
            }
          ],
          "noneActionerAction": "auto"
        }
      },
      {
        "name": "条件2",
        "type": "condition",
        "prevId": "node-001",
        "nodeId": "node-003",
        "properties": {
          "activateType": "ONE_BY_ONE",
          "actionerRules": [
            {
              "type": "manage",
              "level": 1,
              "isEmpty": true,
              "autoUp": true
            }
          ],
          "noneActionerAction": "auto"
        }
      }
    ]
  }
}