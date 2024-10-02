import { useState } from "react";
import { useNavigate } from "react-router-dom";
import img from "../../assets/2.png";
export default function Card() {
  const [shado, setShado] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="cards">
      <div
        style={{ position: "relative", textAlign: "right", cursor: "pointer" }}
        className={`card ${shado ? "shadow-lg" : ""}`}
        onMouseEnter={() => setShado(true)}
        onMouseLeave={() => setShado(true)}
        onClick={() => navigate("/card-details")}
      >
        <img className="card-img-top" src={img} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">
            شقه سكنيه 150 متر للبيع كاش بمحافظه المنيا
          </h5>
          <table style={{ color: "#777" }} className="my-4">
            <tbody>
              <tr>
                <td>عدد الحمامات</td>
                <td>عدد الغرف</td>
                <td>المساحه</td>
                <td>الموقع</td>
              </tr>
              <tr>
                <td>
                  3 <i className="fa-solid fa-city mx-2"></i>
                </td>
                <td>
                  2 <i className="fa-solid fa-bed mx-2"></i>
                </td>
                <td>
                  180 <i className="fa-solid fa-house mx-2"></i>
                </td>
                <td>
                  العدوه <i className="fa-solid fa-location-dot mx-2"></i>
                </td>
              </tr>
            </tbody>
          </table>
          <h3> 3,600,800 جنيه</h3>
        </div>
        <i className="fa-solid fa-heart fav"></i>
        <button className="buy">للايجار </button>
      </div>
      <div
        style={{ position: "relative", textAlign: "right", cursor: "pointer" }}
        className={`card ${shado ? "shadow-lg" : ""}`}
        onMouseEnter={() => setShado(true)}
        onMouseLeave={() => setShado(true)}
        onClick={() => navigate("/card-details")}
      >
        <img className="card-img-top" src={img} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">
            شقه سكنيه 150 متر للبيع كاش بمحافظه المنيا
          </h5>
          <table style={{ color: "#777" }} className="my-4">
            <tbody>
              <tr>
                <td>عدد الحمامات</td>
                <td>عدد الغرف</td>
                <td>المساحه</td>
                <td>الموقع</td>
              </tr>
              <tr>
                <td>
                  3 <i className="fa-solid fa-city mx-2"></i>
                </td>
                <td>
                  2 <i className="fa-solid fa-bed mx-2"></i>
                </td>
                <td>
                  180 <i className="fa-solid fa-house mx-2"></i>
                </td>
                <td>
                  العدوه <i className="fa-solid fa-location-dot mx-2"></i>
                </td>
              </tr>
            </tbody>
          </table>
          <h3> 3,600,800 جنيه</h3>
        </div>
        <i className="fa-solid fa-heart fav"></i>
        <button className="buy">للايجار </button>
      </div>
      <div
        style={{ position: "relative", textAlign: "right", cursor: "pointer" }}
        className={`card ${shado ? "shadow-lg" : ""}`}
        onMouseEnter={() => setShado(true)}
        onMouseLeave={() => setShado(true)}
        onClick={() => navigate("/card-details")}
      >
        <img className="card-img-top" src={img} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">
            شقه سكنيه 150 متر للبيع كاش بمحافظه المنيا
          </h5>
          <table style={{ color: "#777" }} className="my-4">
            <tbody>
              <tr>
                <td>عدد الحمامات</td>
                <td>عدد الغرف</td>
                <td>المساحه</td>
                <td>الموقع</td>
              </tr>
              <tr>
                <td>
                  3 <i className="fa-solid fa-city mx-2"></i>
                </td>
                <td>
                  2 <i className="fa-solid fa-bed mx-2"></i>
                </td>
                <td>
                  180 <i className="fa-solid fa-house mx-2"></i>
                </td>
                <td>
                  العدوه <i className="fa-solid fa-location-dot mx-2"></i>
                </td>
              </tr>
            </tbody>
          </table>
          <h3> 3,600,800 جنيه</h3>
        </div>
        <i className="fa-solid fa-heart fav"></i>
        <button className="buy">للايجار </button>
      </div>
      <div
        style={{ position: "relative", textAlign: "right", cursor: "pointer" }}
        className={`card ${shado ? "shadow-lg" : ""}`}
        onMouseEnter={() => setShado(true)}
        onMouseLeave={() => setShado(true)}
        onClick={() => navigate("/card-details")}
      >
        <img className="card-img-top" src={img} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">
            شقه سكنيه 150 متر للبيع كاش بمحافظه المنيا
          </h5>
          <table style={{ color: "#777" }} className="my-4">
            <tbody>
              <tr>
                <td>عدد الحمامات</td>
                <td>عدد الغرف</td>
                <td>المساحه</td>
                <td>الموقع</td>
              </tr>
              <tr>
                <td>
                  3 <i className="fa-solid fa-city mx-2"></i>
                </td>
                <td>
                  2 <i className="fa-solid fa-bed mx-2"></i>
                </td>
                <td>
                  180 <i className="fa-solid fa-house mx-2"></i>
                </td>
                <td>
                  العدوه <i className="fa-solid fa-location-dot mx-2"></i>
                </td>
              </tr>
            </tbody>
          </table>
          <h3> 3,600,800 جنيه</h3>
        </div>
        <i className="fa-solid fa-heart fav"></i>
        <button className="buy">للايجار </button>
      </div>
      <div
        style={{ position: "relative", textAlign: "right", cursor: "pointer" }}
        className={`card ${shado ? "shadow-lg" : ""}`}
        onMouseEnter={() => setShado(true)}
        onMouseLeave={() => setShado(true)}
      >
        <img className="card-img-top" src={img} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">
            شقه سكنيه 150 متر للبيع كاش بمحافظه المنيا
          </h5>
          <table style={{ color: "#777" }} className="my-4">
            <tbody>
              <tr>
                <td>عدد الحمامات</td>
                <td>عدد الغرف</td>
                <td>المساحه</td>
                <td>الموقع</td>
              </tr>
              <tr>
                <td>
                  3 <i className="fa-solid fa-city mx-2"></i>
                </td>
                <td>
                  2 <i className="fa-solid fa-bed mx-2"></i>
                </td>
                <td>
                  180 <i className="fa-solid fa-house mx-2"></i>
                </td>
                <td>
                  العدوه <i className="fa-solid fa-location-dot mx-2"></i>
                </td>
              </tr>
            </tbody>
          </table>
          <h3> 3,600,800 جنيه</h3>
        </div>
        <i className="fa-solid fa-heart fav"></i>
        <button className="buy">للايجار </button>
      </div>
      <div
        style={{ position: "relative", textAlign: "right", cursor: "pointer" }}
        className={`card ${shado ? "shadow-lg" : ""}`}
        onMouseEnter={() => setShado(true)}
        onMouseLeave={() => setShado(true)}
      >
        <img className="card-img-top" src={img} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">
            شقه سكنيه 150 متر للبيع كاش بمحافظه المنيا
          </h5>
          <table style={{ color: "#777" }} className="my-4">
            <tbody>
              <tr>
                <td>عدد الحمامات</td>
                <td>عدد الغرف</td>
                <td>المساحه</td>
                <td>الموقع</td>
              </tr>
              <tr>
                <td>
                  3 <i className="fa-solid fa-city mx-2"></i>
                </td>
                <td>
                  2 <i className="fa-solid fa-bed mx-2"></i>
                </td>
                <td>
                  180 <i className="fa-solid fa-house mx-2"></i>
                </td>
                <td>
                  العدوه <i className="fa-solid fa-location-dot mx-2"></i>
                </td>
              </tr>
            </tbody>
          </table>
          <h3> 3,600,800 جنيه</h3>
        </div>
        <i className="fa-solid fa-heart fav"></i>
        <button className="buy">للايجار </button>
      </div>
      <div
        style={{ position: "relative", textAlign: "right", cursor: "pointer" }}
        className={`card ${shado ? "shadow-lg" : ""}`}
        onMouseEnter={() => setShado(true)}
        onMouseLeave={() => setShado(true)}
      >
        <img className="card-img-top" src={img} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">
            شقه سكنيه 150 متر للبيع كاش بمحافظه المنيا
          </h5>
          <table style={{ color: "#777" }} className="my-4">
            <tbody>
              <tr>
                <td>عدد الحمامات</td>
                <td>عدد الغرف</td>
                <td>المساحه</td>
                <td>الموقع</td>
              </tr>
              <tr>
                <td>
                  3 <i className="fa-solid fa-city mx-2"></i>
                </td>
                <td>
                  2 <i className="fa-solid fa-bed mx-2"></i>
                </td>
                <td>
                  180 <i className="fa-solid fa-house mx-2"></i>
                </td>
                <td>
                  العدوه <i className="fa-solid fa-location-dot mx-2"></i>
                </td>
              </tr>
            </tbody>
          </table>
          <h3> 3,600,800 جنيه</h3>
        </div>
        <i className="fa-solid fa-heart fav"></i>
        <button className="buy">للايجار </button>
      </div>
      <div
        style={{ position: "relative", textAlign: "right", cursor: "pointer" }}
        className={`card ${shado ? "shadow-lg" : ""}`}
        onMouseEnter={() => setShado(true)}
        onMouseLeave={() => setShado(true)}
      >
        <img className="card-img-top" src={img} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">
            شقه سكنيه 150 متر للبيع كاش بمحافظه المنيا
          </h5>
          <table style={{ color: "#777" }} className="my-4">
            <tbody>
              <tr>
                <td>عدد الحمامات</td>
                <td>عدد الغرف</td>
                <td>المساحه</td>
                <td>الموقع</td>
              </tr>
              <tr>
                <td>
                  3 <i className="fa-solid fa-city mx-2"></i>
                </td>
                <td>
                  2 <i className="fa-solid fa-bed mx-2"></i>
                </td>
                <td>
                  180 <i className="fa-solid fa-house mx-2"></i>
                </td>
                <td>
                  العدوه <i className="fa-solid fa-location-dot mx-2"></i>
                </td>
              </tr>
            </tbody>
          </table>
          <h3> 3,600,800 جنيه</h3>
        </div>
        <i className="fa-solid fa-heart fav"></i>
        <button className="buy">للايجار </button>
      </div>
      <div
        style={{ position: "relative", textAlign: "right", cursor: "pointer" }}
        className={`card ${shado ? "shadow-lg" : ""}`}
        onMouseEnter={() => setShado(true)}
        onMouseLeave={() => setShado(true)}
      >
        <img className="card-img-top" src={img} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">
            شقه سكنيه 150 متر للبيع كاش بمحافظه المنيا
          </h5>
          <table style={{ color: "#777" }} className="my-4">
            <tbody>
              <tr>
                <td>عدد الحمامات</td>
                <td>عدد الغرف</td>
                <td>المساحه</td>
                <td>الموقع</td>
              </tr>
              <tr>
                <td>
                  3 <i className="fa-solid fa-city mx-2"></i>
                </td>
                <td>
                  2 <i className="fa-solid fa-bed mx-2"></i>
                </td>
                <td>
                  180 <i className="fa-solid fa-house mx-2"></i>
                </td>
                <td>
                  العدوه <i className="fa-solid fa-location-dot mx-2"></i>
                </td>
              </tr>
            </tbody>
          </table>
          <h3> 3,600,800 جنيه</h3>
        </div>
        <i className="fa-solid fa-heart fav"></i>
        <button className="buy">للايجار </button>
      </div>
      <div
        style={{ position: "relative", textAlign: "right", cursor: "pointer" }}
        className={`card ${shado ? "shadow-lg" : ""}`}
        onMouseEnter={() => setShado(true)}
        onMouseLeave={() => setShado(true)}
      >
        <img className="card-img-top" src={img} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">
            شقه سكنيه 150 متر للبيع كاش بمحافظه المنيا
          </h5>
          <table style={{ color: "#777" }} className="my-4">
            <tbody>
              <tr>
                <td>عدد الحمامات</td>
                <td>عدد الغرف</td>
                <td>المساحه</td>
                <td>الموقع</td>
              </tr>
              <tr>
                <td>
                  3 <i className="fa-solid fa-city mx-2"></i>
                </td>
                <td>
                  2 <i className="fa-solid fa-bed mx-2"></i>
                </td>
                <td>
                  180 <i className="fa-solid fa-house mx-2"></i>
                </td>
                <td>
                  العدوه <i className="fa-solid fa-location-dot mx-2"></i>
                </td>
              </tr>
            </tbody>
          </table>
          <h3> 3,600,800 جنيه</h3>
        </div>
        <i className="fa-solid fa-heart fav"></i>
        <button className="buy">للايجار </button>
      </div>
      <div
        style={{ position: "relative", textAlign: "right", cursor: "pointer" }}
        className={`card ${shado ? "shadow-lg" : ""}`}
        onMouseEnter={() => setShado(true)}
        onMouseLeave={() => setShado(true)}
      >
        <img className="card-img-top" src={img} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">
            شقه سكنيه 150 متر للبيع كاش بمحافظه المنيا
          </h5>
          <table style={{ color: "#777" }} className="my-4">
            <tbody>
              <tr>
                <td>عدد الحمامات</td>
                <td>عدد الغرف</td>
                <td>المساحه</td>
                <td>الموقع</td>
              </tr>
              <tr>
                <td>
                  3 <i className="fa-solid fa-city mx-2"></i>
                </td>
                <td>
                  2 <i className="fa-solid fa-bed mx-2"></i>
                </td>
                <td>
                  180 <i className="fa-solid fa-house mx-2"></i>
                </td>
                <td>
                  العدوه <i className="fa-solid fa-location-dot mx-2"></i>
                </td>
              </tr>
            </tbody>
          </table>
          <h3> 3,600,800 جنيه</h3>
        </div>
        <i className="fa-solid fa-heart fav"></i>
        <button className="buy">للايجار </button>
      </div>
      <div
        style={{ position: "relative", textAlign: "right", cursor: "pointer" }}
        className={`card ${shado ? "shadow-lg" : ""}`}
        onMouseEnter={() => setShado(true)}
        onMouseLeave={() => setShado(true)}
      >
        <img className="card-img-top" src={img} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">
            شقه سكنيه 150 متر للبيع كاش بمحافظه المنيا
          </h5>
          <table style={{ color: "#777" }} className="my-4">
            <tbody>
              <tr>
                <td>عدد الحمامات</td>
                <td>عدد الغرف</td>
                <td>المساحه</td>
                <td>الموقع</td>
              </tr>
              <tr>
                <td>
                  3 <i className="fa-solid fa-city mx-2"></i>
                </td>
                <td>
                  2 <i className="fa-solid fa-bed mx-2"></i>
                </td>
                <td>
                  180 <i className="fa-solid fa-house mx-2"></i>
                </td>
                <td>
                  العدوه <i className="fa-solid fa-location-dot mx-2"></i>
                </td>
              </tr>
            </tbody>
          </table>
          <h3> 3,600,800 جنيه</h3>
        </div>
        <i className="fa-solid fa-heart fav"></i>
        <button className="buy">للايجار </button>
      </div>
      <div
        style={{ position: "relative", textAlign: "right", cursor: "pointer" }}
        className={`card ${shado ? "shadow-lg" : ""}`}
        onMouseEnter={() => setShado(true)}
        onMouseLeave={() => setShado(true)}
      >
        <img className="card-img-top" src={img} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">
            شقه سكنيه 150 متر للبيع كاش بمحافظه المنيا
          </h5>
          <table style={{ color: "#777" }} className="my-4">
            <tbody>
              <tr>
                <td>عدد الحمامات</td>
                <td>عدد الغرف</td>
                <td>المساحه</td>
                <td>الموقع</td>
              </tr>
              <tr>
                <td>
                  3 <i className="fa-solid fa-city mx-2"></i>
                </td>
                <td>
                  2 <i className="fa-solid fa-bed mx-2"></i>
                </td>
                <td>
                  180 <i className="fa-solid fa-house mx-2"></i>
                </td>
                <td>
                  العدوه <i className="fa-solid fa-location-dot mx-2"></i>
                </td>
              </tr>
            </tbody>
          </table>
          <h3> 3,600,800 جنيه</h3>
        </div>
        <i className="fa-solid fa-heart fav"></i>
        <button className="buy">للايجار </button>
      </div>
      <div
        style={{ position: "relative", textAlign: "right", cursor: "pointer" }}
        className={`card ${shado ? "shadow-lg" : ""}`}
        onMouseEnter={() => setShado(true)}
        onMouseLeave={() => setShado(true)}
      >
        <img className="card-img-top" src={img} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">
            شقه سكنيه 150 متر للبيع كاش بمحافظه المنيا
          </h5>
          <table style={{ color: "#777" }} className="my-4">
            <tbody>
              <tr>
                <td>عدد الحمامات</td>
                <td>عدد الغرف</td>
                <td>المساحه</td>
                <td>الموقع</td>
              </tr>
              <tr>
                <td>
                  3 <i className="fa-solid fa-city mx-2"></i>
                </td>
                <td>
                  2 <i className="fa-solid fa-bed mx-2"></i>
                </td>
                <td>
                  180 <i className="fa-solid fa-house mx-2"></i>
                </td>
                <td>
                  العدوه <i className="fa-solid fa-location-dot mx-2"></i>
                </td>
              </tr>
            </tbody>
          </table>
          <h3> 3,600,800 جنيه</h3>
        </div>
        <i className="fa-solid fa-heart fav"></i>
        <button className="buy">للايجار </button>
      </div>
    </div>
  );
}
