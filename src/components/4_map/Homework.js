export const Homework = ({ hdb }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "100px 150px",
          width: "100%",
          backgroundColor: "darkgray",
          boxSizing: "border-box",
        }}
      >
        {hdb.map((idol) => (
          <a
            href={idol.hpage}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <div
              style={{
                width: "500px",
                height: "550px",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "400px",
                  backgroundImage: `url(${idol.Himg})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></div>
              <div
                style={{
                  width: "100%",
                  height: "150px",
                  backgroundColor: "gray",
                  padding: "20px",
                  boxSizing: "border-box",
                }}
              >
                <h3
                  style={{
                    marginBottom: "10px",
                    fontSize: "20px",
                    color: "white",
                  }}
                >
                  {idol.title}
                </h3>
                <p style={{ color: "white" }}>
                  {idol.text.slice(0, 50) + "..."}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  );
};
