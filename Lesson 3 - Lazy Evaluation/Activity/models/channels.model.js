import { API_TOKEN } from '../constants/api.const';

const CHANNELS_URL = `https://slack.com/api/channels.list?token=${API_TOKEN}`;

export const fetchChannels = async () =>
  fetch( CHANNELS_URL )
    .then( result => result.json() )
    .then( result =>
      result.channels.map( channel => { return {
        id: channel.id,
        name: channel.name,
        topic: channel.topic,
        members: channel.members
      } } ) )
    .catch( console.error );
