import { createContext } from 'react';
import { ME_PROFILE, ProfileProps } from '../constants/profile';

export const ProfileContext = createContext<ProfileProps>(ME_PROFILE);