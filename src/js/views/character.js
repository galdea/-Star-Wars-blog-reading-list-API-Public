import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import imgCard from "../../img/img-card.webp";

export const Character = (props) => {
    const params = useParams();
    const [detail, modifyDetail] = useState({});
    const [loading, modifyLoading] = useState(true);

useEffect(() => {
  async function fetchData() {
    const res = await fetch(`https://www.swapi.tech/api/people/${params.uid}`);
    const data = await res.json();
    console.log({ detail: data});
    modifyDetail(data.result);
    modifyLoading(false);
  }
  fetchData();
}, [params.uid]);


    if (loading) {
        return <div className="d-flex justify-content-center">
                    <div className="spinner-grow text-warning" role="status">
                    </div>
                </div>
    }
    
    return (
        <div>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={imgCard} className="img-fluid rounded-start"/>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h2 className="card-title itemTitle">{detail.properties.name}</h2>
                                     </div>
                    </div>
                </div>
            </div>
                <div className="container text-center">
                    <div className="row">
                    <div className="col"><h5>Height:</h5> {detail.properties.height}</div>
                    <div className="vr"></div>
                    <div className="col"><h5>Mass:</h5> {detail.properties.mass}</div>
                    <div className="vr"></div>
                    <div className="col"><h5>Hair color:</h5> {detail.properties.hair_color}</div>
                    <div className="vr"></div>
                    <div className="col"><h5>Skin color:</h5> {detail.properties.skin_color}</div>
                    <div className="vr"></div>
                    <div className="col"><h5>Birth year:</h5> {detail.properties.birth_year}</div>
                    <div className="vr"></div>
                    <div className="col"><h5>Gender:</h5> {detail.properties.gender}</div>
                </div>
            </div>
        </div>
    )
}