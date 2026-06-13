const SERVICES = {
  counselor: {
    title: '辅导员信息',
    desc: '查看您的辅导员联系方式、办公地点及分管班级信息。',
    items: [
      { label: '姓名', value: '李老师' },
      { label: '联系电话', value: '138****5678' },
      { label: '办公地点', value: '学工楼 302 室' },
      { label: '分管班级', value: '2023级临床医学1班' }
    ]
  },
  leave: {
    title: '日常请假',
    desc: '在线提交日常请假申请，查看审批进度与历史记录。',
    items: [
      { label: '待审批', value: '0 条' },
      { label: '本月已请假', value: '1 天' },
      { label: '最近申请', value: '暂无记录' }
    ],
    action: '发起请假申请'
  },
  query: {
    title: '信息查询',
    desc: '查询学籍、成绩、奖助、宿舍等个人相关信息。',
    items: [
      { label: '学号', value: '20230101001' },
      { label: '院系', value: '临床医学院' },
      { label: '专业', value: '临床医学' },
      { label: '班级', value: '2023级1班' }
    ]
  },
  workstudy: {
    title: '勤工助学',
    desc: '浏览勤工助学岗位，在线申请并查看录用结果。',
    items: [
      { label: '在招岗位', value: '12 个' },
      { label: '我的申请', value: '0 条' },
      { label: '本月工时', value: '0 小时' }
    ],
    action: '查看岗位列表'
  },
  mailbox: {
    title: '部长信箱',
    desc: '向学工部负责人反映问题或提出建议，支持匿名留言。',
    items: [
      { label: '已提交', value: '0 条' },
      { label: '已回复', value: '0 条' },
      { label: '处理中', value: '0 条' }
    ],
    action: '写一封信'
  },
  exam: {
    title: '入学教育考试',
    desc: '参加入学教育在线考试，查看成绩与补考安排。',
    items: [
      { label: '考试状态', value: '已完成' },
      { label: '考试成绩', value: '92 分' },
      { label: '考试时间', value: '2023-09-15' }
    ]
  },
  evaluation: {
    title: '综测加分',
    desc: '提交综合测评加分材料，查询审核结果。',
    items: [
      { label: '待审核', value: '0 条' },
      { label: '已通过', value: '2 条' },
      { label: '本学期加分', value: '3.5 分' }
    ],
    action: '提交加分申请'
  },
  publicity: {
    title: '站内公示',
    desc: '查看奖助学金、评优评先等公示信息。',
    items: [
      { label: '最新公示', value: '2025年国家助学金名单公示' },
      { label: '公示时间', value: '2025-06-01 至 2025-06-07' },
      { label: '公示状态', value: '公示中' }
    ]
  },
  notice: {
    title: '站内公告',
    desc: '浏览学工部发布的最新通知与公告。',
    items: [
      { label: '未读公告', value: '2 条' },
      { label: '最新公告', value: '关于2025年暑假去向登记的通知' },
      { label: '发布时间', value: '2025-06-10' }
    ]
  },
  discipline: {
    title: '违纪管理',
    desc: '查看个人违纪记录及申诉处理进度。',
    items: [
      { label: '违纪记录', value: '0 条' },
      { label: '申诉中', value: '0 条' },
      { label: '处分状态', value: '无' }
    ]
  },
  loan: {
    title: '生源地贷款',
    desc: '办理生源地信用助学贷款回执录入与进度查询。',
    items: [
      { label: '贷款状态', value: '未办理' },
      { label: '回执状态', value: '待提交' },
      { label: '办理学年', value: '2025-2026' }
    ],
    action: '提交回执信息'
  },
  subsidy: {
    title: '临时补助',
    desc: '因突发困难申请临时补助，查看审批结果。',
    items: [
      { label: '可申请', value: '是' },
      { label: '历史申请', value: '0 条' },
      { label: '本学期额度', value: '2000 元' }
    ],
    action: '申请临时补助'
  },
  destination: {
    title: '去向登记',
    desc: '登记节假日、寒暑假离校去向及联系方式。',
    items: [
      { label: '登记状态', value: '未登记' },
      { label: '登记时段', value: '2025年暑假' },
      { label: '截止时间', value: '2025-07-01' }
    ],
    action: '立即登记'
  },
  checkin: {
    title: '签到管理',
    desc: '参与辅导员发起的定位签到、活动签到等任务。',
    items: [
      { label: '待签到', value: '0 项' },
      { label: '本月签到', value: '8 次' },
      { label: '最近签到', value: '2025-06-12 晚点名' }
    ],
    action: '查看签到任务'
  }
};
