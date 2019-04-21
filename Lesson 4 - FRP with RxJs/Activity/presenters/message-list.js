const LOCALE = 'en';

const timestampToDateTime = LOCALE => isDate => timestampString => {
  const date = new Date( Number.parseFloat( timestampString ) * 1000 );
  return isDate ?
         date.toLocaleDateString( LOCALE ) :
         date.toLocaleTimeString( LOCALE );
}

const timestampToLocaleDate = timestampToDateTime( LOCALE )( true );
const timestampToLocaleTime  = timestampToDateTime( LOCALE )( false );

const getUser = users => id => (
      users.find( user => user.id === id ) ||
      { profile: { real_name: '____' } }
    ).profile.real_name;

const getMessagesTemplate = ( messages, users ) =>
  messages.map( message => `
    <div class="message">
      <div class="date">${timestampToLocaleDate( message.ts )}</div>
      <div class="time">${timestampToLocaleTime( message.ts )}</div>
      <div class="user">${getUser(users)(message.user)}:</div>
      <div class="text">${message.text}</div>
    </div>
  `).join( '' );

export const renderMessageList = ( messages, users ) => {
  document.querySelector( '.js-message-list' ).innerHTML =
      getMessagesTemplate( messages, users );
}
