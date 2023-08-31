function BookRow({ title, fileLink }) {
  const handleDownload = () => {
    window.location.href = fileLink;
  };

  return (
    <tr>
      <td>{title}</td>
      <td>
        <button onClick={handleDownload}>Download File</button>
      </td>
    </tr>
  );
}
const bookData = [
  { title: "Gaffes et Gadgets", fileLink: "./00.cbr" },
  { title: "Gala de gaffe a gogo", fileLink: "./01.cbr" },
  { title: "Le bureau des gaffes en gros", fileLink: "./02.cbr" },
  { title: "Gare au gaffes du gars gonflé", fileLink: "./03.cbr" },
  { title: "en direct de lagaffe", fileLink: "./04.cbr" },
  { title: "Le lourd passé de lagaffe", fileLink: "./05.cbr" },
  { title: "des gaffes et des degats", fileLink: "./06.cbr" },
  { title: "un gaffeur sachant gaffer", fileLink: "./07.cbr" },
  { title: "lagaffe nous gate", fileLink: "./08.cbr" },
  { title: "le cas lagaffe", fileLink: "./09.cbr" },
  { title: "le geant de la gaffe", fileLink: "./10.cbr" },
  { title: "gaffes, bevues et boulettes", fileLink: "./11.cbr" },
  { title: "le gang des gaffeurs", fileLink: "./12.cbr" },
  { title: "lagaffe merite des baffes", fileLink: "./13.cbr" },
  { title: "la saga des gaffes", fileLink: "./14.cbr" },
  { title: "Gaffes a lagaffe", fileLink: "./15.cbr" },
  { title: "N19", fileLink: "./16.cbr" },
  { title: "HS gaston et le marsupilami", fileLink: "./17.cbr" },
  { title: "le livre d'or", fileLink: "./18.cbr" },
];

function ListBooks() {
  return (
    <div>
      <table>
        <tbody>
          {bookData.map((book, index) => (
            <BookRow key={index} title={book.title} fileLink={book.fileLink} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListBooks;
export { bookData };
