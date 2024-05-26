import React from 'react';
import SkillList from './SkillList';
import { MemberType } from '../types/types';

const Member: React.FC<{ member: MemberType }> = ({ member }) => {
  return (
    <div>
      <h4>{member.name}</h4>
      <p>{member.email}</p>
      <SkillList skills={member.skills} />
    </div>
  );
};

export default Member;
