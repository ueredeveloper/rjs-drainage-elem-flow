import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import { ElemFlow } from './elem-flow';

function App() {

  const [user, setUser] = useState({
    "us_id": 0,
    "us_nome": "",
    "us_cpf_cnpj": "",
    "us_doc_id": 0,
    "doc_end": 0,
    "doc_sei": "",
    "proc_sei": "",
    "end_id": 0,
    "end_log": "",
    "int_latitude": "",
    "int_longitude": "",
    "finalidades": [
      {
        "int_id": 492,
        "end_id": 407,
        "end_Log": "Núcleo Rural Alexandre Gusmão, Fazenda engenho Queimado, Chácara 4",
        "int_latitude": -15.731584,
        "int_longitude": -48.086091,
        "janeiro": {
          "vazao_lh": "4000",
          "vazao_dia": "80000",
          "mes": "31",
          "vazao_mh": "4",
          "tempo_h": "20",
          "vol_max_md": "80",
          "periodo_d": "31",
          "vol_mensal_mm": "2480"
        },
        "fevereiro": {
          "vazao_lh": "4000",
          "vazao_dia": "80000",
          "mes": "28",
          "vazao_mh": "4",
          "tempo_h": "20",
          "vol_max_md": "80",
          "periodo_d": "28",
          "vol_mensal_mm": "2240"
        },
        "marco": {
          "vazao_lh": "4000",
          "vazao_dia": "80000",
          "mes": "31",
          "vazao_mh": "4",
          "tempo_h": "20",
          "vol_max_md": "80",
          "periodo_d": "31",
          "vol_mensal_mm": "2480"
        },
        "abril": {
          "vazao_lh": "4000",
          "vazao_dia": "80000",
          "mes": "30",
          "vazao_mh": "4",
          "tempo_h": "20",
          "vol_max_md": "80",
          "periodo_d": "30",
          "vol_mensal_mm": "2400"
        },
        "maio": {
          "vazao_lh": "4000",
          "vazao_dia": "80000",
          "mes": "31",
          "vazao_mh": "4",
          "tempo_h": "20",
          "vol_max_md": "80",
          "periodo_d": "31",
          "vol_mensal_mm": "2480"
        },
        "junho": {
          "vazao_lh": "4000",
          "vazao_dia": "80000",
          "mes": "30",
          "vazao_mh": "4",
          "tempo_h": "20",
          "vol_max_md": "80",
          "periodo_d": "30",
          "vol_mensal_mm": "2400"
        },
        "julho": {
          "vazao_lh": "4000",
          "vazao_dia": "80000",
          "mes": "31",
          "vazao_mh": "4",
          "tempo_h": "20",
          "vol_max_md": "80",
          "periodo_d": "31",
          "vol_mensal_mm": "2480"
        },
        "agosto": {
          "vazao_lh": "4000",
          "vazao_dia": "80000",
          "mes": "31",
          "vazao_mh": "4",
          "tempo_h": "20",
          "vol_max_md": "80",
          "periodo_d": "31",
          "vol_mensal_mm": "2480"
        },
        "setembro": {
          "vazao_lh": "4000",
          "vazao_dia": "80000",
          "mes": "30",
          "vazao_mh": "4",
          "tempo_h": "20",
          "vol_max_md": "80",
          "periodo_d": "30",
          "vol_mensal_mm": "2400"
        },
        "outubro": {
          "vazao_lh": "4000",
          "vazao_dia": "80000",
          "mes": "31",
          "vazao_mh": "4",
          "tempo_h": "20",
          "vol_max_md": "80",
          "periodo_d": "31",
          "vol_mensal_mm": "2480"
        },
        "novembro": {
          "vazao_lh": "4000",
          "vazao_dia": "80000",
          "mes": "30",
          "vazao_mh": "4",
          "tempo_h": "20",
          "vol_max_md": "80",
          "periodo_d": "30",
          "vol_mensal_mm": "2400"
        },
        "dezembro": {
          "vazao_lh": "4000",
          "vazao_dia": "80000",
          "mes": "31",
          "vazao_mh": "4",
          "tempo_h": "20",
          "vol_max_md": "80",
          "periodo_d": "31",
          "vol_mensal_mm": "2480"
        }
      }
    ]
  })



  return (
    <div className="App">
      <ElemFlow finalidades={user.finalidades} />
    </div>
  );
}

export default App;
