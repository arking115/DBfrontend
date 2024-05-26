import React from 'react';
import { SkillType } from '../types/types';

const SkillList: React.FC<{ skills: SkillType[] }> = ({ skills }) => {
  return (
    <ul>
      {skills.map((skill) => (
        <li key={skill.id}>{skill.name}</li>
      ))}
    </ul>
  );
};

export default SkillList;
