import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import { ElemFlow } from './elem-flow';

function App() {

  const [user, setUser] = useState({

    "us_doc_id": 0,
    "doc_end": 0,
    "doc_sei": "",
    "proc_sei": "",
    "end_id": 0,
    "end_log": "",
    "int_latitude": "",
    "int_longitude": "",
    "demandas": { "int_id": 979, "end_id": 853, "end_log": "Núcleo Rural Santos Dumont, Rodovia DF 250, Km 20, Lote 50, ", "int_latitude": -15.726856, "int_longitude": -47.610109, "dt_demandas": { "demanda": [{ "vazao_lh": "15000", "vazao_dia": "300000", "mes": "31", "vazao_mh": "15", "tempo_h": "20", "vol_max_md": "300", "periodo_d": "31", "vol_mensal_mm": "9300" }, { "vazao_lh": "15000", "vazao_dia": "300000", "mes": "28", "vazao_mh": "15", "tempo_h": "20", "vol_max_md": "300", "periodo_d": "28", "vol_mensal_mm": "8400" }, { "vazao_lh": "15000", "vazao_dia": "300000", "mes": "31", "vazao_mh": "15", "tempo_h": "20", "vol_max_md": "300", "periodo_d": "31", "vol_mensal_mm": "9300" }, { "vazao_lh": "15000", "vazao_dia": "300000", "mes": "30", "vazao_mh": "15", "tempo_h": "20", "vol_max_md": "300", "periodo_d": "30", "vol_mensal_mm": "9000" }, { "vazao_lh": "15000", "vazao_dia": "300000", "mes": "31", "vazao_mh": "15", "tempo_h": "20", "vol_max_md": "300", "periodo_d": "31", "vol_mensal_mm": "9300" }, { "vazao_lh": "15000", "vazao_dia": "300000", "mes": "30", "vazao_mh": "15", "tempo_h": "20", "vol_max_md": "300", "periodo_d": "30", "vol_mensal_mm": "9000" }, { "vazao_lh": "15000", "vazao_dia": "300000", "mes": "31", "vazao_mh": "15", "tempo_h": "20", "vol_max_md": "300", "periodo_d": "31", "vol_mensal_mm": "9300" }, { "vazao_lh": "15000", "vazao_dia": "300000", "mes": "31", "vazao_mh": "15", "tempo_h": "20", "vol_max_md": "300", "periodo_d": "31", "vol_mensal_mm": "9300" }, { "vazao_lh": "15000", "vazao_dia": "300000", "mes": "30", "vazao_mh": "15", "tempo_h": "20", "vol_max_md": "300", "periodo_d": "30", "vol_mensal_mm": "9000" }, { "vazao_lh": "15000", "vazao_dia": "300000", "mes": "31", "vazao_mh": "15", "tempo_h": "20", "vol_max_md": "300", "periodo_d": "31", "vol_mensal_mm": "9300" }, { "vazao_lh": "15000", "vazao_dia": "300000", "mes": "30", "vazao_mh": "15", "tempo_h": "20", "vol_max_md": "300", "periodo_d": "30", "vol_mensal_mm": "9000" }, { "vazao_lh": "15000", "vazao_dia": "300000", "mes": "31", "vazao_mh": "15", "tempo_h": "20", "vol_max_md": "300", "periodo_d": "31", "vol_mensal_mm": "9300" }] } }

  })


  return (
    <div className="App">
      <ElemFlow demanda={user.demandas.dt_demandas.demanda} />
    </div>
  );
}

export default App;
