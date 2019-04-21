import { API_TOKEN } from '../constants/api.const';
const USERS_URL = `https://slack.com/api/users.list?token=${API_TOKEN}`;

export const fetchUsers = async () =>
  fetch( USERS_URL )
     .then( users => users.json() )
     .then( users => users.members )
     .catch( console.error );
