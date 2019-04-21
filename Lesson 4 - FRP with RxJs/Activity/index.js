import { fetchChannels } from './models/channels.model.js';
import {
  registerClickListener,
  renderChannelList
} from './presenters/channel-list.js';
import { fetchMessages } from './models/messages.model.js';
import { fetchUsers } from './models/users.model.js';
import { renderMessageList } from './presenters/message-list.js';
import { addInputListener } from './presenters/message-input.js';

// stateful code
const state = {
  channelId: null,
  messages: [],
  users: [],
  renderMessageList
}

const displayChannel = async ( channelId ) => {
  state.channelId = channelId;
  const messages = await fetchMessages( channelId );
  state.messages = messages;
  const users = await fetchUsers();
  state.users = users;
  renderMessageList( messages, users );
}

const app = async () => {
    const users = await fetchUsers();
    registerClickListener( displayChannel );

    fetchChannels().subscribe( channels => renderChannelList( channels ) );

    addInputListener( state );
}

app();
