let person = {
  name: 'Renee',
  age: 41,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM'
};

console.log(person['name']);
console.log(person['age']);

let day = 'Friday';
let alarm;

if (day === 'Saturday' || day === 'Sunday' ) {
  alarm = 'weekendAlarm';
} else {
  alarm = 'weekAlarm';
}

console.log(person[alarm]);

person.hobbies = ['Watch fav TV shows', 'Excercise'];
console.log(person.hobbies);
person['hobbies'] = ['Watch fav TV shows'];
