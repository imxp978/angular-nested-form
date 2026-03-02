export const approvalRuleData = [
  {
    id: 1,
    approvalName: '請假流程',
    approvalLevels: [
      {
        id: 101,
        setting: 1,
        approvers: [
          { id: 1, employeeId: 10, name: '蔡大麥', title: '部門主管' },
        ],
      },
    ],
  },
  {
    id: 2,
    approvalName: '專案採購',
    approvalLevels: [
      {
        id: 201,
        setting: 1,
        approvers: [
          { id: 2, employeeId: 11, name: '王小明', title: '課長' },
          { id: 3, employeeId: 12, name: '陳小華', title: '經理' },
        ],
      },
      {
        id: 202,
        setting: 2,
        approvers: [
          { id: 4, employeeId: 13, name: '林大方', title: '財務總監' },
        ],
      },
    ],
  },
  {
    id: 3,
    approvalName: '請款審核',
    approvalLevels: [
      {
        id: 301,
        setting: 2,
        approvers: [{ id: 5, employeeId: 14, name: '張小傑', title: '經理' }],
      },
      {
        id: 302,
        setting: 2,
        approvers: [
          { id: 6, employeeId: 15, name: '李小小', title: '處長' },
          { id: 3, employeeId: 12, name: '陳小華', title: '經理' },
        ],
      },
      {
        id: 303,
        setting: 2,
        approvers: [{ id: 7, employeeId: 16, name: '趙大大', title: '總經理' }],
      },
    ],
  },
];
