import React from "react";


function Card({
  name,
  email,
  phone,
  company,
  website,
  street,
  suite,
  city,
  zipCode
}) {
  return (
    <div>
      <div className="container " style={{ marginTop: "25px" }}>
        <div
          className="card mb-3 rounded-0 shadow bg-body rounded border-top-0 "
          style={{ maxWidth: "100rem" }}
        >
          <div className="row g-4">
            <div className="col-md-3 mb-3" style={{ width: "15rem" }}>
              <img
                src={`https://avatars.dicebear.com/v2/avataaars/{${name}}.svg?options[mood][]=happy`}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h2 className="card-title pb-3">{name}</h2>
                <p className="card-text m-1">
                  <strong>Email:</strong> {email}
                </p>
                <p className="card-text m-1">
                  <strong>Phone:</strong> {phone}
                </p>
                <p className="card-text m-1">
                  <strong>company:</strong> {company}
                </p>
                <p className="card-text m-1">
                  <strong>Website:</strong> {website}
                </p>
                <p className="card-text m-1">
                  <strong>Address:</strong> {street}, {suite}, {city}, {zipCode}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
