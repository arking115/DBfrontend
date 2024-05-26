import React from 'react';
import Member from './Member';
import { MemberType } from '../types/types';

const MemberList: React.FC<{ members: MemberType[] }> = ({ members }) => {
  return (
    <div>
      {members.map((member) => (
        <Member key={member.id} member={member} />
      ))}
    </div>
  );
};

export default MemberList;
