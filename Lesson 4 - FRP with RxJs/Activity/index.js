import { fetchChannels } from './models/channels.model.js';
import {
  registerClickListener,
  renderChannelList
} from './presenters/channel-list.js';
import { fetchMessages } from './models/messages.model.js';
import { getChannelUpdates } from './models/socketupdates.model.js';
import { fetchUsers } from './models/users.model.js';
import { renderMessageList } from './presenters/message-list.js';
import { addInputListener } from './presenters/message-input.js';

import { forkJoin } from 'rxjs';

// stateful code
const state = {
  channelId: null,
  messages: [],
  users: [],
  renderMessageList
}

const displayChannel = ( channelId ) => {
  forkJoin(
    fetchMessages( channelId ),
    fetchUsers()
  ).subscribe( ( [ messages, users ] ) => {
    state.channelId = channelId;
    state.messages = messages;
    state.users = users;
    renderMessageList( messages, users );
  } );
}

const updateChannel = event => {
  if ( event.type === 'message' && event.channel === state.channelId ) {
    displayChannel( state.channelId );
  }
}

const app = async () => {
    getChannelUpdates().then(
      socket => socket.subscribe( updateChannel )
    );
    registerClickListener( displayChannel );
    fetchChannels().subscribe( channels => renderChannelList( channels ) );
    addInputListener( state );
}

app();
