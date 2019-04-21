import { API_TOKEN } from '../constants/api.const';
import { from } from 'rxjs';
import { map, mergeAll } from 'rxjs/operators';

const CHANNELS_URL = `https://slack.com/api/channels.list?token=${API_TOKEN}`;

const mapChannel = channel => { return {
  id:      channel.id,
  name:    channel.name,
  topic:   channel.topic.value,
  members: channel.members
} };

export const fetchChannels = () =>
  from( fetch( CHANNELS_URL )
         .then( result => result.json() )
         .then( result => result.channels.map( mapChannel ) )
  );
