import messages from './data/messages.json';
import users from './data/users.json';

import { fetchChannels } from './models/channels.model.js';
import {
  registerClickListener,
  renderChannelList
} from './presenters/channel-list.js';
import { fetchMessages } from './models/messages.model.js';

const locale = 'en';
const ENTER_KEY = 13;
const $messageInput = document.querySelector( '.js-message-input' );

const timestampToDateTime = locale => isDate => timestampString => {
  const date = new Date( Number.parseFloat( timestampString ) * 1000 );
  return isDate ?
         date.toLocaleDateString( locale ) :
         date.toLocaleTimeString( locale );
}

const timestampToLocaleDate = timestampToDateTime( locale )( true );
const timestampToLocaleTime  = timestampToDateTime( locale )( false );

const getUser = users => id => (
      users.find( user => user.id === id ) ||
      { name: '____' }
    ).name;
const getUserFromUsers = getUser( users );

const getMessagesTemplate = messages =>
  messages.map( message => `
    <div class="message">
      <div class="date">${timestampToLocaleDate( message.ts )}</div>
      <div class="time">${timestampToLocaleTime( message.ts )}</div>
      <div class="user">${getUserFromUsers(message.user)}:</div>
      <div class="text">${message.text}</div>
    </div>
  `).join( '' );

const renderMessageList = messages => {
  document.querySelector( '.js-message-list' ).innerHTML =
      getMessagesTemplate( messages );
}

const handleMessageKeypress = ( insertMessage, event ) => {
  if ( event.keyCode === ENTER_KEY ) {
    insertMessage( $messageInput.value );
    $messageInput.value = '';
  }
}

const displayChannel = async channelId => {
  const messages = await fetchMessages( channelId );
  renderMessageList( messages );
}

const app = async () => {
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
      renderMessageList( messages );
    }

    $messageInput
        .addEventListener(
          'keypress',
          handleMessageKeypress.bind( null, insertMessage )
        );
}

app();
