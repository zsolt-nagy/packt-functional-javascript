import { API_TOKEN } from '../constants/api.const';

const getChannelUrl = channelId =>
    `https://slack.com/api/channels.history?token=${API_TOKEN}&channel=${channelId}`;

export const fetchMessages = async channelId =>
  fetch( getChannelUrl(channelId) )
    .then( result => result.json() )
    .then( result => result.messages.sort( (x,y) => parseFloat(x.ts) - parseFloat(y.ts) ) )
    .catch( console.error );
