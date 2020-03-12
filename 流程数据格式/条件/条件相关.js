// 四个条件
var obj = {
  "name": "发起人",
  "type": "start",
  "nodeId": "sid-startevent",
  "childNode": {
    "type": "route",
    "prevId": "sid-startevent",
    "nodeId": "f561_1cfe",
    "conditionNodes": [
      {
        "name": "条件1",
        "type": "condition",
        "prevId": "f561_1cfe",
        "nodeId": "90e5_2f15",
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
              },
              {
                "type": "dingtalk_actioner_range_condition",
                "paramKey": "NumberField-K7EC2U7F",
                "paramLabel": "年龄",
                "lowerBound": 100,
                "upperBound": "",
                "isEmpty": false,
                "valid": "valid"
              },
              {
                "type": "dingtalk_actioner_value_condition",
                "paramKey": "DDSelectField-K7EC4Y5W",
                "paramLabel": "喜欢吃什么水果",
                "paramValue": "",
                "paramValues": [
                  "option_0"
                ],
                "isEmpty": false,
                "valid": "valid"
              },
              {
                "type": "dingtalk_actioner_range_condition",
                "paramKey": "MoneyField-K7EC2U7G",
                "paramLabel": "报销金额",
                "lowerBound": "",
                "upperBound": "",
                "isEmpty": false,
                "valid": "valid",
                "lowerBoundNotEqual": "",
                "upperBoundEqual": 500,
                "boundEqual": "",
                "key": "le"
              }
            ]
          ]
        }
      },
      {
        "name": "条件2",
        "type": "condition",
        "prevId": "f561_1cfe",
        "nodeId": "ffd4_fe4b",
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








// 条件 年龄小于20
var obj = {
  "name": "发起人",
  "type": "start",
  "nodeId": "sid-startevent",
  "childNode": {
    "type": "route",
    "prevId": "sid-startevent",
    "nodeId": "bb46_e4c1",
    "conditionNodes": [
      {
        "name": "条件1",
        "type": "condition",
        "prevId": "bb46_e4c1",
        "nodeId": "8a45_a71d",
        "properties": {
          "conditions": [
            [
              {
                "type": "dingtalk_actioner_range_condition",
                "paramKey": "NumberField-K7EC2U7F",
                "paramLabel": "年龄",
                "lowerBound": "",
                "upperBound": 20,
                "isEmpty": false,
                "valid": "valid",
                "lowerBoundNotEqual": "",
                "upperBoundEqual": "",
                "boundEqual": "",
                "key": "l"
              }
            ]
          ]
        }
      },
      {
        "name": "条件2",
        "type": "condition",
        "prevId": "bb46_e4c1",
        "nodeId": "5fdf_9f72",
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






// 条件 年龄大于20
var obj = {
  "name": "发起人",
  "type": "start",
  "nodeId": "sid-startevent",
  "childNode": {
    "type": "route",
    "prevId": "sid-startevent",
    "nodeId": "bb46_e4c1",
    "conditionNodes": [
      {
        "name": "条件1",
        "type": "condition",
        "prevId": "bb46_e4c1",
        "nodeId": "8a45_a71d",
        "properties": {
          "conditions": [
            [
              {
                "type": "dingtalk_actioner_range_condition",
                "paramKey": "NumberField-K7EC2U7F",
                "paramLabel": "年龄",
                "lowerBound": "",
                "upperBound": "",
                "isEmpty": false,
                "valid": "valid",
                "lowerBoundNotEqual": 20,
                "upperBoundEqual": "",
                "boundEqual": "",
                "key": "g"
              }
            ]
          ]
        }
      },
      {
        "name": "条件2",
        "type": "condition",
        "prevId": "bb46_e4c1",
        "nodeId": "5fdf_9f72",
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



// --- 小于等于20
var obj = {
  "name": "发起人",
  "type": "start",
  "nodeId": "sid-startevent",
  "childNode": {
    "type": "route",
    "prevId": "sid-startevent",
    "nodeId": "bb46_e4c1",
    "conditionNodes": [
      {
        "name": "条件1",
        "type": "condition",
        "prevId": "bb46_e4c1",
        "nodeId": "8a45_a71d",
        "properties": {
          "conditions": [
            [
              {
                "type": "dingtalk_actioner_range_condition",
                "paramKey": "NumberField-K7EC2U7F",
                "paramLabel": "年龄",
                "lowerBound": "",
                "upperBound": "",
                "isEmpty": false,
                "valid": "valid",
                "lowerBoundNotEqual": "",
                "upperBoundEqual": 20,
                "boundEqual": "",
                "key": "le"
              }
            ]
          ]
        }
      },
      {
        "name": "条件2",
        "type": "condition",
        "prevId": "bb46_e4c1",
        "nodeId": "5fdf_9f72",
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


// 等于20
var obj = {
  "name": "发起人",
  "type": "start",
  "nodeId": "sid-startevent",
  "childNode": {
    "type": "route",
    "prevId": "sid-startevent",
    "nodeId": "bb46_e4c1",
    "conditionNodes": [
      {
        "name": "条件1",
        "type": "condition",
        "prevId": "bb46_e4c1",
        "nodeId": "8a45_a71d",
        "properties": {
          "conditions": [
            [
              {
                "type": "dingtalk_actioner_range_condition",
                "paramKey": "NumberField-K7EC2U7F",
                "paramLabel": "年龄",
                "lowerBound": "",
                "upperBound": "",
                "isEmpty": false,
                "valid": "valid",
                "lowerBoundNotEqual": "",
                "upperBoundEqual": "",
                "boundEqual": 20,
                "key": "e"
              }
            ]
          ]
        }
      },
      {
        "name": "条件2",
        "type": "condition",
        "prevId": "bb46_e4c1",
        "nodeId": "5fdf_9f72",
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




//------------大于等于20-------------
var obj = {
  "name": "发起人",
  "type": "start",
  "nodeId": "sid-startevent",
  "childNode": {
    "type": "route",
    "prevId": "sid-startevent",
    "nodeId": "bb46_e4c1",
    "conditionNodes": [
      {
        "name": "条件1",
        "type": "condition",
        "prevId": "bb46_e4c1",
        "nodeId": "8a45_a71d",
        "properties": {
          "conditions": [
            [
              {
                "type": "dingtalk_actioner_range_condition",
                "paramKey": "NumberField-K7EC2U7F",
                "paramLabel": "年龄",
                "lowerBound": "1",
                "upperBound": "",
                "isEmpty": false,
                "valid": "valid",
                "lowerBoundNotEqual": "",
                "upperBoundEqual": "",
                "boundEqual": "",
                "key": "ge"
              }
            ]
          ]
        }
      },
      {
        "name": "条件2",
        "type": "condition",
        "prevId": "bb46_e4c1",
        "nodeId": "5fdf_9f72",
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



//---------介于两者之间  大于等于20 小于40
var obj = {
  "name": "发起人",
  "type": "start",
  "nodeId": "sid-startevent",
  "childNode": {
    "type": "route",
    "prevId": "sid-startevent",
    "nodeId": "bb46_e4c1",
    "conditionNodes": [
      {
        "name": "条件1",
        "type": "condition",
        "prevId": "bb46_e4c1",
        "nodeId": "8a45_a71d",
        "properties": {
          "conditions": [
            [
              {
                "type": "dingtalk_actioner_range_condition",
                "paramKey": "NumberField-K7EC2U7F",
                "paramLabel": "年龄",
                "lowerBound": 20,
                "upperBound": 40,
                "isEmpty": false,
                "valid": "valid",
                "lowerBoundNotEqual": "",
                "upperBoundEqual": "",
                "boundEqual": "",
                "key": "between"
              }
            ]
          ]
        }
      },
      {
        "name": "条件2",
        "type": "condition",
        "prevId": "bb46_e4c1",
        "nodeId": "5fdf_9f72",
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




//----------------大于20 小于40
var obj = {
  "name": "发起人",
  "type": "start",
  "nodeId": "sid-startevent",
  "childNode": {
    "type": "route",
    "prevId": "sid-startevent",
    "nodeId": "bb46_e4c1",
    "conditionNodes": [
      {
        "name": "条件1",
        "type": "condition",
        "prevId": "bb46_e4c1",
        "nodeId": "8a45_a71d",
        "properties": {
          "conditions": [
            [
              {
                "type": "dingtalk_actioner_range_condition",
                "paramKey": "NumberField-K7EC2U7F",
                "paramLabel": "年龄",
                "lowerBound": "",
                "upperBound": 40,
                "isEmpty": false,
                "valid": "valid",
                "lowerBoundNotEqual": 20,
                "upperBoundEqual": "",
                "boundEqual": "",
                "key": "between"
              }
            ]
          ]
        }
      },
      {
        "name": "条件2",
        "type": "condition",
        "prevId": "bb46_e4c1",
        "nodeId": "5fdf_9f72",
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


//--- 大于20 小于等于40
var obj = {
  "name": "发起人",
  "type": "start",
  "nodeId": "sid-startevent",
  "childNode": {
    "type": "route",
    "prevId": "sid-startevent",
    "nodeId": "bb46_e4c1",
    "conditionNodes": [
      {
        "name": "条件1",
        "type": "condition",
        "prevId": "bb46_e4c1",
        "nodeId": "8a45_a71d",
        "properties": {
          "conditions": [
            [
              {
                "type": "dingtalk_actioner_range_condition",
                "paramKey": "NumberField-K7EC2U7F",
                "paramLabel": "年龄",
                "lowerBound": "",
                "upperBound": "",
                "isEmpty": false,
                "valid": "valid",
                "lowerBoundNotEqual": 20,
                "upperBoundEqual": 40,
                "boundEqual": "",
                "key": "between"
              }
            ]
          ]
        }
      },
      {
        "name": "条件2",
        "type": "condition",
        "prevId": "bb46_e4c1",
        "nodeId": "5fdf_9f72",
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




//-------------------------大于20 小于 40
var obj = {
  "name": "发起人",
  "type": "start",
  "nodeId": "sid-startevent",
  "childNode": {
    "type": "route",
    "prevId": "sid-startevent",
    "nodeId": "bb46_e4c1",
    "conditionNodes": [
      {
        "name": "条件1",
        "type": "condition",
        "prevId": "bb46_e4c1",
        "nodeId": "8a45_a71d",
        "properties": {
          "conditions": [
            [
              {
                "type": "dingtalk_actioner_range_condition",
                "paramKey": "NumberField-K7EC2U7F",
                "paramLabel": "年龄",
                "lowerBound": "",
                "upperBound": 40,
                "isEmpty": false,
                "valid": "valid",
                "lowerBoundNotEqual": 20,
                "upperBoundEqual": "",
                "boundEqual": "",
                "key": "between"
              }
            ]
          ]
        }
      },
      {
        "name": "条件2",
        "type": "condition",
        "prevId": "bb46_e4c1",
        "nodeId": "5fdf_9f72",
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






