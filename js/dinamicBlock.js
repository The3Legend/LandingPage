class ContactInformation {
  constructor(
    title,
    city,
    street,
    email,
    subtitle,
    phone,
    anotherNumber,
    parentSelector
  ) {
    (this.title = title),
      (this.city = city),
      (this.street = street),
      (this.email = email),
      (this.subtitle = subtitle),
      (this.phone = phone),
      (this.anotherNumber= anotherNumber),
      (this.parent = document.querySelector(parentSelector));
  }
  render() {
    const element = document.createElement("div");
    element.innerHTML = `
    <div class="row justify-content-md-center">
    <div class="col col-sm-5">
    <h5 class='font'>${this.title}</h5>
    <p>${this.city}</p>
    <p>${this.street}</p>
    <p>${this.email}</p>
  </div>
  <div class="col col-sm-2">
    <h5 class='font'>${this.subtitle}</h5>
    <p>${this.phone}</p>
    <p>${this.anotherNumber}</p>
  </div>
  </div>
    `;
    this.parent.append(element);
  }
}
new ContactInformation(
  "Туристический информационный центр:",
  "город Тернополь, 69000",
  "проспект Соборный 151",
  "mycitytic@gmail.com",
  "Администрация:",
  "+380504242054",
  "+380617097001",
  ".info"
).render();
