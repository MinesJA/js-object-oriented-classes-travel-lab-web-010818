
class Driver{
  constructor (name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(yearGiven){
    let yearStart = this.startDate.getFullYear();
    return yearGiven - yearStart
  }
}

class Route{
  constructor (beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled(){
    let eastWest =  ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];

    let startStreet = this.beginningLocation.vertical;
    let endStreet = this.endingLocation.vertical;
    let startAve = eastWest.indexOf(this.beginningLocation.horizontal);
    let endAve = eastWest.indexOf(this.endingLocation.horizontal);

    let vertDist = Math.abs(startStreet - endStreet);
    let horzDist = Math.abs(startAve - endAve);

    return vertDist + horzDist
    }

  estimatedTime(peak = false){
    // 3 blocks = 1 min
    // return time in minutes
    let blocks = this.blocksTravelled();

    if (peak){
      return blocks/2;
    } else {
      return blocks/3;
    }
  }


}
