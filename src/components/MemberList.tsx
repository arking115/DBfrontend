import React from 'react';
import { MemberType } from '../types/types';
import Member from './Member';

interface MemberListProps {
  members: MemberType[];
  onRemoveMember?: (memberId: number) => void;
}

const MemberList: React.FC<MemberListProps> = ({ members, onRemoveMember }) => {
  return (
    <ul>
      {members.map(member => (
        <li key={member.id}>
          <Member member={member} />
          {onRemoveMember && <button onClick={() => onRemoveMember(member.id)}>Remove</button>}
        </li>
      ))}
    </ul>
  );
};

export default MemberList;
