import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    const response = await fetch(
        "https://www.hpb.health.gov.lk/api/get-current-statistical"
    );
    const data = await response.json();
    setDatas(data.data);
  };

  return (
      <div className="App">
        <div>
          <h1>COVID-19 Situation Report</h1>
          <h3>{datas.update_date_time}</h3>
          <h2 className="datas">
            Total Confirmed Cases:
            <div className="values">{datas.local_total_cases}</div>
          </h2>
          <h2 className="datas">
            Active Cases:
            <div className="values">
              {datas.local_total_cases - datas.local_recovered}
            </div>
          </h2>
          <h2 className="datas">
            New Cases:<div className="values">{datas.local_new_cases}</div>
          </h2>
          <h2 className="datas">
            Total number of individuals in hospitals:
            <div className="values">
              {datas.local_total_number_of_individuals_in_hospitals}
            </div>
          </h2>
          <h2 className="datas">
            Recovered Discharged:{" "}
            <div className="values">{datas.local_recovered}</div>
          </h2>
          <h2 className="datas">
            Deaths: <div className="values">{datas.local_deaths}</div>
          </h2>
        </div>

        <footer>
          Developed by <a href="https://github.com/Powsikan">K.Powsikan</a> @2020{" "}
        </footer>
      </div>
  );
}

export default App;
