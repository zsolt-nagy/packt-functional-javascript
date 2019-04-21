

const ENTER_KEY = 13;
const $messageInput = document.querySelector( '.js-message-input' );

const handleMessageKeypress = ( insertMessage, state, event ) => {
  if ( event.keyCode === ENTER_KEY && typeof state.channelId === 'string' ) {
    insertMessage( $messageInput.value, state );
    $messageInput.value = '';
  }
}

export const addInputListener = state => {
  // imperative, stateful code
  const insertMessage = ( message, state ) => {
    state.messages.push( {
      "type": "message",
      "user": "U123456",
      "text": message,
      "ts":   "" + ( new Date().getTime() / 1000.0 )
    } );
    state.renderMessageList( state.messages, state.users );
  }

  $messageInput
      .addEventListener(
        'keypress',
        handleMessageKeypress.bind( null, insertMessage, state )
      );
}
