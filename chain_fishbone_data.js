// 长合区主导产业鱼骨图数据
// 数据来源：2026年2月长合区推介稿
const chainFishboneData = [
  {
    id: "nev",
    name: "新能源汽车及关键零部件",
    icon: "🚗",
    color: "#10b981",
    desc: "浙江省五大新能源汽车产业培育基地之一 | 整车、电机、电控、电驱、智能驾驶全产业链覆盖",
    // 上游：原材料与零部件
    upstream: {
      title: "上游：原材料与零部件",
      companies: [
        { name: "宁德时代", detail: "动力电池全球第一", region: "福建宁德", local: false },
        { name: "比亚迪弗迪电池", detail: "刀片电池技术领先", region: "广东深圳", local: false },
        { name: "赣锋锂业", detail: "锂资源及深加工", region: "江西新余", local: false },
        { name: "华友钴业", detail: "钴镍新材料", region: "浙江桐乡", local: false },
        { name: "富特科技", detail: "新能源汽车高压电源系统", region: "长合区", local: true },
        { name: "孔辉汽车", detail: "空气悬架系统国产替代", region: "长合区", local: true },
        { name: "福瑞泰克", detail: "智能驾驶解决方案", region: "长合区", local: true },
        { name: "旭升集团", detail: "新能源汽车铝合金零部件", region: "长合区", local: true }
      ]
    },
    // 中游：整车与系统
    midstream: {
      title: "中游：整车制造与系统集成",
      companies: [
        { name: "吉利汽车", detail: "园区龙头·新能源转型加速", region: "园区/杭州", local: true },
        { name: "零跑汽车", detail: "园区标杆·造车新势力", region: "园区", local: true },
        { name: "特斯拉Tesla", detail: "周边整车·200km范围", region: "上海临港", local: false },
        { name: "比亚迪汽车", detail: "周边整车·200km范围", region: "广东深圳", local: false },
        { name: "蔚来汽车", detail: "周边整车·200km范围", region: "安徽合肥", local: false },
        { name: "理想汽车", detail: "周边整车·200km范围", region: "北京", local: false },
        { name: "拓普集团", detail: "新能源汽车零部件龙头", region: "长合区", local: true }
      ]
    },
    // 下游：配套与服务
    downstream: {
      title: "下游：配套服务与后市场",
      companies: [
        { name: "国家电网", detail: "充电桩运营", region: "全国", local: false },
        { name: "华为数字能源", detail: "智能电动解决方案", region: "全国", local: false },
        { name: "麦格纳", detail: "汽车零部件巨头", region: "全国", local: false },
        { name: "200+零部件企业", detail: "周边200km关键零部件", region: "长三角", local: false },
        { name: "30+整车企业", detail: "周边200km整车制造", region: "长三角", local: false }
      ]
    }
  },
  {
    id: "robot",
    name: "机器人·数控机床·AI智造",
    icon: "🤖",
    color: "#8b5cf6",
    desc: "长三角数控智谷 | 人工智能新兴区 | 机器人产业链核心企业30+",
    // 上游：核心零部件
    upstream: {
      title: "上游：核心零部件",
      companies: [
        { name: "绿的谐波", detail: "国产谐波减速器龙头", region: "江苏苏州", local: false },
        { name: "来福谐波", detail: "精密减速器", region: "浙江绍兴", local: false },
        { name: "汇川技术", detail: "伺服系统国产替代", region: "广东深圳", local: false },
        { name: "禾赛科技", detail: "激光雷达传感器", region: "上海", local: false },
        { name: "人本轴承", detail: "国内规模最大轴承制造企业", region: "长合区", local: true }
      ]
    },
    // 中游：本体与装备
    midstream: {
      title: "中游：机器人本体与数控装备",
      companies: [
        { name: "创世纪", detail: "民营数控机床龙头企业", region: "长合区", local: true },
        { name: "德马科技", detail: "智能物流机器人·园区企业", region: "湖州", local: true },
        { name: "诺力股份", detail: "仓储物流机器人·园区企业", region: "湖州", local: true },
        { name: "牧星机器人", detail: "仓储机器人·园区企业", region: "湖州", local: true },
        { name: "利羿精密", detail: "精密制造·园区企业", region: "长合区", local: true },
        { name: "桢正机器人", detail: "机器人关节驱动·园区企业", region: "长合区", local: true },
        { name: "宇树科技", detail: "四足/人形机器人全球领先", region: "浙江杭州", local: false },
        { name: "智元机器人", detail: "人形机器人新锐", region: "上海", local: false }
      ]
    },
    // 下游：应用场景
    downstream: {
      title: "下游：应用场景与系统集成",
      companies: [
        { name: "海康威视", detail: "机器视觉应用", region: "浙江杭州", local: false },
        { name: "科大讯飞", detail: "AI语音交互", region: "安徽合肥", local: false },
        { name: "美的集团", detail: "智能制造应用", region: "广东佛山", local: false },
        { name: "4700+机器人企业", detail: "长三角机器人产能占全国50%+", region: "长三角", local: false }
      ]
    }
  },
  {
    id: "surface",
    name: "表面处理·产业链配套",
    icon: "⚙️",
    color: "#f59e0b",
    desc: "阳极氧化·电镀·钣金·铸件 | 园区国企自建表面处理产业园",
    upstream: {
      title: "上游：原材料",
      companies: [
        { name: "金属原材料", detail: "铝材、钢材、铜材", region: "全国", local: false },
        { name: "化工材料", detail: "电镀液、钝化剂", region: "全国", local: false }
      ]
    },
    midstream: {
      title: "中游：表面处理加工",
      companies: [
        { name: "阳极氧化产业园", detail: "园区国企自建·年处理能力500万㎡", region: "长合区", local: true },
        { name: "电镀配套产业园", detail: "园区国企自建·全品类电镀", region: "长合区", local: true },
        { name: "牛博新能源", detail: "钣金加工·精密件", region: "长合区", local: true },
        { name: "正轩精密", detail: "钣金铸件·精密铸造", region: "长合区", local: true }
      ]
    },
    downstream: {
      title: "下游：配套园区企业",
      companies: [
        { name: "创世纪", detail: "数控机床龙头·精密钣金需求大", region: "长合区", local: true },
        { name: "人本轴承", detail: "轴承制造·表面处理需求大", region: "长合区", local: true },
        { name: "利羿精密", detail: "精密制造·表面处理需求大", region: "长合区", local: true },
        { name: "拓普集团", detail: "汽车零部件·表面处理需求大", region: "长合区", local: true }
      ]
    }
  }
];

