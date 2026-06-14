// 长合区主导产业鱼骨图数据
// 数据来源：2026年6月长合区推介PPT（三大产业方向）+ 产业链深度调研
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
    nearbyCompanies: {
      title: "周边重点企业清单",
      subtitle: "覆盖浙江·安徽·上海·江苏 · 细分零部件产业链全景",
      groups: [
        {
          label: "🧲 永磁体·稀土材料",
          items: [
            { name: "金力永磁", detail: "全球高性能钕铁硼龙头·特斯拉/比亚迪/金风科技核心供应商" },
            { name: "中科三环", detail: "国内钕铁硼开山企业·配套宝马/博世/西门子" },
            { name: "正海磁材", detail: "比亚迪核心磁材供应商·新能源车驱动磁材市占领先" },
            { name: "宁波韵升", detail: "产能规模行业前三·消费电子+工业电机+新能源车全覆盖" },
            { name: "英洛华", detail: "稀土永磁材料与电机双主业·工业电机配套" },
            { name: "银河磁体", detail: "全球粘结钕铁硼龙头·TWS耳机/手机马达专用" },
            { name: "大地熊", detail: "特斯拉二级供应链·高性能钕铁硼" },
            { name: "天和磁材", detail: "磁材精加工+磁组件一体化·直接供货电机厂" },
            { name: "北矿科技", detail: "稀土永磁和铁氧体永磁·矿山装备配套" },
            { name: "安泰科技", detail: "先进金属材料及制品·钕铁硼及软磁产品" },
            { name: "龙磁科技", detail: "永磁铁氧体磁瓦·变频空调/汽车电机配套" },
            { name: "横店东磁", detail: "磁性材料龙头·光伏+锂电+磁性材料三主业" },
            { name: "华阳磁电", detail: "磁性材料·电子变压器配套" },
            { name: "中钢天源", detail: "磁性材料·四氧化三锰行业领先" },
            { name: "领益智造", detail: "精密功能件·永磁材料+结构件双布局" }
          ]
        },
        {
          label: "💡 电机控制器·IGBT功率半导体",
          items: [
            { name: "斯达半导", detail: "IGBT模块国产龙头·全球第五·车规级IGBT模块配套超300万套" },
            { name: "时代电气", detail: "高压IGBT绝对龙头·轨交IGBT国内市占率65%·中车集团背景" },
            { name: "比亚迪半导体", detail: "车规级IGBT自研先锋·垂直整合最强·800V平台SiC批量应用" },
            { name: "士兰微", detail: "IDM综合龙头·全球功率半导体前十·IGBT芯片产能12万片/月" },
            { name: "华润微", detail: "功率IDM领军者·MOSFET国内市占第一·IGBT模块协同发展" },
            { name: "扬杰科技", detail: "全产业链IDM标杆·全球功率半导体八强·国产替代核心" },
            { name: "新洁能", detail: "MOSFET+IGBT双轮驱动·光伏逆变器+新能源汽车核心" },
            { name: "宏微科技", detail: "IGBT模块·工控+新能源双赛道·AI服务器电源SiC已认证" },
            { name: "东微半导", detail: "TGBT专利技术·高压大功率领域·光伏/储能/新能源汽车" },
            { name: "华微电子", detail: "老牌功率半导体·IPM/PM模块/IGBT/MOSFET全线覆盖" },
            { name: "芯联集成", detail: "功率半导体代工·8/12英寸晶圆产线·蔚来汽车核心供应商" },
            { name: "联合汽车电子", detail: "博世+上汽合资·嵌入式SiC逆变砖·上汽/长安/吉利配套" },
            { name: "臻驱科技", detail: "功率半导体模块+电机控制系统·定制化解决方案" },
            { name: "安森美半导体", detail: "全球功率半导体巨头·车载功率器件" },
            { name: "英飞凌", detail: "全球功率半导体龙头·SiC模块量产技术成熟" },
            { name: "意法半导体", detail: "全球知名半导体·适配400V/800V平台车型" }
          ]
        },
        {
          label: "🔌 线束·高压连接器",
          items: [
            { name: "中航光电", detail: "国产连接器龙头·军工技术转车用·市占约18%·800V平台领先" },
            { name: "立讯精密", detail: "全球消费电子连接器龙头·跨界切入汽车连接器/线束" },
            { name: "沪光股份", detail: "线束龙头·赛力斯/上汽/理想/蔚来配套·40-600A全系列" },
            { name: "永贵电器", detail: "轨交+新能源高压连接器·兆瓦级液冷充电领先" },
            { name: "得润电子", detail: "连接器+线束+OBC·保时捷平台认证·800V高压连接器" },
            { name: "徕木股份", detail: "精密连接器专家·绑定比亚迪/特斯拉·高压大电流" },
            { name: "胜蓝股份", detail: "车载高低压连接器·充电枪组件·液冷大功率" },
            { name: "瑞可达", detail: "新能源车高压连接器龙头·车载动力/储能/充电桩连接" },
            { name: "鼎通科技", detail: "通信高速+车载高压连接器·算力+汽车双线" },
            { name: "天海电子", detail: "国内汽车连接器老牌·整车高低压线束·覆盖三电系统" },
            { name: "沃尔核材", detail: "高压互锁直流快充连接器·国标起草单位" },
            { name: "维通利", detail: "CCS电池集成/母排/软硬连接·风光储+新能源车" },
            { name: "长盈精密", detail: "消费电子精密结构件·车载射频/高压精密连接器" },
            { name: "合兴股份", detail: "汽车电子连接器·车载高速信号连接·新能源低压连接" },
            { name: "泰永长征", detail: "新能源汽车充电连接器·高压配电连接组件" },
            { name: "富士康", detail: "全球最大代工厂·汽车电子/线束代工" },
            { name: "安波福", detail: "全球汽车线束与电气架构龙头·智能汽车布局" }
          ]
        },
        {
          label: "⚙️ 轮毂·轴承·传动系统",
          items: [
            { name: "万向钱潮", detail: "国内汽车零部件龙头·轮毂轴承单元全球领先" },
            { name: "人本轴承", detail: "国内规模最大轴承制造企业·机器人关节轴承·长合区落地" },
            { name: "五洲新春", detail: "行星滚柱丝杠·轴承国内市占率58%·宇树核心供应商" },
            { name: "天马轴承", detail: "精密轴承制造·汽车轮毂轴承单元" },
            { name: "南方轴承", detail: "汽车轴承·摩托车轴承·精密零件" },
            { name: "光洋股份", detail: "汽车轴承·轮毂轴承单元·大众/通用配套" },
            { name: "长盛轴承", detail: "滑动轴承·自润滑轴承·汽车零部件" },
            { name: "双环传动", detail: "RV减速器国产第一·特斯拉认证·绑定特斯拉腰部关节" },
            { name: "中大力德", detail: "全品类减速器覆盖·宇树核心供应商·32亿长单锁定3年" },
            { name: "国茂股份", detail: "减速机龙头·RV减速器布局·高端装备配套" },
            { name: "通力科技", detail: "减速机·齿轮减速电机·工业自动化" },
            { name: "凯力五金", detail: "汽车零部件·精密五金·紧固件" },
            { name: "精锻科技", detail: "汽车齿轮·VVT/正时系统·大众/丰田/福特配套" }
          ]
        },
        {
          label: "🔩 电池结构件·PACK材料",
          items: [
            { name: "科达利", detail: "电池结构件全球龙头·宁德时代/比亚迪/LGES核心供应商" },
            { name: "震裕科技", detail: "精密结构件·锂电池结构件·电机铁芯" },
            { name: "斯莱克", detail: "电池壳体·易拉罐设备跨界·新能源包装" },
            { name: "瑞德丰", detail: "电池结构件·锂电池精密结构件" },
            { name: "壹石通", detail: "勃姆石涂覆材料·电池安全+芯片封装" },
            { name: "万顺新材", detail: "铝箔+碳foil·电池集流体材料龙头" },
            { name: "鼎胜新材", detail: "铝箔龙头·电池铝箔全球领先" },
            { name: "华北铝业", detail: "铝材·电池铝箔·新能源铝材" },
            { name: "华峰铝业", detail: "储能水冷板/钎焊箔龙头·市占约40%·绑定特斯拉/比亚迪" },
            { name: "恩捷股份", detail: "锂电池隔膜全球第一·市占率30%+·湿法隔膜龙头" },
            { name: "星源材质", detail: "干法隔膜龙头·湿法隔膜快速扩张" },
            { name: "天赐材料", detail: "电解液+六氟磷酸锂一体化·全球龙头" },
            { name: "新宙邦", detail: "电解液龙头·全球供应链布局" },
            { name: "中伟股份", detail: "前驱体材料全球第一·三元前驱体龙头" },
            { name: "当升科技", detail: "正极材料龙头·高镍产品全球领先" },
            { name: "容百科技", detail: "高镍正极材料·配套宁德时代等头部电池厂" },
            { name: "杉杉股份", detail: "负极材料+偏光片双主业·锂电材料" }
          ]
        },
        {
          label: "🔧 一体化压铸·轻量化",
          items: [
            { name: "拓普集团", detail: "一体化压铸龙头·轻量化底盘专家·特斯拉Optimus独家" },
            { name: "文灿股份", detail: "压铸件龙头·一体化压铸领先·客户含比亚迪/特斯拉" },
            { name: "泉峰汽车", detail: "新能源零部件·马达壳体·压铸件" },
            { name: "爱柯迪", detail: "汽车铝合金精密压铸件·全球供应商" },
            { name: "嵘泰股份", detail: "铝合金压铸·转向/传动系统" },
            { name: "派生科技", detail: "铝压铸件·汽车零部件" },
            { name: "贝斯特", detail: "精密零部件·涡轮增压器·压铸件" },
            { name: "美力科技", detail: "弹簧+稳定杆·轻量化" },
            { name: "华达科技", detail: "冲压件+紧固件·配套特斯拉" },
            { name: "金鸿顺", detail: "汽车冲压件·覆盖德系/美系" },
            { name: "常青股份", detail: "汽车冲压件·配套比亚迪/蔚来" },
            { name: "凌云股份", detail: "热成型钢+铝合金·配套一汽/大众" },
            { name: "敏实集团", detail: "汽车外饰件龙头·格栅+饰条" },
            { name: "新泉股份", detail: "汽车饰件总成·配套吉利/奇瑞" },
            { name: "旭升集团", detail: "铝合金零部件全球供应商·长合区落地" },
            { name: "豪斯特", detail: "一体化压铸·热成形·长合区落地" }
          ]
        },
        {
          label: "❄️ 热管理系统",
          items: [
            { name: "银轮股份", detail: "热管理系统龙头·新能源热管理全覆盖·长合区落地" },
            { name: "三花智控", detail: "热管理阀门全球第一·特斯拉Optimus独家" },
            { name: "奥特佳", detail: "汽车热管理·空调压缩机·新能源热管理" },
            { name: "松芝股份", detail: "新能源客车空调·储能温控·热管理系统" },
            { name: "华域汽车", detail: "汽车热管理·空调系统·上汽旗下" },
            { name: "中鼎股份", detail: "密封+底盘减震·Tier1供应商" },
            { name: "腾龙股份", detail: "汽车热管理管路·新能源车配套" },
            { name: "派生技术", detail: "热管理系统·汽车空调压缩机" },
            { name: "南京奥特佳", detail: "汽车热管理·空调系统·新能源配套" }
          ]
        },
        {
          label: "🛞 底盘·制动系统",
          items: [
            { name: "伯特利", detail: "制动龙头·线控制动技术领先·长合区落地" },
            { name: "东升汽车", detail: "悬架系统·长合区落地" },
            { name: "万桥智控", detail: "制动系统·长合区落地" },
            { name: "耐世特", detail: "转向系统全球龙头" },
            { name: "天润工业", detail: "重卡底盘供应商·转向/悬架" },
            { name: "远东传动", detail: "传动轴龙头·配套重卡" },
            { name: "万安科技", detail: "制动/ADAS·执行机构" },
            { name: "保隆科技", detail: "胎压监测+空气悬架·智能底盘" },
            { name: "华域麦格纳", detail: "底盘总成·麦格纳合资" },
            { name: "诺博汽车", detail: "座椅+内饰+智能座舱" },
            { name: "孔辉汽车", detail: "空气悬架系统国产替代领先·长合区落地" },
            { name: "瑞鹄模具", detail: "模具冲压·模具龙头" }
          ]
        },
        {
          label: "🚗 浙江区域整车及零部件",
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
    },
    nearbyCompanies: {
      title: "周边重点企业清单",
      subtitle: "机器人·数控机床·AI智造产业链细分零部件全景",
      groups: [
        {
          label: "🎯 控制器·伺服系统",
          items: [
            { name: "汇川技术", detail: "伺服系统国产第一·国内市场份额超22%·特斯拉供应商" },
            { name: "埃斯顿", detail: "国产机器人龙头·伺服自研·出口高增·净利+674%" },
            { name: "雷赛智能", detail: "运动控制领先·步进/伺服系统·工业自动化" },
            { name: "禾川科技", detail: "伺服系统·控制器·PLC·工业自动化" },
            { name: "伟创电气", detail: "变频器/伺服系统·工业自动化解决方案" },
            { name: "正弦电气", detail: "变频器/伺服·工业自动化" },
            { name: "麦格米特", detail: "智能家电+工业自动化·变频器/伺服" },
            { name: "英威腾", detail: "变频器/伺服·工业自动化·新能源汽车电控" },
            { name: "蓝海华腾", detail: "变频器/伺服·电动汽车电机控制器" },
            { name: "新时达", detail: "伺服+整机一体化·电梯控制+工业机器人" },
            { name: "拓斯达", detail: "工业机器人本体·注塑机辅机·智能制造" },
            { name: "华中数控", detail: "数控系统国产龙头·军工市占率25%·2025营收45亿" },
            { name: "固高科技", detail: "运动控制器·机器人控制系统·半导体设备" },
            { name: "宝信软件", detail: "工业软件·MES系统·智能制造" },
            { name: "柏楚电子", detail: "激光切割控制系统·数控系统" }
          ]
        },
        {
          label: "⚙️ 减速器（谐波·RV·行星）",
          items: [
            { name: "绿的谐波", detail: "谐波减速器国产第一·国内市占50%+·特斯拉/优必选/小米核心供应商" },
            { name: "双环传动", detail: "RV减速器国产第一·特斯拉认证·绑定Optimus腰部关节" },
            { name: "中大力德", detail: "全品类覆盖·宇树核心供应商·32亿长单锁定3年产能" },
            { name: "来福谐波", detail: "谐波减速器·精密制造·浙江绍兴" },
            { name: "国茂股份", detail: "减速机龙头·RV减速器布局·通用设备" },
            { name: "南通振康", detail: "RV减速器·焊接机器人配套" },
            { name: "恒丰泰", detail: "精密减速器·工业机器人配套" },
            { name: "珠海飞驰", detail: "精密减速器·自动化设备" },
            { name: "聚隆科技", detail: "洗衣机减速器·工业机器人减速器" },
            { name: "奥联电子", detail: "减速器·汽车零部件跨界" },
            { name: "宁波东力", detail: "齿轮减速电机·传动设备" },
            { name: "泰晟科技", detail: "减速机·齿轮箱" },
            { name: "德威尔", detail: "减速机·进口替代" },
            { name: "科峰智能", detail: "行星减速器·伺服电机配套" },
            { name: "龙泽精工", detail: "精密减速器·自动化设备" }
          ]
        },
        {
          label: "🔧 伺服电机·驱动电机",
          items: [
            { name: "步科股份", detail: "伺服电机·步进电机·低压伺服领导者" },
            { name: "卧龙电驱", detail: "全球电机龙头·绑定特斯拉/宝马·2024营收90.7亿" },
            { name: "大洋电机", detail: "老牌电机·配套雷诺/长城/奇瑞" },
            { name: "方正电机", detail: "全球首款量产800V高压电机·配套小鹏" },
            { name: "精进电动", detail: "北美/欧洲市场深耕·高端性能电机" },
            { name: "江特电机", detail: "电机·锂电材料·工业电机" },
            { name: "科力尔", detail: "微特电机·罩极电机·智能家居" },
            { name: "鸣志电器", detail: "空心杯电机全球领先·灵巧手核心·Optimus灵巧手" },
            { name: "德昌电机", detail: "微特电机·汽车电机·全球供应商" },
            { name: "捷昌驱动", detail: "线性驱动·智慧办公·工业自动化" },
            { name: "禾川科技", detail: "伺服电机·运动控制" },
            { name: "凯邦电机", detail: "电机·空调电机·新能源汽车电机" },
            { name: "微光股份", detail: "微特电机·风机·冷链电机" },
            { name: "伟创电气", detail: "伺服电机·变频器" },
            { name: "儒竞科技", detail: "电机驱动·热泵控制器·伺服系统" }
          ]
        },
        {
          label: "📡 传感器（力·视觉·位置）",
          items: [
            { name: "坤维科技", detail: "六维力传感器·机器人关节力控核心" },
            { name: "柯力传感", detail: "六维力传感器·机器人关节力控核心" },
            { name: "敏芯股份", detail: "MEMS传感器·麦克风/压力传感器" },
            { name: "睿知豪科技", detail: "传感器·机器人感知" },
            { name: "奥比中光", detail: "3D视觉传感器·特斯拉Optimus独家" },
            { name: "舜宇光学", detail: "车载镜头全球第一·机器视觉" },
            { name: "海康机器人", detail: "工业相机·机器视觉·AGV" },
            { name: "康耐视", detail: "机器视觉·视觉传感器" },
            { name: "凌华科技", detail: "工业电脑·机器视觉·测量检测" },
            { name: "纬朗智能", detail: "机器视觉·工业检测" },
            { name: "深视智能", detail: "3D视觉·工业检测" },
            { name: "埃尔森", detail: "3D视觉·机器人引导" },
            { name: "梅卡曼德", detail: "3D视觉·AI视觉引导" },
            { name: "星猿哲", detail: "3D视觉·物流分拣" },
            { name: "视比特", detail: "3D视觉·工业机器人" }
          ]
        },
        {
          label: "🤖 人形机器人·关节本体",
          items: [
            { name: "宇树科技", detail: "四足/人形机器人全球领先·消费/工业机器人" },
            { name: "智元机器人", detail: "人形机器人新锐·具身智能·已进工厂实训" },
            { name: "帕西尼触感", detail: "人形机器人·触觉传感器" },
            { name: "傅利叶智能", detail: "康复机器人·人形机器人" },
            { name: "逐际动力", detail: "人形机器人·四足机器人" },
            { name: "优必选", detail: "人形机器人·教育/商用机器人" },
            { name: "小米机器人", detail: "仿生机器人·铁大/铁蛋" },
            { name: "纯米科技", detail: "人形机器人·服务机器人" },
            { name: "达闼机器人", detail: "云端机器人·服务机器人" },
            { name: "傅里叶机器人", detail: "人形机器人·伺服电机" },
            { name: "星动纪元", detail: "人形机器人·具身智能" },
            { name: "智平方", detail: "人形机器人·具身智能" },
            { name: "手鹿机器人", detail: "人形机器人·服务场景" },
            { name: "夸父人形", detail: "人形机器人·全尺寸通用人形" },
            { name: "加速进化", detail: "人形机器人·研发阶段" }
          ]
        },
        {
          label: "🔩 丝杠·导轨·线性传动",
          items: [
            { name: "五洲新春", detail: "行星滚柱丝杠·轴承国内市占率58%·宇树核心供应商" },
            { name: "恒立液压", detail: "反向式行星滚柱丝杠·已进特斯拉供应链" },
            { name: "华辰装备", detail: "P0级丝杠磨床国内唯一·替代进口40%" },
            { name: "秦川机床", detail: "齿轮加工垄断60%·丝杠+减速器双线" },
            { name: "华东数控", detail: "龙门导轨磨国产第一·机器人丝杠加工刚需" },
            { name: "国泰集团", detail: "精密机床·丝杠·导轨" },
            { name: "三花智控", detail: "线性执行器总成·特斯拉Optimus独家" },
            { name: "拓普集团", detail: "线性执行器总成·特斯拉Optimus独家" },
            { name: "双林股份", detail: "丝杠降本突破·10万套产线已投产" },
            { name: "江苏亚威", detail: "数控折弯机·激光切割·丝杠" },
            { name: "日发精机", detail: "数控机床·轴承·丝杠" },
            { name: "沈阳机床", detail: "70年老牌龙头·i5智能系统" },
            { name: "高精传动", detail: "丝杠·减速机" },
            { name: "亿维博创", detail: "精密丝杠·直线导轨" },
            { name: "华澳科技", detail: "直线导轨·精密传动" }
          ]
        },
        {
          label: "🔪 刀具·刀库·切削工具",
          items: [
            { name: "株洲钻石", detail: "数控刀具龙头·切削刀具" },
            { name: "厦门金鹭", detail: "钨业龙头·数控刀具" },
            { name: "华锐精密", detail: "数控刀具·硬质合金刀具" },
            { name: "欧科亿", detail: "数控刀具·硬质合金" },
            { name: "恒锋工具", detail: "精密刀具·拉削刀具" },
            { name: "沃尔德", detail: "金刚石刀具·超硬刀具" },
            { name: "富耐克", detail: "超硬刀具·立方氮化硼" },
            { name: "博云新材", detail: "硬质合金·航空航天" },
            { name: "中钨高新", detail: "钨业·数控刀具" },
            { name: "翔鹭钨业", detail: "钨产业链·粉末冶金" },
            { name: "章源钨业", detail: "钨产业链·硬质合金" },
            { name: "四方达", detail: "复合片·金刚石刀具" },
            { name: "郑钻精密", detail: "精密刀具·超硬刀具" },
            { name: "刃系列", detail: "数控刀具·定制刀具" },
            { name: "株硬集团", detail: "硬质合金·切削刀具" }
          ]
        },
        {
          label: "🖥️ 数控机床整机",
          items: [
            { name: "创世纪", detail: "钻攻机全球第一·3C+新能源双线·营收53.2亿·长合区" },
            { name: "海天精工", detail: "龙门加工中心龙头·市占率30%+·2025营收35亿" },
            { name: "华中数控", detail: "数控系统国产龙头·军工市占率25%·2025营收45亿" },
            { name: "纽威数控", detail: "中高端五轴·出口占比40%·2025H1同比+26%" },
            { name: "科德数控", detail: "五轴整机稀缺标的·军工/航天核心·2024营收6.05亿" },
            { name: "沈阳机床", detail: "70年老牌龙头·i5智能系统·市占率15%+" },
            { name: "国盛智科", detail: "中端性价比王·模具+汽配双线" },
            { name: "嘉村智能", detail: "五轴联动+故障预判·长三角备件库" },
            { name: "北京精雕", detail: "微米级精度·精密小件加工·2025营收22亿" },
            { name: "浙海德曼", detail: "高精度车床龙头·汽车+航空双赛道" },
            { name: "宇环数控", detail: "精密磨削·绑定苹果/华为·富士康核心" },
            { name: "金沙数控", detail: "刹车盘加工80%份额·视觉识别智能系统" },
            { name: "大连机床", detail: "央企通用技术集团控股·航空航天核心" },
            { name: "华东数控", detail: "龙门导轨磨国产第一" },
            { name: "沈阳一机", detail: "数控车床老牌龙头" }
          ]
        },
        {
          label: "🏭 系统集成·整机本体",
          items: [
            { name: "埃斯顿", detail: "国产机器人出货前三·焊接/搬运机器人·净利+674%" },
            { name: "埃夫特", detail: "国产机器人第一梯队·整机+系统集成" },
            { name: "新松机器人", detail: "机器人国家队·AGV/特种机器人" },
            { name: "拓斯达", detail: "华南3C龙头·工业机器人本体" },
            { name: "机器人本体", detail: "国产整机·3C/新能源/汽车/仓储" },
            { name: "新时达", detail: "伺服+整机一体化" },
            { name: "配天机器人", detail: "工业机器人本体·系统集成" },
            { name: "珞石机器人", detail: "轻量型机器人·国产机器人" },
            { name: "遨博智能", detail: "协作机器人·国产协作机器人" },
            { name: "节卡机器人", detail: "协作机器人·柔性机器人" },
            { name: "越疆科技", detail: "轻量型机器人·教育/工业" },
            { name: "艾利特机器人", detail: "协作机器人" },
            { name: "慧灵科技", detail: "轻量型机器人·协作机器人" },
            { name: "非夕机器人", detail: "自适应机器人·柔性制造" },
            { name: "思灵机器人", detail: "智能机器人·力控机器人" }
          ]
        }
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
    },
    nearbyCompanies: {
      title: "周边重点企业清单",
      subtitle: "储能·光伏·氢能产业链细分零部件全景",
      groups: [
        {
          label: "🔋 储能电芯·BMS电池管理",
          items: [
            { name: "宁德时代", detail: "储能电芯全球第一·市占率25%+·587Ah大电芯量产" },
            { name: "亿纬锂能", detail: "全球第二大储能电芯厂商·628Ah批量出货·海外订单超25GWh" },
            { name: "比亚迪储能", detail: "刀片电池储能专用·海外户储市占率超50%" },
            { name: "海辰储能", detail: "全球储能出货量第二·专用储能电芯" },
            { name: "瑞浦兰钧", detail: "青山集团控股·储能领域爆发增长" },
            { name: "中创新航", detail: "电力/工商业储能·储能电芯" },
            { name: "国轩高科", detail: "磷酸铁锂技术深耕·商用车优势" },
            { name: "蜂巢能源", detail: "短刀电池创新·客户含长城/吉利" },
            { name: "远景动力", detail: "全球化布局领先·海外建厂最多" },
            { name: "力神电池", detail: "央企背景·一汽/东风等战略合作" },
            { name: "正力新能", detail: "高能量密度电池·乘用车+储能双布局" },
            { name: "鹏辉能源", detail: "储能电芯·钠离子电池" },
            { name: "天能控股", detail: "铅酸/锂电池·储能电池" },
            { name: "超威集团", detail: "动力电池·储能电池" },
            { name: "微宏动力", detail: "快充电池·湖州本地" },
            { name: "派能科技", detail: "户用储能龙头·欧洲市场占有率25%+" },
            { name: "沃太能源", detail: "户用储能·工商业储能" }
          ]
        },
        {
          label: "⚡ PCS变流器·储能逆变器",
          items: [
            { name: "阳光电源", detail: "全球PCS龙头·储能系统集成第一·海外大储订单充足" },
            { name: "华为数字能源", detail: "组串式储能·智能光储" },
            { name: "科华数据", detail: "国内PCS出货第一·大储+工商业储能双布局" },
            { name: "锦浪科技", detail: "户用储能PCS龙头·欧洲市场占有率高·20年电力电子积淀" },
            { name: "固德威", detail: "户用及中小型工商业储能·混合逆变器" },
            { name: "盛弘股份", detail: "工商业储能PCS龙头·国内光储一体机市占率第一" },
            { name: "上能电气", detail: "大型地面电站PCS·储能PCS" },
            { name: "德业股份", detail: "全球户储PCS绝对龙头·南非/巴基斯坦市占率第一" },
            { name: "古瑞瓦特", detail: "分布式光伏逆变器·储能逆变器" },
            { name: "首航新能源", detail: "光伏和储能领域·混合逆变器及储能系统" },
            { name: "三晶电气", detail: "户用和中小型工商业储能·欧洲市场" },
            { name: "星云股份", detail: "PCS·锂电池检测·储能系统" },
            { name: "智光储能", detail: "高压级联储能·特种储能" },
            { name: "科陆电子", detail: "储能PCS·智能电网" },
            { name: "南瑞继保", detail: "储能PCS·电力保护" },
            { name: "许继电气", detail: "储能PCS·特高压" }
          ]
        },
        {
          label: "❄️ 热管理·温控系统",
          items: [
            { name: "英维克", detail: "储能液冷绝对龙头·国内市占30%+·温差控制≤2℃" },
            { name: "高澜股份", detail: "储能液冷第二·市占约15%·电网侧储能优势" },
            { name: "同飞股份", detail: "工业/工商业储能温控龙头·2025储能营收16.86亿" },
            { name: "申菱环境", detail: "风冷+液冷双布局·大型储能风冷龙头" },
            { name: "松芝股份", detail: "储能温控·工商业储能" },
            { name: "银轮股份", detail: "储能换热器/水冷板·绑定宁德/比亚迪" },
            { name: "三花智控", detail: "储能阀件/换热器·全球制冷阀件龙头" },
            { name: "华峰铝业", detail: "储能水冷板/钎焊箔龙头·市占约40%·特斯拉/比亚迪绑定" },
            { name: "冰轮环境", detail: "温控设备·工业制冷" },
            { name: "佳力图", detail: "精密温控·数据中心温控" },
            { name: "朗进科技", detail: "变频控制器·温控设备" },
            { name: "新界泵业", detail: "水泵·储能温控水循环" }
          ]
        },
        {
          label: "📦 PACK系统集成·储能集装箱",
          items: [
            { name: "海博思创", detail: "储能系统集成龙头·国内大储集成核心玩家" },
            { name: "比亚迪储能", detail: "MCQ魔方系统·直流侧储能系统全球前三" },
            { name: "阳光电源", detail: "全球光储集成龙头·大储PCS市占率超31%" },
            { name: "远景能源", detail: "储能+风机+智能物联·EnOS能源物联网平台" },
            { name: "天合光能", detail: "光伏+储能系统集成·天合储能" },
            { name: "晶科能源", detail: "光伏组件+储能解决方案·Tiger Neo" },
            { name: "阿特斯", detail: "光伏组件+储能系统·海外项目" },
            { name: "中天科技", detail: "储能系统·电缆+储能双主业" },
            { name: "科士达", detail: "储能系统·UPS+储能" },
            { name: "南都电源", detail: "铅酸/锂电储能老牌·储能系统" },
            { name: "林洋能源", detail: "储能系统·电表+储能双布局" },
            { name: "科陆电子", detail: "储能系统·智能电网" },
            { name: "智泰新能源", detail: "储能系统·PACK" },
            { name: "盛虹动能", detail: "储能系统·化工跨界储能" },
            { name: "永泰能源", detail: "储能系统·火电+储能" }
          ]
        },
        {
          label: "☀️ 光伏组件·逆变器",
          items: [
            { name: "隆基绿能", detail: "光伏硅片/组件全球第一·HPBC电池技术" },
            { name: "通威股份", detail: "硅料/电池片双龙头·TOPCon/HJT" },
            { name: "天合光能", detail: "光伏组件龙头·210mm大尺寸组件" },
            { name: "晶科能源", detail: "光伏组件·N型TOPCon技术领先" },
            { name: "晶澳科技", detail: "光伏组件·回A上市" },
            { name: "阿特斯", detail: "光伏组件·海外项目" },
            { name: "东方日升", detail: "光伏组件·异质结" },
            { name: "亿晶光电", detail: "光伏组件·上市公司" },
            { name: "韩华新能源", detail: "光伏组件·韩华化学" },
            { name: "阳光电源", detail: "光伏逆变器全球第一·组串式逆变器" },
            { name: "华为数字能源", detail: "组串式逆变器·智能光伏" },
            { name: "锦浪科技", detail: "分布式光伏逆变器" },
            { name: "固德威", detail: "组串式逆变器·储能" },
            { name: "古瑞瓦特", detail: "分布式逆变器·储能" },
            { name: "首航新能源", detail: "光伏逆变器·储能" },
            { name: "上能电气", detail: "集中式/组串式逆变器" }
          ]
        },
        {
          label: "⛽ 氢能·燃料电池",
          items: [
            { name: "捷氢科技", detail: "燃料电池系统·上汽旗下·上海" },
            { name: "国鸿氢能", detail: "燃料电池电堆·国内领先" },
            { name: "亿华通", detail: "燃料电池系统·科创板上市" },
            { name: "重塑能源", detail: "燃料电池系统·氢能源" },
            { name: "国富氢能", detail: "氢能全产业链·制氢/储氢/运氢" },
            { name: "氢璞创能", detail: "燃料电池电堆·氢能源汽车" },
            { name: "氢晨科技", detail: "燃料电池电堆·上海" },
            { name: "明天氢能", detail: "燃料电池系统·安徽" },
            { name: "风氢扬", detail: "燃料电池系统" },
            { name: "氢枫能源", detail: "加氢站·氢能装备" },
            { name: "中集安瑞科", detail: "氢能储运·LNG/氢能" },
            { name: "京城股份", detail: "氢气瓶·储氢装备" },
            { name: "亚普股份", detail: "汽车储能系统·氢能" },
            { name: "厚普股份", detail: "加氢站设备" },
            { name: "佛燃能源", detail: "天然气/氢能" }
          ]
        },
        {
          label: "🔩 铜箔·铝箔·结构件",
          items: [
            { name: "诺德股份", detail: "铜箔龙头·锂电铜箔" },
            { name: "嘉元科技", detail: "铜箔·宁德时代/比亚迪供应商" },
            { name: "铜冠铜箔", detail: "铜箔·锂电池用" },
            { name: "华创新材料", detail: "铜箔·锂电铜箔" },
            { name: "中一科技", detail: "铜箔·锂电/标准铜箔" },
            { name: "诺德新材", detail: "铜箔·覆铜板" },
            { name: "鼎胜新材", detail: "铝箔龙头·电池铝箔全球领先" },
            { name: "华北铝业", detail: "铝材·电池铝箔" },
            { name: "万顺新材", detail: "铝箔+碳foil·电池集流体" },
            { name: "科达利", detail: "电池结构件全球龙头" },
            { name: "震裕科技", detail: "精密结构件·电池结构件" },
            { name: "斯莱克", detail: "电池壳体·易拉罐设备" },
            { name: "瑞德丰", detail: "电池结构件·精密结构件" },
            { name: "壹石通", detail: "勃姆石涂覆·电池安全" },
            { name: "天奈科技", detail: "碳纳米管导电剂·全球头部" },
            { name: "道氏技术", detail: "碳纳米管·电池材料" }
          ]
        },
        {
          label: "🧱 EMS能源管理·系统软件",
          items: [
            { name: "国能日新", detail: "功率预测·新能源软件" },
            { name: "远景能源", detail: "EnOS能源物联网平台·智能物联" },
            { name: "华为数字能源", detail: "智能光伏·EMS" },
            { name: "阳光电源", detail: "智慧能源管理·云平台" },
            { name: "恒华科技", detail: "电力信息化·储能EMS" },
            { name: "映翰通", detail: "工业物联网·储能通信" },
            { name: "威胜信息", detail: "智能电表·能源管理" },
            { name: "煜邦电力", detail: "智能电网·储能EMS" },
            { name: "安科瑞", detail: "用户端电力管理·微电网" },
            { name: "易事特", detail: "储能系统·UPS·充电桩" },
            { name: "中恒电气", detail: "电力信息化·充电桩" },
            { name: "科陆电子", detail: "智能电网·储能" }
          ]
        }
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
      { step: "01", name: "原材料加工", detail: "钢材/铝材开料、冲压、锻造、铸造", companies: "宝钢、铝业巨头" },
      { step: "02", name: "零部件制造", detail: "电机定子/转子、电池模组、电控PCB、减速器", companies: "比亚迪弗迪电池、富特科技" },
      { step: "03", name: "车身焊接", detail: "白车身焊接、涂装前处理、一体化压铸", companies: "拓普集团、旭升集团" },
      { step: "04", name: "表面处理", detail: "电泳、喷涂、烤漆（园区配套阳极氧化）", companies: "园区阳极氧化产业园" },
      { step: "05", name: "动力系统集成", detail: "电机装配、电控系统集成、电池包pack、热管理", companies: "吉利、零跑、银轮股份" },
      { step: "06", name: "总装", detail: "整车装配、内饰、线束、检测", companies: "吉利、零跑、特斯拉" },
      { step: "07", name: "整车测试", detail: "路试、淋雨、NVH测试、智能驾驶标定", companies: "福瑞泰克、国家电网" }
    ]
  },
  {
    id: "robot-process",
    name: "机器人制造工艺",
    icon: "🤖",
    color: "#8b5cf6",
    steps: [
      { step: "01", name: "精密零部件加工", detail: "谐波减速器、伺服电机、传感器、轴承加工", companies: "绿的谐波、人本轴承" },
      { step: "02", name: "关键部件制造", detail: "减速器装配、伺服驱动、控制器PCB", companies: "汇川技术、桢正机器人" },
      { step: "03", name: "本体组装", detail: "关节装配、壳体组装、线束布置", companies: "创世纪、利羿精密" },
      { step: "04", name: "表面处理", detail: "阳极氧化、喷涂、激光雕刻", companies: "园区阳极氧化产业园" },
      { step: "05", name: "软件集成", detail: "ROS系统、SLAM算法、运动控制、视觉识别", companies: "宇树科技、智元机器人" },
      { step: "06", name: "标定测试", detail: "运动精度标定、负载测试、耐久性测试", companies: "德马科技、诺力股份" },
      { step: "07", name: "应用部署", detail: "场景适配、系统集成、售后服务", companies: "海康威视、科大讯飞" }
    ]
  },
  {
    id: "cnc-process",
    name: "数控机床制造工艺",
    icon: "🔧",
    color: "#3b82f6",
    steps: [
      { step: "01", name: "铸件制造", detail: "床身铸造、底座铸造、消除内应力", companies: "正轩精密" },
      { step: "02", name: "粗加工", detail: "刨床粗加工、铣削定位面", companies: "牛博新能源" },
      { step: "03", name: "精密加工", detail: "CNC加工中心精铣、镗孔、攻丝", companies: "创世纪" },
      { step: "04", name: "热处理", detail: "淬火、回火、表面渗碳、氮化", companies: "专业热处理厂" },
      { step: "05", name: "磨削加工", detail: "导轨磨、丝杠磨、精密磨削", companies: "人本轴承" },
      { step: "06", name: "装配调试", detail: "丝杠装配、导轨安装、精度调试", companies: "创世纪" },
      { step: "07", name: "质量检测", detail: "三坐标测量、激光干涉仪检测", companies: "专业检测机构" }
    ]
  },
  {
    id: "storage-process",
    name: "储能系统制造工艺",
    icon: "🔋",
    color: "#f97316",
    steps: [
      { step: "01", name: "电芯制造", detail: "正极涂布、负极涂布、卷绕/叠片、电解液注入", companies: "宁德时代、亿纬锂能" },
      { step: "02", name: "模组/PACK", detail: "电芯分选、模组焊接、模组测试、Pack装配", companies: "宁德时代、比亚迪储能" },
      { step: "03", name: "BMS研发", detail: "电池管理系统硬件/软件、荷电状态估算", companies: "华为数字能源、阳光电源" },
      { step: "04", name: "PCS制造", detail: "功率转换系统、储能逆变器、变压器", companies: "阳光电源、华为" },
      { step: "05", name: "系统集成", detail: "集装箱集成、消防系统、温控系统", companies: "海博思创、中创新航" },
      { step: "06", name: "EMS调度", detail: "能量管理系统、并网调试、功率调度", companies: "远景能源、国家电网" },
      { step: "07", name: "运维检测", detail: "电池健康诊断、运维平台、回收梯次利用", companies: "南都电源" }
    ]
  }
];
