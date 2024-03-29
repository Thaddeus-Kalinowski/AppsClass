class Destination {
  constructor(id, countryId, name, averageCost, foundedYear, rating, description, imageUrl) {
    this.id = id;
    this.countryId = countryId;
    this.name = name;
    this.averageCost = averageCost;
    this.foundedYear = foundedYear;
    this.rating = rating;
    this.description = description;
    this.imageUrl = imageUrl;
  }

  toString() {
    return `${this.name} was founded in ${this.foundedYear} - Average Cost: ${this.averageCost}, Rating: ${this.rating}`;
  }
}

export default Destination;
