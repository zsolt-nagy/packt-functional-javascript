const ENTER_KEY = 13;
const $messageInput = document.querySelector( '.js-message-input' );

const handleMessageKeypress = ( state, event ) => {
  if ( event.keyCode === ENTER_KEY && typeof state.channelId === 'string' ) {
    state.insertMessage( $messageInput.value );
    $messageInput.value = '';
  }
}

export const addInputListener = state => {
  $messageInput
      .addEventListener(
        'keypress',
        handleMessageKeypress.bind( null, state )
      );
}
