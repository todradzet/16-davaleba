function convertTimeTo24Hr(time, period) {
    
    let [hours, minutes] = time.split(':').map(Number);
  
    if (period === 'AM') {
        if (hours === 12) {
            hours = 0;  
        }
    } else if (period === 'PM') {
        if (hours !== 12) {
            hours += 12;  
        }
    }
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
}
const time24hr = convertTimeTo24Hr("10:00", "PM");
console.log(time24hr);  
