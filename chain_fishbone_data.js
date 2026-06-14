// 长合区主导产业鱼骨图数据
const chainFishboneData = [
  {
    id: "nev",
    name: "新能源汽车",
    icon: "🚗",
    color: "#10b981",
    desc: "新能源汽车产业链全景图",
    upstream: {
      title: "上游：核心零部件",
      companies: [
        { name: "宁德时代", detail: "动力电池全球第一", region: "福建宁德" },
        { name: "比亚迪弗迪电池", detail: "刀片电池技术领先", region: "广东深圳" },
        { name: "赣锋锂业", detail: "锂资源及深加工", region: "江西新余" },
        { name: "华友钴业", detail: "钴镍新材料", region: "浙江桐乡" },
        { name: "当升科技", detail: "正极材料龙头", region: "北京" }
      ]
    },
    midstream: {
      title: "中游：系统集成",
      companies: [
        { name: "比亚迪汽车", detail: "新能源汽车销量全球前三", region: "广东深圳" },
        { name: "特斯拉Tesla", detail: "纯电头部企业", region: "上海临港" },
        { name: "吉利汽车", detail: "新能源转型加速", region: "浙江杭州" },
        { name: "蔚来汽车", detail: "高端智能电动", region: "安徽合肥" },
        { name: "理想汽车", detail: "增程式标杆", region: "北京" }
      ]
    },
    downstream: {
      title: "下游：配套服务",
      companies: [
        { name: "国家电网", detail: "充电桩运营", region: "北京" },
        { name: "特来电", detail: "充电网生态", region: "山东青岛" },
        { name: "星星充电", detail: "数字能源平台", region: "江苏常州" },
        { name: "华为数字能源", detail: "智能电动解决方案", region: "广东深圳" },
        { name: "麦格纳", detail: "汽车零部件巨头", region: "上海" }
      ]
    }
  },
  {
    id: "robot",
    name: "仿生机器人",
    icon: "🤖",
    color: "#8b5cf6",
    desc: "仿生机器人产业链全景图",
    upstream: {
      title: "上游：核心零部件",
      companies: [
        { name: "绿的谐波", detail: "国产谐波减速器龙头", region: "江苏苏州" },
        { name: "来福谐波", detail: "精密减速器", region: "浙江绍兴" },
        { name: "汇川技术", detail: "伺服系统国产替代", region: "广东深圳" },
        { name: "埃斯顿", detail: "工业自动化", region: "江苏南京" },
        { name: "禾赛科技", detail: "激光雷达传感器", region: "上海" }
      ]
    },
    midstream: {
      title: "中游：机器人本体",
      companies: [
        { name: "宇树科技", detail: "四足机器人全球领先", region: "浙江杭州" },
        { name: "傅利叶智能", detail: "康复机器人", region: "上海" },
        { name: "优必选", detail: "人形机器人", region: "广东深圳" },
        { name: "智元机器人", detail: "人形机器人新锐", region: "上海" },
        { name: "逐际动力", detail: "人形机器人", region: "广东深圳" }
      ]
    },
    downstream: {
      title: "下游：应用场景",
      companies: [
        { name: "海康威视", detail: "机器视觉应用", region: "浙江杭州" },
        { name: "大华股份", detail: "智能物联", region: "浙江杭州" },
        { name: "科大讯飞", detail: "AI语音交互", region: "安徽合肥" },
        { name: "美的集团", detail: "智能制造应用", region: "广东佛山" },
        { name: "比亚迪电子", detail: "电子制造服务", region: "广东深圳" }
      ]
    }
  },
  {
    id: "storage",
    name: "储能",
    icon: "🔋",
    color: "#f59e0b",
    desc: "储能产业链全景图",
    upstream: {
      title: "上游：原材料及设备",
      companies: [
        { name: "盐湖股份", detail: "盐湖提锂资源", region: "青海格尔木" },
        { name: "西藏矿业", detail: "锂矿资源", region: "西藏拉萨" },
        { name: "天齐锂业", detail: "锂业巨头", region: "四川成都" },
        { name: "永兴材料", detail: "云母提锂", region: "浙江湖州" },
        { name: "壹石通", detail: "电池涂覆材料", region: "安徽蚌埠" }
      ]
    },
    midstream: {
      title: "中游：电池系统",
      companies: [
        { name: "宁德时代", detail: "储能电池全球第一", region: "福建宁德" },
        { name: "比亚迪储能", detail: "刀片电池储能", region: "广东深圳" },
        { name: "亿纬锂能", detail: "锂原+储能双赛道", region: "广东惠州" },
        { name: "阳光电源", detail: "储能变流器龙头", region: "安徽合肥" },
        { name: "海博思创", detail: "储能系统集成", region: "北京" }
      ]
    },
    downstream: {
      title: "下游：应用场景",
      companies: [
        { name: "国家能源集团", detail: "电网侧储能", region: "北京" },
        { name: "中国华能", detail: "电源侧储能", region: "北京" },
        { name: "国轩高科", detail: "用户侧储能", region: "安徽合肥" },
        { name: "南都电源", detail: "铅炭+锂电储能", region: "浙江杭州" },
        { name: "派能科技", detail: "户用储能", region: "上海" }
      ]
    }
  },
  {
    id: "semi",
    name: "半导体",
    icon: "💾",
    color: "#ef4444",
    desc: "半导体产业链全景图",
    upstream: {
      title: "上游：材料与设计",
      companies: [
        { name: "沪硅产业", detail: "大硅片国产替代", region: "上海" },
        { name: "中环股份", detail: "硅片龙头", region: "天津" },
        { name: "华虹半导体", detail: "晶圆代工", region: "上海" },
        { name: "韦尔股份", detail: "CIS芯片设计", region: "上海" },
        { name: "卓胜微", detail: "射频前端芯片", region: "江苏无锡" }
      ]
    },
    midstream: {
      title: "中游：制造与封测",
      companies: [
        { name: "中芯国际", detail: "晶圆代工龙头", region: "上海" },
        { name: "长电科技", detail: "封测龙头", region: "江苏江阴" },
        { name: "通富微电", detail: "先进封装", region: "江苏南通" },
        { name: "华天科技", detail: "封测企业", region: "陕西西安" },
        { name: "士兰微", detail: "IDM功率半导体", region: "浙江杭州" }
      ]
    },
    downstream: {
      title: "下游：应用场景",
      companies: [
        { name: "华为海思", detail: "芯片设计应用", region: "广东深圳" },
        { name: "中芯国际客户群", detail: "消费电子", region: "全国" },
        { name: "长江存储", detail: "存储芯片", region: "湖北武汉" },
        { name: "三安光电", detail: "第三代半导体", region: "福建厦门" },
        { name: "时代电气", detail: "功率半导体", region: "湖南株洲" }
      ]
    }
  }
];
