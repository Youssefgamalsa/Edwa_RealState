import img from "../../assets/2.png";
import img1 from "../../assets/image.jpg";
import img3 from "../../assets/2.png";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
export default function CardDetails() {
  return (
    <div className="cardDetails">
      <div className="caro">
        <Carousel data-bs-theme="dark" className="w-100">
          <Carousel.Item>
            <img className="d-block w-100" src={img} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img1} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img3} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="details row " >
        <div className="text col-lg-6 col-md-12 ">
          <h3>أراضي سكنية 2150م للبيع كاش بالعبور الجديدة القاهرة </h3>
          <h3 className="text-primary"> 34,000,000 جنيه </h3>
          <div className="buying">
            <button> للبيع </button>
            <button> يوجد تقسيط </button>
            <p> رقم العقار 2000</p>
          </div>

          <table
            style={{ color: "#777", marginBottom: "30px" }}
            className="my-4"
          >
            <tbody>
              <tr>
                <td>الموقع</td>
                <td>المساحه</td>
                <td>عدد الحمامات</td>
                <td>عدد الغرف</td>
              </tr>
              <tr>
                <td>العدوه</td>
                <td>180 متر</td>
                <td>3</td>
                <td>2</td>
              </tr>
            </tbody>
          </table>
          <h3> الوصف </h3>
          <p className="text-dark my-2">
            شقتك بتشوف النادي الاهلي الحي الرابع بيت الوطن التجمع الخامس 150م 3
            غرف دور متكرر مقدم 800الف بس 😍 اجمالي الشقه 😍 تقسيط علي 5 سنوات
            بدون فوائد
          </p>
          <h3> المرافق </h3>
          <div className="Facilities">
            <h3>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <i className="fa-solid fa-city mx-2"></i>
                    </td>
                    <td>عدد الغرف</td>
                    <td> 3 </td>
                  </tr>
                  <tr>
                    <td>
                      <i className="fa-solid fa-city mx-2"></i>
                    </td>
                    <td>عدد الحمامات</td>
                    <td> 1 </td>
                  </tr>
                  <tr>
                    <td>
                      <i className="fa-solid fa-city mx-2"></i>
                    </td>
                    <td> عدد الغرف الرئيسية</td>
                    <td> 3 </td>
                  </tr>
                  <tr>
                    <td>
                      <i className="fa-solid fa-city mx-2"></i>
                    </td>
                    <td>عدد المطابخ</td>
                    <td> 1 </td>
                  </tr>
                  <tr>
                    <td>
                      <i className="fa-solid fa-city mx-2"></i>
                    </td>
                    <td>عدد الصالات</td>
                    <td> 1 </td>
                  </tr>
                  <tr>
                    <td>
                      <i className="fa-solid fa-city mx-2"></i>
                    </td>
                    <td>عدد الطابق</td>
                    <td> 9 </td>
                  </tr>
                  <tr>
                    <td>
                      <i className="fa-solid fa-city mx-2"></i>
                    </td>
                    <td>عدد الطابق</td>
                  </tr>
                </tbody>
              </table>
            </h3>
          </div>
        </div>
        <div className="person col-lg-6 col-md-12">
          <div className="card mb-3 p-4 pb-4" style={{ maxWidth: "400px" , margin:"auto"}}>
            <div className="row g-2">
              <div className="col-md-4">
                <img
                  src={img1}
                  className="img-fluid rounded-start"
                  alt="..."
                  style={{ Width: "80px", Height: "80px" }}
                />
              </div>
              <div className="col-md-8 mb-1">
                <div className="card-body">
                  <h5 className="card-title"> Youssef Gamal </h5>
                  <p className="card-text">تاريخ النشر : 2024/10/02</p>
                </div>
              </div>
              <button className="phone btn btn-outline-primary w-50 mb-2">
                01125683265
                <i className="fa-solid fa-phone mx-2"></i>
              </button>
              <button className="phone btn btn-success w-100 mb-3  ">
                تواصل مع واتساب
                <i className="fa-brands fa-whatsapp mx-2"></i>
              </button>
              <button className="phone btn btn-danger ">
                راسل صاحب العقار
                <i className="fa-brands fa-facebook-messenger mx-2"></i>
              </button>
              <Link className="btn btn-outline-dark"> جميع اعلانات صاحب العقار </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
