import { API_TOKEN } from '../constants/api.const';
import { from } from 'rxjs';

const getChannelUrl = channelId =>
    `https://slack.com/api/channels.history?token=${API_TOKEN}&channel=${channelId}`;

export const fetchMessages = channelId =>
  from(
    fetch( getChannelUrl(channelId) )
      .then( result => result.json() )
      .then( result => result.messages.sort( (x,y) => parseFloat(x.ts) - parseFloat(y.ts) ) )
      .catch( console.error )
  );
