import React from "react";

interface Arg1Props {
  backgroundUrl: string;
  imageUrl: string;
  titulo?: string;
  subtitulo: string;
  texto: string;
  inverter?: boolean;
}

const Arg1: React.FC<Arg1Props> = ({
  backgroundUrl,
  imageUrl,
  titulo,
  subtitulo,
  texto,
  inverter,
}) => {
  return (
    <section
      className="arg1-container"
      style={{ backgroundImage: `url(${backgroundUrl})` }}
    >
      {titulo && <h2 className="arg1-title">{titulo}</h2>}
      <div className="arg1-row">
        {inverter ? (
          <>
            <div className="arg1-text">
              <h2 className="arg1-title">{subtitulo}</h2>

              <p className="arg-texto">{texto}</p>
            </div>
            <div className="arg1-image">
              <img src={imageUrl} alt="Ilustração" />
            </div>
          </>
        ) : (
          <>
            <div className="arg1-image">
              <img src={imageUrl} alt="Ilustração" />
            </div>
            <div className="arg1-text">
              <h2 className="arg1-title">{subtitulo}</h2>
              <p className="arg-texto">{texto}</p>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Arg1;
