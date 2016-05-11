
var Weekdays = 'Wednesday'
var Weekdays = prompt('What is your favorite day of the week?');

switch (Weekdays) {
	
		case 'Monday':
	 console.log('Mondays are for planning great projects');
	 break;
	 case 'Tuesday':
	 console.log('Tuesdays are for learning new things');
	 break;
	  case 'Wednesday':
	 console.log('Wednesday is the day to do a night hike');
	 break;
	  case 'Thursday':
	 console.log('Thursday is when I open the bottle of red wine');
	 break;
     case 'Friday':
	 console.log('Friday is the day for catching up with friends, without worrying about the time..');
	 break;
	    case 'Saturday':
	 console.log('Saturday is the day you go for a day hike with a hangover');
	 break;
	    case 'Sunday':
	 console.log('Sunday is the day I wanna just paint and chill');
	 break;
     default:
	 console.log('What day was that?');
}