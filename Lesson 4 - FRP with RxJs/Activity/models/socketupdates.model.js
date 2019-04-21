import { API_TOKEN } from '../constants/api.const';
import { webSocket } from "rxjs/webSocket";
const webSocketConnectUrl = `https://slack.com/api/rtm.connect?token=${API_TOKEN}`;

export const getChannelUpdates = () =>
  fetch( webSocketConnectUrl )
      .then( result => result.json() )
      .then( json => webSocket( json.url ) );
