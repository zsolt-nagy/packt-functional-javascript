

const getChannelTemplate = channels =>
  channels
      .map( channel => `
        <div class="channel"
             tooltip="${channel.topic.value}"
             data-id="${channel.id}"
        >
          ${channel.name}
        </div>
      ` ).join( '' );

export const renderChannelList = channels => {
      document.querySelector( '.js-channel-list' ).innerHTML =
          getChannelTemplate( channels );
    }

const handleChannelClick = ( callback, event ) => {
  if ( event.target.dataset && event.target.dataset.id ) {
    callback( event.target.dataset.id );
  }
}

export const registerClickListener = callback => {
  document.querySelector( '.js-channel-list' )
    .addEventListener( 'click', handleChannelClick.bind( null, callback ) );
}
