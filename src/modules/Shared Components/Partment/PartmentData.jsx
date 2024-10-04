import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import prifile_img from "../../../assets/images.png";
import CreateIcon from "@mui/icons-material/Create";
import CloseIcon from "@mui/icons-material/Close";
export default function PartmentData() {
  const [age, setAge] = useState("");
  const [elevator, setElevator] = useState();
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleElevator = (e) => {
    setElevator(e.target.value);
  };
  const displaySelectedImage = (e) => {
    console.log(e.target.value);
  };

  return (
    <div
      style={{
        width: "85%",
        margin: "auto",
        textAlign: "right",
        direction: "rtl",
      }}
    >
      <h3 className="text-muted text-center"> Real State Create </h3>
      <div className="row">
        <form className="shadow col-lg-9 m-auto p-4">
          <div className="d-flex align-items-center my-2">
            <Box className="w-50 mx-2">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">نوع العقد</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="نوع العقد "
                  onChange={handleChange}
                >
                  <MenuItem value={10}>للبيع </MenuItem>
                  <MenuItem value={20}>للايجار </MenuItem>
                </Select>
              </FormControl>
            </Box>
            <TextField
              id="outlined-basic"
              label=" المساحه بالمتر"
              variant="outlined"
              className="w-50 mx-2"
              style={{ backgroundColor: " #87a1ff46" }}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="price" className="text-danger my-2 ">
              * السعر بالجنية
            </label>
            <input
              type="number"
              id="price"
              className="form-control w-100"
              style={{ backgroundColor: "#87a1ff46" }}
              placeholder="0 جنيه "
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="description" className="text-danger mb-2">
              * اضافه وصف للعقار
            </label>
            <textarea
              className="form-control textarea"
              id="description"
              rows="5"
              style={{ backgroundColor: "#87a1ff46" }}
              placeholder="مثال ( شقه مساحه 100متر الدور الخامس تتكون من ثلاثه غرف  نوم بالاضافه الى اوضه الصاله بالاضافه الى مضبخ وحمام )"
            ></textarea>
          </div>
          <div
            className="input-group flex-nowrap mb-3 w-100"
            style={{ width: "100%", backgroundColor: "#87a1ff46" }}
          >
            <div>
              <div data-mdb-ripple-init>
                <label
                  className="form-label text-white m-1"
                  htmlFor="customFile1"
                >
                  <img
                    id="selectedImage"
                    src={prifile_img}
                    alt="example placeholder"
                    style={{ width: "100%", height: "100%" }}
                  />
                </label>
                <input
                  type="file"
                  className="form-control d-none"
                  id="customFile1"
                  onChange={displaySelectedImage}
                />
              </div>
            </div>
          </div>
          <div
            className="input-group flex-nowrap mb-3 w-100"
            style={{ width: "100%", backgroundColor: "#87a1ff46" }}
          >
            <div data-mdb-ripple-init>
              <label
                className="form-label text-white m-1"
                htmlFor="customFile1"
              >
                <img
                  id="selectedImage"
                  src={prifile_img}
                  alt="example placeholder"
                  style={{ width: "100%", height: "100%" }}
                />
              </label>
              <input
                type="file"
                className="form-control d-none"
                id="customFile1"
                onChange={displaySelectedImage}
              />
            </div>
          </div>

          <Typography variant="h3" className="my-3">
            {" "}
            المرافق{" "}
          </Typography>
          <div className="d-flex mb-3 flex-wrap  ">
            <div className="w-50 mx-3 ">
              <label htmlFor="door" className="text-danger my-2 ">
                عدد الغرف الرءيسيه
              </label>
              <input
                type="number"
                id="door"
                className="form-control w-100 "
                placeholder="    عدد  الغرف الرءيسيه"
              />
            </div>
            <div className="w-50 mx-3 ">
              <label htmlFor="price" className="text-danger my-2 ">
                رقم الدور
              </label>
              <input
                type="number"
                className="form-control w-100  "
                placeholder="رقم الدور "
              />
            </div>
          </div>

          <div className="d-flex flex-wrap mb-3 ">
            <div className="w-50 mx-3 ">
              <label htmlFor="door" className="text-danger my-2 ">
                عدد الحمامات
              </label>
              <input
                type="number"
                id="door"
                className="form-control w-100 "
                placeholder=" عدد الحمامات"
              />
            </div>
            <div className="w-50 mx-3 ">
              <label htmlFor="price" className="text-danger my-2 ">
                عدد الصالات
              </label>
              <input
                type="number"
                className="form-control w-100  "
                placeholder="عدد الصالات "
              />
            </div>
          </div>

          <div className="d-flex flex-wrap mb-3">
            <div className="w-50 mx-3 mb-3 ">
              <label htmlFor="door" className="text-danger my-2 ">
                عدد المطابخ
              </label>
              <input
                type="number"
                id="door"
                className="form-control w-100 "
                placeholder=" عدد المطابخ "
              />
            </div>
            <div className="w-50 mx-3 mb-3">
              <InputLabel id="Elevator"> يوجد مصعد </InputLabel>
              <Select
                labelId="Elevator"
                id="demo-simple-select"
                value={elevator}
                label="يوجد مصعد "
                onChange={handleElevator}
                className="w-100"
              >
                <MenuItem value={true}> true </MenuItem>
                <MenuItem value={false}> false </MenuItem>
              </Select>
            </div>
          </div>

          <div
            className="btns mt-5"
            style={{ textAlign: "center", display: "flex" }}
          >
            <Button
              variant="outlined"
              className="mx-3"
              startIcon={<CreateIcon className="mx-2" />}
            >
              Create
            </Button>
            <Button
              variant="contained"
              color="error"
              className="mx-3"
              startIcon={<CloseIcon className="mx-2" />}
            >
              Close
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