// 工艺流程图解数据
const processFlowData = [
  {
    id: "nev-process",
    name: "新能源汽车制造工艺",
    icon: "🚗",
    color: "#10b981",
    steps: [
      {
        step: "01",
        name: "原材料加工",
        detail: "钢材/铝材开料、冲压、锻造",
        companies: "宝钢、铝业巨头"
      },
      {
        step: "02",
        name: "零部件制造",
        detail: "电机定子、转子、电池模组、电控PCB",
        companies: "比亚迪弗迪电池、富特科技"
      },
      {
        step: "03",
        name: "车身焊接",
        detail: "白车身焊接、涂装前处理",
        companies: "拓普集团、旭升集团"
      },
      {
        step: "04",
        name: "涂装",
        detail: "电泳、喷涂、烤漆（园区配套阳极氧化）",
        companies: "园区阳极氧化产业园"
      },
      {
        step: "05",
        name: "动力系统集成",
        detail: "电机装配、电控系统集成、电池包pack",
        companies: "吉利、零跑、福瑞泰克"
      },
      {
        step: "06",
        name: "总装",
        detail: "整车装配、内饰、检测",
        companies: "吉利、零跑、特斯拉"
      },
      {
        step: "07",
        name: "整车测试",
        detail: "路试、淋雨、NVH测试、智能驾驶标定",
        companies: "国家电网充电配套"
      }
    ]
  },
  {
    id: "robot-process",
    name: "机器人制造工艺",
    icon: "🤖",
    color: "#8b5cf6",
    steps: [
      {
        step: "01",
        name: "精密零部件加工",
        detail: "谐波减速器、伺服电机、传感器",
        companies: "绿的谐波、人本轴承"
      },
      {
        step: "02",
        name: "关键部件制造",
        detail: "减速器装配、伺服驱动、控制器",
        companies: "汇川技术、桢正机器人"
      },
      {
        step: "03",
        name: "本体组装",
        detail: "关节装配、壳体组装、线束布置",
        companies: "创世纪、利羿精密"
      },
      {
        step: "04",
        name: "表面处理",
        detail: "阳极氧化、喷涂、激光雕刻",
        companies: "园区阳极氧化产业园"
      },
      {
        step: "05",
        name: "软件集成",
        detail: "ROS系统、SLAM算法、运动控制",
        companies: "宇树科技、智元机器人"
      },
      {
        step: "06",
        name: "标定测试",
        detail: "运动精度标定、负载测试、耐久性测试",
        companies: "德马科技、诺力股份"
      },
      {
        step: "07",
        name: "应用部署",
        detail: "场景适配、系统集成、售后服务",
        companies: "海康威视、科大讯飞"
      }
    ]
  },
  {
    id: "cnc-process",
    name: "数控机床制造工艺",
    icon: "🔧",
    color: "#3b82f6",
    steps: [
      {
        step: "01",
        name: "铸件制造",
        detail: "床身铸造、底座铸造消除内应力",
        companies: "正轩精密"
      },
      {
        step: "02",
        name: "粗加工",
        detail: "刨床粗加工、铣削定位面",
        companies: "牛博新能源"
      },
      {
        step: "03",
        name: "精密加工",
        detail: "CNC加工中心精铣、镗孔、攻丝",
        companies: "创世纪"
      },
      {
        step: "04",
        name: "热处理",
        detail: "淬火、回火、表面渗碳",
        companies: "专业热处理厂"
      },
      {
        step: "05",
        name: "磨削加工",
        detail: "导轨磨、丝杠磨、精密磨削",
        companies: "人本轴承"
      },
      {
        step: "06",
        name: "装配调试",
        detail: "丝杠装配、导轨安装、精度调试",
        companies: "创世纪"
      },
      {
        step: "07",
        name: "质量检测",
        detail: "三坐标测量、激光干涉仪检测",
        companies: "专业检测机构"
      }
    ]
  }
];
