export const routerTest = [
  {
    'path': '/',
    'name': 'Dashboard',
    'component': 'Layout',
    'redirect': '/dashboard',
    'hidden': null,
    'alwaysShow': false,
    'meta': null,
    'children': [{
      'path': 'dashboard',
      'name': 'Dashboard',
      'component': 'agentHomePage/agentOrdinaryHome'
    }]
  },
  { // 合同管理
    'path': '/contractManagement',
    'component': 'Layout',
    'name': 'ContractManagement',
    'meta': { 'title': '合同管理', 'icon': 'hetong' },
    'children': [
      {
        'path': 'newContract',
        'component': 'contractManagement/newContract',
        'name': 'NewContract',
        'meta': { 'title': '登记合同', 'noCache': false }
      },
      {
        'path': 'contractList',
        'component': 'contractManagement/contractList',
        'name': 'ContractList',
        'meta': { 'title': '合同列表', 'noCache': false }
      }
    ]
  }
]
