class Base64Image extends Image {

  constructor(base64Source, alt) {
    super();

    this.src = `data:image/png;base64,${base64Source}`;
    this.alt = alt;
    this.style.mixBlendMode = 'multiply';
  }

}
