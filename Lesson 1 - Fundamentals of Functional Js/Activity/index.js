import channels from './data/channels.json';
import messages from './data/messages.json';
import users from './data/users.json';

const locale = 'en';
const ENTER_KEY = 13;
const $messageInput = document.querySelector( '.js-message-input' );

const getChannelTemplate = channels =>
  channels
      .map( channel => `
        <div class="channel" tooltip="${channel.purpose.value}">
          ${channel.name}
        </div>
      ` ).join( '' );

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

const renderChannelList = channels => {
  document.querySelector( '.js-channel-list' ).innerHTML =
      getChannelTemplate( channels );
}

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

const app = () => {
    renderChannelList( channels );
    renderMessageList( messages );

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
