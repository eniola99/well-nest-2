import React, { useState, useEffect, useCallback } from "react";
import { FormGroup, Input, Label } from "reactstrap";
import { toast } from "react-toastify";
import { Spinner, List } from "reactstrap";

import { validateText, validateEmail } from "@/src/utils/common";

interface IFormData {
  name: string | undefined;
  email: string | undefined;
  number: string | undefined;
  method: string | undefined;
  service: string | undefined;
  location: string | undefined;
  comments: string | undefined;
}
const initialFormData: IFormData = {
  name: "",
  email: "",
  number: "",
  method: "",
  service: "",
  location: "",
  comments: "",
};

export const ContactPageContent = () => {
  const [formData, setFormData] = useState<IFormData>(initialFormData);
  const [errors, setErrors] = useState<IFormData>(initialFormData);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isLoading, setIsloading] = useState<boolean>(false);

  const serviceOptions = ["Wellnest Homecare", "WellWheels", "General"];

  const handleChange = (value: string, attr: string) => {
    setFormData((prevState) => ({
      ...prevState,
      [attr]: value,
    }));
  };

  const validateFields = (fields: IFormData) => ({
    name: validateText(fields.name || "", "Name"),
    email: validateEmail(fields.email || ""),
    number: validateText(fields.number || "", "Phone Number"),
    method: validateText(fields.method || "", "Preferred Method of Contact"),
    service: validateText(fields.service || "", "Primary Need"),
    location: validateText(fields.location || "", "Location"),
    comments: validateText(fields.comments || "", "Comments"),
  });

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setErrors(validateFields(formData));
  };

  const sendRequest = useCallback(async (form: IFormData) => {
    setIsloading(true);
    const formData = new FormData();

    // Append text fields
    formData.append("name", form.name!);
    formData.append("email", form.email!);
    formData.append("number", form.number!);
    formData.append("method", form.method!);
    formData.append("service", form.service!);
    formData.append("location", form.location!);
    formData.append("comments", form.comments!);

    const response = await fetch("/api/service/request", {
      method: "POST",
      body: formData,
    });

    const initData = await response.json();
    console.log({ initData });
    if (initData.status === 200) {
      toast.success(initData.message);
      setIsloading(false);
      setFormData(initialFormData);
      setIsChecked(false);
    } else {
      toast.error("Failed to send application, Try again");
      setIsloading(false);
      setFormData(initialFormData);
      setIsChecked(false);
    }
  }, []);

  useEffect(() => {
    if (
      isChecked &&
      Object.values(errors).every((error) => error === undefined)
    ) {
      sendRequest(formData);
    }
  }, [errors, sendRequest, isChecked, formData]);

  console.log({ formData, isChecked, errors });

  return (
    <div className="contact-area py-120">
      <div className="container">
        <div className="contact-content">
          <div className="row">
            <div className="col-md-3">
              <div className="contact-info">
                <div className="icon">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="content">
                  <h5>Office Address</h5>
                  <p>23, Richard William Drive, Caledonia, ON N3W 0C5</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="contact-info">
                <div className="icon">
                  <i className="fa-solid fa-phone-volume"></i>
                </div>
                <div className="content">
                  <h5>Call Us</h5>
                  <p>+2.....</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="contact-info">
                <div className="icon">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div className="content">
                  <h5>Email Us</h5>
                  <p>support@wellnestgroup.org</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="contact-info">
                <div className="icon">
                  <i className="fa-solid fa-alarm-clock"></i>
                </div>
                <div className="content">
                  <h5>Business Hours</h5>
                  <p>09:00am - 05:00pm (EST)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="contact-form-wrap">
              <div className="g-4">
                <div className="">
                  <div className="contact-form">
                    <div className="contact-form-header">
                      <h4>
                        Contact us for a free consultation or general enquiry.
                      </h4>
                    </div>
                    <form
                      method="post"
                      action="/senocare/assets/php/contact.php"
                      id="contact-form"
                    >
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <div className="form-icon">
                              <i className="fa-solid fa-user-tie"></i>
                              <input
                                type="text"
                                autoComplete="off"
                                value={formData.name}
                                onChange={(e) =>
                                  handleChange(e.target.value, "name")
                                }
                                className="form-control"
                                name="name"
                                placeholder="Your Name"
                                required
                              />
                            </div>
                            {errors.name && (
                              <span className="error-text">{errors.name}</span>
                            )}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <div className="form-icon">
                              <i className="fa-solid fa-envelope"></i>
                              <input
                                type="email"
                                autoComplete="off"
                                value={formData.email}
                                onChange={(e) =>
                                  handleChange(e.target.value, "email")
                                }
                                className="form-control"
                                name="email"
                                placeholder="Your Email"
                                required
                              />
                            </div>
                            {errors.email && (
                              <span className="error-text">{errors.email}</span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <div className="form-icon">
                              <i className="fa-solid fa-phone"></i>
                              <input
                                type="text"
                                autoComplete="off"
                                value={formData.number}
                                onChange={(e) =>
                                  handleChange(e.target.value, "number")
                                }
                                className="form-control"
                                name="number"
                                placeholder="Phone number"
                                required
                              />
                            </div>
                            {errors.number && (
                              <span className="error-text">
                                {errors.number}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <div className="form-icon">
                              <i className="fa-solid fa-book"></i>
                              <input
                                type="text"
                                autoComplete="off"
                                value={formData.method}
                                onChange={(e) =>
                                  handleChange(e.target.value, "method")
                                }
                                className="form-control"
                                name="method"
                                placeholder="Preferred method contact"
                                required
                              />
                            </div>
                            {errors.method && (
                              <span className="error-text">
                                {errors.method}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <select
                          name="service"
                          className="form-control"
                          required
                          value={formData.service}
                          onChange={(e) =>
                            handleChange(e.target.value, "service")
                          }
                        >
                          <option value="">Primary Need</option>
                          {serviceOptions.map((serviceOption) => (
                            <option key={serviceOption} value={serviceOption}>
                              {serviceOption}
                            </option>
                          ))}
                        </select>
                        {errors.service && (
                          <span className="error-text">{errors.service}</span>
                        )}
                      </div>
                      <div className="form-group">
                        <div className="form-icon">
                          <i className="fa-solid fa-location-arrow"></i>
                          <input
                            type="text"
                            autoComplete="off"
                            value={formData.location}
                            onChange={(e) =>
                              handleChange(e.target.value, "location")
                            }
                            className="form-control"
                            name="location"
                            placeholder="Location"
                            required
                          />
                        </div>
                        {errors.location && (
                          <span className="error-text">{errors.location}</span>
                        )}
                      </div>
                      <div className="form-group">
                        <div className="form-icon">
                          <i className="fa-solid fa-comment"></i>
                          <textarea
                            name="comments"
                            value={formData.comments}
                            onChange={(e) =>
                              handleChange(e.target.value, "comments")
                            }
                            cols={30}
                            rows={5}
                            className="form-control"
                            placeholder="Comments"
                            required
                          ></textarea>
                        </div>
                        {errors.comments && (
                          <span className="error-text">{errors.comments}</span>
                        )}
                      </div>
                      <div className="form-group">
                        <FormGroup check inline>
                          <Input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => setIsChecked(!isChecked)}
                          />
                          <Label>
                            I consent to have WellNest Health Group collect my
                            name, phone number, email and comments.
                          </Label>
                        </FormGroup>
                      </div>
                      <button
                        type="submit"
                        className="theme-btn"
                        onClick={handleSubmit}
                      >
                        {isLoading ? <Spinner size="sm" /> : "Submit"}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className="contact-form-wrap"
              style={{ minHeight: "400px", paddingTop: "40px" }}
            >
              <h4>Our Community Roots:</h4>
              <List type="unstyled">
                <li style={{ padding: "20px 0px" }}>
                  <strong>Hamilton</strong>
                  <ul style={{ marginLeft: "30px", listStyleType: "disc" }}>
                    <li>Ancaster</li>
                    <li>Dundas</li>
                    <li>Stoney Creek</li>
                    <li>Waterdown</li>
                    <li>Glanbrook</li>
                  </ul>
                </li>
                <li style={{ padding: "20px 0px" }}>
                  <strong>Haldimand</strong>
                  <ul style={{ marginLeft: "30px", listStyleType: "disc" }}>
                    <li>Caledonia</li>
                    <li>Cayuga</li>
                    <li>Dunnville</li>
                    <li>Hagersville</li>
                    <li>Jarvis</li>
                  </ul>
                </li>
                <li style={{ padding: "20px 0px" }}>
                  <strong>Niagara</strong>
                  <ul style={{ marginLeft: "30px", listStyleType: "disc" }}>
                    <li>Grimsby</li>
                    <li>Smithville</li>
                    <li>St. Catharines</li>
                    <li>Welland</li>
                    <li>Niagara Falls</li>
                  </ul>
                </li>
              </List>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
