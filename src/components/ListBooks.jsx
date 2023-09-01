import React from "react";
import "./ListBooks.css";

function BookRow({ imgSrc, title, fileLink }) {
  const handleDownload = () => {
    (window.location.href = fileLink), imgSrc;
  };

  return (
    <tr>
      <div className="image">
        <img src={imgSrc} alt={title} />
      </div>
      <td>{title}</td>
      <td>
        <div className="book">
          <button onClick={handleDownload}>Download File</button>
        </div>
      </td>
    </tr>
  );
}
const bookData = [
  {
    imgSrc: "src/assets/Gaffes et gadgets.jpg",
    title: "Gaffes et Gadgets",
    fileLink: "./00.cbr",
  },
  {
    imgSrc: "src/assets/Gala de gaffes à gogo.jpg",
    title: "Gala de gaffes à gogo",
    fileLink: "./01.cbr",
  },
  {
    imgSrc: "src/assets/Le bureau des gaffes en gros.jpg",
    title: "Le bureau des gaffes en gros",
    fileLink: "./02.cbr",
  },
  {
    imgSrc: "src/assets/Gare aux gaffes du gars gonflé.jpg",
    title: "Gare au gaffes du gars gonflé",
    fileLink: "./03.cbr",
  },
  {
    imgSrc: "src/assets/En direct de la gaffe.jpg",
    title: "En direct de Lagaffe",
    fileLink: "./04.cbr",
  },
  {
    imgSrc: "src/assets/Le Lourd Passé de Lagaffe.jpg",
    title: "Le lourd passé de Lagaffe",
    fileLink: "./05.cbr",
  },
  {
    imgSrc: "src/assets/Des gaffes et des dégâts.jpg",
    title: "Des gaffes et des dégats",
    fileLink: "./06.cbr",
  },
  {
    imgSrc: "src/assets/Un gaffeur sachant gaffer.jpg",
    title: "Un gaffeur sachant gaffer",
    fileLink: "./07.cbr",
  },
  {
    imgSrc: "src/assets/Lagaffe nous gâte.jpg",
    title: "Lagaffe nous gate",
    fileLink: "./08.cbr",
  },
  {
    imgSrc: "src/assets/Le cas Lagaffe.jpg",
    title: "le cas Lagaffe",
    fileLink: "./09.cbr",
  },
  {
    imgSrc: "src/assets/Le géant de la gaffe.jpg",
    title: "Le géant de la gaffe",
    fileLink: "./10.cbr",
  },
  {
    imgSrc: "src/assets/Gaffes, bévues et boulettes.jpg",
    title: "Gaffes, bévues et boulettes",
    fileLink: "./11.cbr",
  },
  {
    imgSrc: "src/assets/Le gang des gaffeurs.jpg",
    title: "Le gang des gaffeurs",
    fileLink: "./12.cbr",
  },
  {
    imgSrc: "src/assets/Lagaffe mérite des baffes.jpg",
    title: "Lagaffe mérite des baffes",
    fileLink: "./13.cbr",
  },
  {
    imgSrc: "src/assets/La saga des gaffes.jpg",
    title: "La saga des gaffes",
    fileLink: "./14.cbr",
  },
  {
    imgSrc: "src/assets/Gaffe à Lagaffe !.jpg",
    title: "Gaffes à Lagaffe",
    fileLink: "./15.cbr",
  },
  { imgSrc: "", title: "N19", fileLink: "./16.cbr" },
  {
    imgSrc: "src/assets/Gaston et le Marsipulami.jpg",
    title: "HS Gaston et le marsupilami",
    fileLink: "./17.cbr",
  },
  {
    imgSrc: "src/assets/Le livre d'or -  Gaston Lagaffe.jpg",
    title: "Le livre d'or",
    fileLink: "./18.cbr",
  },
];

function ListBooks() {
  return (
    <div className="book-container">
      {bookData.map((book, index) => (
        <BookRow
          key={index}
          imgSrc={book.imgSrc}
          title={book.title}
          fileLink={book.fileLink}
        />
      ))}
    </div>
  );
}
<div class="rating-stars">
  <input type="radio" name="rating" id="rs0" />
  <label for="rs0"></label>
  <input type="radio" name="rating" id="rs1" />
  <label for="rs1"></label>
  <input type="radio" name="rating" id="rs2" />
  <label for="rs2"></label>
  <input type="radio" name="rating" id="rs3" checked />
  <label for="rs3"></label>
  <input type="radio" name="rating" id="rs4" />
  <label for="rs4"></label>
  <input type="radio" name="rating" id="rs5" />
  <label for="rs5"></label>
  <span class="number"></span>
</div>;

function cddisplay() {
  return (
    <div className="cddisplay">
      <p> Lien vers CDisplayEx</p>
      <p>Lien pour lire en bdr</p>
      <a
        href="https://www.cdisplayex.com/desktop/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Lien vers CDisplayEx
      </a>
    </div>
  );
}

export default ListBooks;
export { bookData };
