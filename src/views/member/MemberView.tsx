import React from 'react';
import Member from '../../components/Member';
import { MemberType } from '../../types/types';

const MemberView: React.FC<{ member: MemberType }> = ({ member }) => {
  return (
    <div>
      <h1>Member Details</h1>
      <Member member={member} />
    </div>
  );
};

export default MemberView;
