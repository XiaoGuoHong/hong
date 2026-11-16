export const site = {
  name: 'Hong',
  github: 'https://github.com/XiaoGuoHong',
  description: 'Hong 的个人站点。只放已经公开、且不含雇主或内部资料的个人作品。',
} as const;

export function isPublicProject(data: {
  kind: 'personal' | 'company';
  repoPrivate?: boolean;
}): boolean {
  return data.kind === 'personal' && !data.repoPrivate;
}

export function kindLabel(kind: 'personal' | 'company'): string {
  return kind === 'company' ? '公司项目' : '个人项目';
}
