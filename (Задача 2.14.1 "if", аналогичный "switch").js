let brouser = "Opera"

switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}


if (brouser == "Edge")
  console.log('Okay we support these browsers too')
if (brouser == 'Chrome'|| brouser =='Firefox'|| brouser == 'Safari'|| brouser == 'Opera')
  console.log('Okay we support these browsers too')
else console.log('We hope that this page looks ok!')
