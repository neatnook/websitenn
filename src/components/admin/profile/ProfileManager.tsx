import React, { useState } from 'react';
import { User } from '../../../types/user';
import ProfileForm from './ProfileForm';
import { Shield } from 'lucide-react';
import ActionHeader from '../actions/ActionHeader';

const mockUser: User = {
  id: '1',
  username: 'admin',
  email: 'admin@neatnook.co.uk',
  role: 'admin',
  lastLogin: new Date().toISOString()
};

export default function ProfileManager() {
  const [user] = useState<User>(mockUser);

  return (
    <div className="space-y-6">
      <ActionHeader
        title="Profile Settings"
        icon={Shield}
      />

      <div className="bg-white rounded-lg shadow p-6">
        <ProfileForm user={user} />
      </div>
    </div>
  );
}