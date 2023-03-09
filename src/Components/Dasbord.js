import React, { useEffect, useState } from "react";
import "../App.css";
import videoBg from "../Asset/videoBg.mp4";

import { supabase } from "../SupaClient";

const Dasbord = () => {
  const [testimoni, setTestimoni] = useState([]);

  async function getTestimoni() {
    const { data } = await supabase.from("testimoni").select();

    console.log("Data:", data);
    setTestimoni(data);
  }

  useEffect(() => {
    getTestimoni();
  }, []);

  return (
    <>
      <div className="main">
        <div className="overlay"></div>
        <video src={videoBg} autoPlay loop muted />
        <div className="content">
          <h1 className="text-8xl">Welcome</h1>
          <p>to THE PORTAL GAME</p>
        </div>
      </div>
      <section id="testimoni" className="px-16 pt-32 pb-5">
        <h2 className="text-white font font-semibold text-4xl">Testimoni</h2>

        <div className="py-4 flex flex-wrap">
          {testimoni.map((tes) => (
            <div className="w-96 h-64 bg-slate-900 text-white rounded-md">
              <h2>{tes.nama_lengkap}</h2>
              <h2>{tes.decription}</h2>
              <h2>{tes.rating}</h2>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Dasbord;
