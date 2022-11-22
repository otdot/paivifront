interface IDetails {
  division: string;
  supplier: string;
}

const Details = ({ division, supplier }: IDetails) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginBottom: "1rem",
      }}
    >
      <p>Division: {division}</p>
      <p>Supplier: {supplier}</p>
    </div>
  );
};

export default Details;
