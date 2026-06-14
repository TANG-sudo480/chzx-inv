// 长合区主导产业鱼骨图数据
// 数据来源：2026年6月长合区推介PPT（三大产业方向）
const chainFishboneData = [
  {
    id: "nev",
    name: "新能源汽车及关键零部件",
    icon: "🚗",
    color: "#10b981",
    desc: "浙江省五大新能源汽车产业培育基地之一 | 整车、电机、电控、电驱、智能驾驶全产业链覆盖",
    upstream: {
      title: "上游：原材料与核心零部件",
      companies: [
        { name: "宁德时代", detail: "动力电池全球第一，电池系统提供商", region: "福建宁德", local: false },
        { name: "比亚迪弗迪电池", detail: "刀片电池技术领先，动力电池制造", region: "广东深圳", local: false },
        { name: "赣锋锂业", detail: "锂资源开采及深加工，电池级碳酸锂", region: "江西新余", local: false },
        { name: "华友钴业", detail: "钴镍新材料全球领先，正极材料前驱体", region: "浙江桐乡", local: false },
        { name: "天齐锂业", detail: "全球锂资源巨头，锂化合物生产", region: "四川成都", local: false },
        { name: "恩捷股份", detail: "锂电池隔膜全球第一，市占率30%+", region: "上海", local: false },
        { name: "富特科技", detail: "新能源汽车高压电源系统OBC龙头", region: "长合区", local: true },
        { name: "孔辉汽车", detail: "空气悬架系统国产替代领先", region: "长合区", local: true },
        { name: "福瑞泰克", detail: "智能驾驶解决方案，本土Tier1", region: "长合区", local: true },
        { name: "旭升集团", detail: "新能源汽车铝合金零部件全球供应商", region: "长合区", local: true }
      ]
    },
    midstream: {
      title: "中游：整车制造与系统集成",
      companies: [
        { name: "吉利汽车", detail: "园区龙头·新能源转型加速，帝豪EV/极氪系列", region: "园区/杭州", local: true },
        { name: "零跑汽车", detail: "园区标杆·造车新势力，C系列纯电车型", region: "长合区", local: true },
        { name: "特斯拉Tesla", detail: "全球电动车龙头，上海工厂产能100万辆+", region: "上海临港", local: false },
        { name: "比亚迪汽车", detail: "全球新能源汽车销冠，垂直整合能力最强", region: "广东深圳", local: false },
        { name: "蔚来汽车", detail: "高端纯电品牌，BAAS换电模式", region: "安徽合肥", local: false },
        { name: "理想汽车", detail: "增程式电动领先，L系列热销", region: "北京", local: false },
        { name: "小鹏汽车", detail: "智能驾驶领先，城市NOA先行者", region: "广东广州", local: false },
        { name: "长安汽车", detail: "自主品牌龙头，阿维塔/深蓝系列", region: "重庆", local: false },
        { name: "拓普集团", detail: "新能源汽车零部件龙头，轻量化底盘专家", region: "长合区", local: true },
        { name: "银轮股份", detail: "热管理系统龙头，新能源热管理全覆盖", region: "长合区", local: true },
        { name: "三花智控", detail: "热管理阀门全球第一", region: "浙江绍兴", local: false }
      ]
    },
    downstream: {
      title: "下游：充电配套与后市场",
      companies: [
        { name: "国家电网", detail: "充电桩运营国家队，覆盖全国", region: "全国", local: false },
        { name: "华为数字能源", detail: "智能电动解决方案，DriveONE平台", region: "全国", local: false },
        { name: "麦格纳", detail: "汽车零部件巨头，整车代工能力", region: "全国", local: false },
        { name: "星星充电", detail: "民营充电桩运营龙头", region: "江苏常州", local: false },
        { name: "特来电", detail: "充电网运营，上市公司", region: "山东青岛", local: false },
        { name: "30+整车企业", detail: "周边200km整车制造基地", region: "长三角", local: false },
        { name: "200+零部件企业", detail: "周边200km关键零部件配套", region: "长三角", local: false }
      ]
    },
    // 新增：周边重点企业清单（来源：2026年6月投促局长合区推介PPT）
    nearbyCompanies: {
      title: "周边重点企业清单（来源：投促局PPT）",
      subtitle: "覆盖浙江·安徽·上海·江苏 · 100+家重点产业链企业",
      groups: [
        {
          label: "🚗 浙江区域（长合区周边）",
          items: [
            { name: "杭州长江汽车有限公司", detail: "整车制造" },
            { name: "浙江龙生汽车部件科技有限公司", detail: "汽车内饰/座椅" },
            { name: "浙江纳特汽车标准件有限公司", detail: "标准件/紧固件" },
            { name: "中汽商用汽车有限公司（杭州）", detail: "商用车" },
            { name: "绍兴安途汽车转向悬架有限公司", detail: "转向系统" },
            { name: "杭州西湖比亚迪新能源汽车有限公司", detail: "新能源整车" },
            { name: "湖州宏威新能源汽车有限公司", detail: "新能源整车" },
            { name: "浙江吉智新能源汽车科技有限公司", detail: "新能源汽车" },
            { name: "浙江万品实业投资有限公司", detail: "汽车零部件" },
            { name: "浙江卡尔森汽车有限公司", detail: "专用车/房车" }
          ]
        },
        {
          label: "🔋 电池产业链（浙江·安徽）",
          items: [
            { name: "天能控股集团有限公司", detail: "铅酸/锂电池" },
            { name: "超威集团", detail: "动力电池" },
            { name: "捷威动力工业嘉兴有限公司", detail: "软包电池" },
            { name: "微宏动力系统（湖州）有限公司", detail: "快充电池" },
            { name: "浙江帅福德动力科技有限公司", detail: "电池系统" },
            { name: "芜湖天弋能源科技有限公司", detail: "储能电芯" },
            { name: "芜湖比亚迪锂电池有限公司", detail: "动力电池" },
            { name: "安徽泰能新能源科技有限公司", detail: "锂电池" },
            { name: "安徽益佳通电池有限公司", detail: "储能/动力电池" },
            { name: "滁州力神能源科技有限公司", detail: "储能电芯" },
            { name: "滁州捷威动力工业有限公司", detail: "动力电池" },
            { name: "马鞍山蜂巢能源科技有限公司", detail: "动力电池" }
          ]
        },
        {
          label: "🔧 安徽·上海·江苏重点企业",
          items: [
            { name: "安徽中鼎精工技术有限公司", detail: "精密零部件" },
            { name: "安徽联合飞彩车辆有限公司", detail: "专用车" },
            { name: "宣城立讯精密工业有限公司", detail: "精密制造" },
            { name: "安徽汉扬精密机械有限公司", detail: "精密机械" },
            { name: "广德竹昌电子科技有限公司", detail: "电子制造" },
            { name: "安徽莱恩电泵有限公司", detail: "电泵/热管理" },
            { name: "安徽库伯密封技术有限公司", detail: "密封件" },
            { name: "前途汽车（苏州）有限公司", detail: "新能源整车" },
            { name: "北汽蓝谷麦格纳汽车有限公司", detail: "新能源整车" },
            { name: "南京奥特佳新能源科技有限公司", detail: "汽车热管理" },
            { name: "昆山帕捷汽车零部件有限公司", detail: "底盘零部件" },
            { name: "苏州科沃孚汽车零部件有限公司", detail: "汽车零部件" },
            { name: "上海捷氢科技股份有限公司", detail: "氢燃料电池" },
            { name: "上海大郡动力控制技术有限公司", detail: "电机控制" },
            { name: "盖瑞特动力科技（上海）有限公司", detail: "涡轮增压器" },
            { name: "华域智能装备科技有限公司", detail: "智能装备" },
            { name: "上海日晗精密机械股份有限公司", detail: "精密机械" },
            { name: "首帆动力科技股份有限公司", detail: "新能源动力" }
          ]
        }
      ]
    }
  },
  {
    id: "robot",
    name: "机器人·数控机床·AI智造",
    icon: "🤖",
    color: "#8b5cf6",
    desc: "长三角数控智谷 | 人工智能新兴区 | 机器人产业链核心企业30+",
    upstream: {
      title: "上游：核心零部件",
      companies: [
        { name: "绿的谐波", detail: "国产谐波减速器龙头，机器人关节核心", region: "江苏苏州", local: false },
        { name: "来福谐波", detail: "精密减速器研发制造", region: "浙江绍兴", local: false },
        { name: "国茂股份", detail: "减速机龙头，RV减速器布局", region: "江苏常州", local: false },
        { name: "汇川技术", detail: "伺服系统国产替代第一，控制器", region: "广东深圳", local: false },
        { name: "雷赛智能", detail: "运动控制领先，步进/伺服系统", region: "广东深圳", local: false },
        { name: "禾赛科技", detail: "激光雷达传感器全球前列，机器人感知", region: "上海", local: false },
        { name: "速腾聚创", detail: "激光雷达国产替代，固态/机械式", region: "广东深圳", local: false },
        { name: "人本轴承", detail: "国内规模最大轴承制造企业，机器人关节轴承", region: "长合区", local: true },
        { name: "天银机电", detail: "家电/机器人传感器", region: "长合区", local: true }
      ]
    },
    midstream: {
      title: "中游：机器人本体与数控装备",
      companies: [
        { name: "创世纪", detail: "民营数控机床龙头企业，钻攻/加工中心", region: "长合区", local: true },
        { name: "德马科技", detail: "智能物流机器人龙头，AMR/输送系统", region: "湖州", local: true },
        { name: "诺力股份", detail: "仓储物流机器人，叉车AGV领先", region: "湖州", local: true },
        { name: "牧星机器人", detail: "仓储机器人，智能仓储解决方案", region: "湖州", local: true },
        { name: "利羿精密", detail: "精密制造，机器人零部件加工", region: "长合区", local: true },
        { name: "桢正机器人", detail: "机器人关节驱动，伺服电机集成", region: "长合区", local: true },
        { name: "宇树科技", detail: "四足/人形机器人全球领先，消费/工业机器人", region: "浙江杭州", local: false },
        { name: "智元机器人", detail: "人形机器人新锐，具身智能", region: "上海", local: false },
        { name: "埃斯顿", detail: "国产机器人龙头，焊接/搬运机器人", region: "江苏南京", local: false },
        { name: "埃夫特", detail: "国产机器人第一梯队，整机+系统集成", region: "安徽芜湖", local: false },
        { name: "新松机器人", detail: "机器人国家队，AGV/特种机器人", region: "辽宁沈阳", local: false },
        { name: "海天精工", detail: "数控机床龙头，卧加/龙门", region: "浙江宁波", local: false },
        { name: "国盛智科", detail: "数控机床精密加工中心", region: "浙江宁波", local: false }
      ]
    },
    downstream: {
      title: "下游：应用场景与系统集成",
      companies: [
        { name: "海康威视", detail: "机器视觉应用，工业相机/检测系统", region: "浙江杭州", local: false },
        { name: "科大讯飞", detail: "AI语音交互，机器人智能交互", region: "安徽合肥", local: false },
        { name: "华为昇腾", detail: "AI算力，机器人AI训练推理", region: "全国", local: false },
        { name: "美的集团", detail: "智能制造应用，工业机器人集成", region: "广东佛山", local: false },
        { name: "富士康", detail: "3C电子制造自动化，全球最大代工厂", region: "全国", local: false },
        { name: "4700+机器人企业", detail: "长三角机器人产能占全国50%+", region: "长三角", local: false }
      ]
    }
  },
  {
    id: "energy",
    name: "绿色能源·储能",
    icon: "🔋",
    color: "#f97316",
    desc: "储能产业新赛道 | 光伏+储能+氢能三位一体 | 绿色低碳示范",
    upstream: {
      title: "上游：原材料与设备",
      companies: [
        { name: "隆基绿能", detail: "光伏硅片/组件全球第一", region: "陕西西安", local: false },
        { name: "通威股份", detail: "硅料/电池片双龙头", region: "四川成都", local: false },
        { name: "阳光电源", detail: "光伏逆变器全球第一，储能PCS", region: "安徽合肥", local: false },
        { name: "华为数字能源", detail: "组串式逆变器，储能系统集成", region: "全国", local: false },
        { name: "亿纬锂能", detail: "锂电池全栈技术，储能电芯", region: "广东惠州", local: false },
        { name: "派能科技", detail: "户用储能全球前三", region: "上海", local: false },
        { name: "南都电源", detail: "铅酸/锂电储能老牌企业", region: "浙江杭州", local: false }
      ]
    },
    midstream: {
      title: "中游：储能系统集成",
      companies: [
        { name: "宁德时代", detail: "储能电芯+系统集成全球第一", region: "福建宁德", local: false },
        { name: "比亚迪储能", detail: "储能系统垂直整合，磷酸铁锂路线", region: "广东深圳", local: false },
        { name: "海博思创", detail: "储能系统集成龙头", region: "北京", local: false },
        { name: "中创新航", detail: "储能电芯，电力/工商业储能", region: "江苏常州", local: false },
        { name: "天合光能", detail: "光伏+储能系统集成", region: "江苏常州", local: false },
        { name: "阿特斯", detail: "光伏组件+储能系统", region: "江苏苏州", local: false },
        { name: "晶科能源", detail: "光伏组件+储能解决方案", region: "浙江海宁", local: false },
        { name: "远景能源", detail: "储能+风机+智能物联", region: "北京", local: false }
      ]
    },
    downstream: {
      title: "下游：应用与运营",
      companies: [
        { name: "国家电网储能", detail: "电网侧储能投资运营", region: "全国", local: false },
        { name: "中国南方电网", detail: "电网侧储能，削峰填谷", region: "广东广州", local: false },
        { name: "五大发电集团", detail: "华能/华电/大唐/国电/国家电投", region: "全国", local: false },
        { name: "电网侧储能", detail: "独立储能电站调峰调频", region: "全国", local: false },
        { name: "工商业储能", detail: "园区/工厂峰谷套利", region: "长三角", local: false },
        { name: "户用储能", detail: "欧洲/澳洲户用光储系统", region: "海外市场", local: false }
      ]
    }
  },
  {
    id: "surface",
    name: "表面处理·产业链配套",
    icon: "⚙️",
    color: "#64748b",
    desc: "阳极氧化·电镀·钣金·铸件 | 园区国企自建表面处理产业园",
    upstream: {
      title: "上游：原材料",
      companies: [
        { name: "金属原材料", detail: "铝材、钢材、铜材供应", region: "全国", local: false },
        { name: "化工材料", detail: "电镀液、钝化剂、表面处理剂", region: "全国", local: false }
      ]
    },
    midstream: {
      title: "中游：表面处理加工",
      companies: [
        { name: "阳极氧化产业园", detail: "园区国企自建·年处理能力500万㎡", region: "长合区", local: true },
        { name: "电镀配套产业园", detail: "园区国企自建·全品类电镀生产线", region: "长合区", local: true },
        { name: "牛博新能源", detail: "钣金加工·精密件·新能源汽车配套", region: "长合区", local: true },
        { name: "正轩精密", detail: "钣金铸件·精密铸造·机加工", region: "长合区", local: true }
      ]
    },
    downstream: {
      title: "下游：配套园区企业",
      companies: [
        { name: "创世纪", detail: "数控机床龙头·精密钣金/铸件需求大", region: "长合区", local: true },
        { name: "人本轴承", detail: "轴承制造·表面处理需求大", region: "长合区", local: true },
        { name: "利羿精密", detail: "精密制造·表面处理需求大", region: "长合区", local: true },
        { name: "拓普集团", detail: "汽车零部件·轻量化钣金需求大", region: "长合区", local: true },
        { name: "旭升集团", detail: "铝合金零部件·阳极氧化需求大", region: "长合区", local: true }
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
        detail: "钢材/铝材开料、冲压、锻造、铸造",
        companies: "宝钢、铝业巨头"
      },
      {
        step: "02",
        name: "零部件制造",
        detail: "电机定子/转子、电池模组、电控PCB、减速器",
        companies: "比亚迪弗迪电池、富特科技"
      },
      {
        step: "03",
        name: "车身焊接",
        detail: "白车身焊接、涂装前处理、一体化压铸",
        companies: "拓普集团、旭升集团"
      },
      {
        step: "04",
        name: "表面处理",
        detail: "电泳、喷涂、烤漆（园区配套阳极氧化）",
        companies: "园区阳极氧化产业园"
      },
      {
        step: "05",
        name: "动力系统集成",
        detail: "电机装配、电控系统集成、电池包pack、热管理",
        companies: "吉利、零跑、银轮股份"
      },
      {
        step: "06",
        name: "总装",
        detail: "整车装配、内饰、线束、检测",
        companies: "吉利、零跑、特斯拉"
      },
      {
        step: "07",
        name: "整车测试",
        detail: "路试、淋雨、NVH测试、智能驾驶标定",
        companies: "福瑞泰克、国家电网"
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
        detail: "谐波减速器、伺服电机、传感器、轴承加工",
        companies: "绿的谐波、人本轴承"
      },
      {
        step: "02",
        name: "关键部件制造",
        detail: "减速器装配、伺服驱动、控制器PCB",
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
        detail: "ROS系统、SLAM算法、运动控制、视觉识别",
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
        detail: "床身铸造、底座铸造、消除内应力",
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
        detail: "淬火、回火、表面渗碳、氮化",
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
  },
  {
    id: "storage-process",
    name: "储能系统制造工艺",
    icon: "🔋",
    color: "#f97316",
    steps: [
      {
        step: "01",
        name: "电芯制造",
        detail: "正极涂布、负极涂布、卷绕/叠片、电解液注入",
        companies: "宁德时代、亿纬锂能"
      },
      {
        step: "02",
        name: "模组/PACK",
        detail: "电芯分选、模组焊接、模组测试、Pack装配",
        companies: "宁德时代、比亚迪储能"
      },
      {
        step: "03",
        name: "BMS研发",
        detail: "电池管理系统硬件/软件、荷电状态估算",
        companies: "华为数字能源、阳光电源"
      },
      {
        step: "04",
        name: "PCS制造",
        detail: "功率转换系统、储能逆变器、变压器",
        companies: "阳光电源、华为"
      },
      {
        step: "05",
        name: "系统集成",
        detail: "集装箱集成、消防系统、温控系统",
        companies: "海博思创、中创新航"
      },
      {
        step: "06",
        name: "EMS调度",
        detail: "能量管理系统、并网调试、功率调度",
        companies: "远景能源、国家电网"
      },
      {
        step: "07",
        name: "运维检测",
        detail: "电池健康诊断、运维平台、回收梯次利用",
        companies: "南都电源"
      }
    ]
  }
];
