import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import imgCard from "../../img/img-card.webp";

export const Planet = (props) => {
    const params = useParams();
    const [detail, modifyDetail] = useState({});
    const [loading, modifyLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
          const res = await fetch(`https://www.swapi.tech/api/planets/${params.uid}`);
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
                        <div className="col"><h5>Terrain:</h5> {detail.properties.terrain}</div>
                        <div className="vr"></div>
                        <div className="col"><h5>Diameter:</h5> {detail.properties.diameter}</div>
                        <div className="vr"></div>
                        <div className="col"><h5>Rotation period:</h5> {detail.properties.rotation_period}</div>
                        <div className="vr"></div>
                        <div className="col"><h5>Orbital period:</h5> {detail.properties.orbital_period}</div>
                        <div className="vr"></div>
                        <div className="col"><h5>Gravity:</h5> {detail.properties.gravity}</div>
                        <div className="vr"></div>
                        <div className="col"><h5>Climate:</h5> {detail.properties.climate}</div>
                        <div className="vr"></div>
                        <div className="col"><h5>Surface_water:</h5> {detail.properties.surface_water}</div>
                    </div>
                </div>
            </div>
        )
}