const Star = ({ stars, reviews }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    debugger;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <i className="bi bi-star-fill text-warning" />
        ) : stars >= number ? (
          <i className="bi bi-star-half text-warning" />
        ) : (
          <i className="bi bi-star text-warning" />
        )}
      </span>
    );
  });

  return (
    <div>
      <p>
        {" "}
        {ratingStar}{" "}
        <span className="text-secondary" style={{ fontSize: "small" }}>
          ({reviews} customer reviews)
        </span>
      </p>
    </div>
  );
};

export default Star;
