var obj = {
  "form_id": "5e4cf8172380603048a87ee3",
  "nodeDetailed": {


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
          "type": " condition",
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
          "type": " condition",
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
}




// 1. 截图发给你
// 2. 办公用品 打车 火车 




// var a = {
//   "node-start": { name: "开始", nodeId: "node-start" },
//   "node01": { parent: "node02", nodeId: "node02" },
//   "node06": { parent: "node02", nodeId: "node02" }
// };



var a = {
  "node-start": { name: '开始' },
  "node02": { name: 'node02' },
  "node03": { name: 'node03' },
  "node04": { name: 'node04' },
  "node05": { name: 'node05' },
  "node06": { name: 'node06' },
  "node07": { name: 'node08' },
};

var obj = {
  // 父节点      子节点
  "node-start": ["node02"],
  // "node01": ["node02", "node03"],
  "node02": ["node05"],
  "node05": ["node06"],
  "node06": ["node-07", "node-08"]
};


function objToGraph(obj, parentNode) {
  console.log('函数执行');
  
}


objToGraph(obj, a["node-start"]);






// node - start-- -> node002-- -> node005-- > node06-- > [node07, node08]