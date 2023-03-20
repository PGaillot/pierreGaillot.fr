export interface TreeNode {
  name: string;
  children?: TreeNode[];
}

export interface ExperienceFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}
