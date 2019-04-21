import messages from './data/messages.json';
import users from './data/users.json';

import { fetchChannels } from './models/channels.model.js';
import {
  registerClickListener,
  renderChannelList
} from './presenters/channel-list.js';
import { fetchMessages } from './models/messages.model.js';
import { fetchUsers } from './models/users.model.js';
import { renderMessageList } from './presenters/message-list.js';

const ENTER_KEY = 13;
const $messageInput = document.querySelector( '.js-message-input' );

const handleMessageKeypress = ( insertMessage, event ) => {
  if ( event.keyCode === ENTER_KEY ) {
    insertMessage( $messageInput.value );
    $messageInput.value = '';
  }
}

// stateful code
const state = {
  channelId: null
}

const displayChannel = async ( channelId ) => {
  state.channelId = channelId;
  const messages = await fetchMessages( channelId );
  const users = await fetchUsers();
  renderMessageList( messages, users );
}

const app = async () => {
    const users = await fetchUsers();
    registerClickListener( displayChannel );
    const channels = await fetchChannels();
    renderChannelList( channels );

    // imperative, stateful code
    const insertMessage = message => {
      messages.push( {
        "type": "message",
        "user": "U123456",
        "text": message,
        "ts":   "" + ( new Date().getTime() / 1000.0 )
      } );
      renderMessageList( messages, users );
    }

    $messageInput
        .addEventListener(
          'keypress',
          handleMessageKeypress.bind( null, insertMessage )
        );
}

app();
