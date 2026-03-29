function Home() {
  return (
    <div
      style={{
        margin: 0,
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        //background: "linear-gradient(135deg, #0e0c3d, #9333ea)",
        color: "#122142",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          textAlign: "center",
          background: "rgba(48, 43, 43, 0.1)",
          padding: "80px",
          borderRadius: "16px",
        }}
      >
        <h1>🚧 Em Construção</h1>
        <p>Estamos trabalhando para trazer algo incrível para você.</p>
      </div>
    </div>
  );
}

function teste() {
  console.log("teste");
}

export default Home;
