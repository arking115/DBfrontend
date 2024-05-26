export type SkillType = {
    id: number;
    name: string;
  };

export type MemberType = {
    id: number;
    name: string;
    email: string;
    skills: SkillType[];
    };
  
export type ProjectType = {
    id: number;
    name: string;
    description: string;
    members: MemberType[];
  };
  
export type DepartmentType = {
    id: number;
    name: string;
    description: string;
    projects: ProjectType[];
  };

export type ApplicationType = {
    id: number;
    project_id: number;
    name: string;
    motivation: string;
    skills: SkillType[];
  };
  