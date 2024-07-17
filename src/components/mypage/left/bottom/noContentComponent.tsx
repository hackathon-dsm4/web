import styled from "styled-components";

export const NoContentComponent = ({ text }: { text: string }) => {
  return (
    <Container>
      <div>
        <Loader xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 -10 261 355">
          <g>
            <path d="M230.023 80.02l-.023.03v15.044l-11.96.006v20.75l-19.354 9.142V95.107l-9.93-.04v34.6l-19.417 9.254-.003-43.777-14.146-.016v50.414l-19.354 9.146.002-59.55-9.93.027v59.434l-19.508-9.212V95.15l-13.774-.13-.002 43.766-19.332-9.053V95.12l-9.97.045v29.893l-19.398-9.187V95.177l-11.983.006v15.03l-17.122-8.09 17.078-6.983V80.22L.286 95.257 0 95.12v188.953l123.418 58.308 7.543 3.56 7.542-3.56 123.42-58.306V95.12l-.233.11-31.667-15.06zm-.002 15.076l17.126 7.002-17.125 8.09zM15.083 118.93l108.336 51.177v155.59L15.082 274.52zm231.756 0v155.59l-108.336 51.177v-155.59z" />
            <Pen1 d="M68.26.058L31.934 51.22l.002 58.06H43.9V59.536h19.423v49.742h9.97V59.536H92.62v49.742h11.967V51.22l-1.105-1.554L68.262.058zm6.43 29.72l14.047 19.788H47.784L61.67 30.01l13.02-.23z" />
            <Pen2 d="M130.808 13.936L94.48 65.098l.002 58.058h11.964V73.414h19.424v49.742h9.97V73.414h19.327v49.742h11.967V65.098l-1.105-1.555-35.222-49.607zm6.427 29.72l14.05 19.787H110.33l13.886-19.556 13.02-.23z" />
            <Pen3 d="M193.684.083l-36.328 51.162.002 58.058h11.965V59.56h19.424v49.743h9.97V59.56h19.326v49.743h11.967V51.245l-1.105-1.555L193.685.083zm6.428 29.72l14.05 19.787h-40.955l13.885-19.556 13.02-.23z" />
          </g>
        </Loader>
      </div>
      <NoContent>{text}</NoContent>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 86vh;
  gap: 28px;
`;

const NoContent = styled.span`
  font-size: 24px;
  font-weight: 800;
  color: gray;
`;

const Pen1 = styled.path`
  animation: pen1 4s infinite ease;

  @keyframes pen1 {
    0% {
      transform: translateY(0px);
    }

    15% {
      transform: translateY(-10px);
    }

    30% {
      transform: translateY(0px);
    }
  }
`;

const Pen2 = styled.path`
  animation: pen1 4s infinite ease;

  @keyframes pen2 {
    30% {
      transform: translateY(0px);
    }

    45% {
      transform: translateY(-10px);
    }

    60% {
      transform: translateY(0px);
    }
  }
`;

const Pen3 = styled.path`
  animation: pen1 4s infinite ease;

  @keyframes pen3 {
    60% {
      transform: translateY(0px);
    }

    75% {
      transform: translateY(-10px);
    }

    90% {
      transform: translateY(0px);
    }
  }
`;

const Loader = styled.svg`
  animation: pen1 4s infinite ease;

  @keyframes loaderColor {
    0% {
      fill: #513b56;
    }

    33% {
      fill: #348aa7;
    }

    66% {
      fill: #5dd39e;
    }

    100% {
      fill: #513b56;
    }
  }
`;
