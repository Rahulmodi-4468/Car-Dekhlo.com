import React, { useState } from "react";
import "./styles.css";

var carDictionary = {
  Maruti_Suzuki: [
    {
      model: "Swift",
      desc: "Hello world"
    },
    {
      model: "Vitara Brezza"
    },
    {
      model: "Ertiga"
    },
    {
      model: "Baleno"
    }
  ],
  Hyundai: [
    {
      model: "i20"
    },
    {
      model: "Creta"
    },
    {
      model: "Tucson"
    },
    {
      model: "Elantra"
    },
    {
      model: "Kona"
    }
  ],
  Kia: [
    {
      model: "Seltos"
    },
    {
      model: "Sonet"
    },
    {
      model: "Carnival"
    }
  ],
  Honda: [
    {
      model: "Honda City"
    },
    {
      model: "Amaze"
    },
    {
      model: "WR-V"
    },
    {
      model: "Jazz"
    }
  ],
  BMW: [
    {
      model: "X5"
    },
    {
      model: "3 Series"
    },
    {
      model: " 6"
    },
    {
      model: "5 Series"
    },
    {
      model: "X3"
    },
    {
      model: "X1"
    }
  ],
  Audi: [
    {
      model: "A4"
    },
    {
      model: "A6"
    },
    {
      model: "Q2"
    },
    {
      model: "Q8"
    },
    {
      model: " S5"
    },
    {
      model: " RS5"
    },
    {
      model: " e-tron GT"
    }
  ]
};

var Keys = Object.keys(carDictionary);
export default function App() {
  var [carlist, setcarlist] = useState("Maruti_Suzuki");

  function displayResult(item) {
    setcarlist(item);
  }

  return (
    <div className="App">
      <h1>Car🚗dekhlo.com</h1>
      <h3>Checkout Latest Models of Car</h3>
      <div className="btnDiv">
        {Keys.map((value) => {
          return <button onClick={() => displayResult(value)}>{value}</button>;
        })}
      </div>

      <hr width="570px" style={{ color: "grey", border: "1px solid" }} />

      <div className="list-Div">
        <ul style={{ paddingInlineStart: "0" }}>
          {carDictionary[carlist].map((result) => (
            <li
              key={result.model}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #9CA3AF",
                width: "80%",
                fontWeight: "bolder",
                borderRadius: "0.5rem",
                margin: "1rem auto"
              }}
            >
              <div style={{ fontSize: "1.5rem", textAlign: "center" }}>
                {result.model}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
