class Listing {
    constructor(
      id,
      type,
      headline,
      yearPublished,
      agency,
      author,
      desc,
      imageUrl,
      contents
    ) {
      this.id = id;
      this.type = type;
      this.headline = headline;
      this.yearPublished = yearPublished;
      this.agency = agency;
      this.author = author;
      this.desc = desc;
      this.imageUrl = imageUrl;
      this.contents = contents;
    }
  
    toString() {
      return `${this.type} at ${this.desc} - Price: ${this.headline} - Article Published: ${this.yearPublished} - contents: ${this.contents} - Image URL: ${this.imageUrl}`;
    }
  }
  
  export default Listing;
  