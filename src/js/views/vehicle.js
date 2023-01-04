import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import imgCard from "../../img/img-card.webp";

export const Vehicle = (props) => {
    const params = useParams();
    const [detail, modifyDetail] = useState({});
    const [loading, modifyLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
          const res = await fetch(`https://www.swapi.tech/api/vehicles/${params.uid}`);
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
                    <div className="col"><h5>Model:</h5> {detail.properties.model}</div>
                    <div className="vr"></div>
                    <div className="col"><h5>Vehicle class:</h5> {detail.properties.vehicle_class}</div>
                    <div className="vr"></div>
                    <div className="col"><h5>Manufacturer:</h5> {detail.properties.manufacturer}</div>
                    <div className="vr"></div>
                    <div className="col"><h5>Cost in credits:</h5> {detail.properties.cost_in_credits}</div>
                    <div className="vr"></div>
                    <div className="col"><h5>Length:</h5> {detail.properties.length}</div>
                    <div className="vr"></div>
                    <div className="col"><h5>Passengers:</h5> {detail.properties.passengers}</div>
                    <div className="vr"></div>
                    <div className="col"><h5>Max atmosphering speed:</h5> {detail.properties.max_atmosphering_speed}</div>
                    <div className="vr"></div>
                    <div className="col"><h5>Cargo capacity:</h5> {detail.properties.cargo_capacity}</div>
                </div>
            </div>
        </div>
    )
}