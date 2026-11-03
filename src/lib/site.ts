export const site = {
  name: 'Hong',
  github: 'https://github.com/XiaoGuoHong',
  description:
    'Hong 的个人站点。人在广州，在广州西麦科技做开发，主要写 Python 和 Go。',
} as const;

export function kindLabel(kind: 'personal' | 'company'): string {
  return kind === 'company' ? '公司项目' : '个人项目';
}
