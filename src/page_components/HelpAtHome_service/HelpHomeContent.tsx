import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { HelpAtHomeForm } from "./HelpAtHomeForm";
import { Footer } from "@/src/components/common";

export const HelpHomeContent = () => {
  const router = useRouter();
  const { service } = router.query;

  const services = [
    { name: "Help at Home", slug: "help-at-home" },
    { name: "Nurse at Home", slug: "nurse-at-home" },
    { name: "Live-in Care", slug: "live-in-care" },
  ];

  const helpWith = [
    "Bedside care",
    "Bathing, dressing and grooming",
    "Feeding",
    "Range of motion exercise",
    "Medication assistance",
    "Walking and transferring",
  ];

  return (
    <>
      <div className="service-single py-120">
        <div className="container">
          <div className="service-single-wrap">
            <div className="row">
              <div className="col-xl-4 col-lg-4">
                <div className="service-sidebar">
                  <div className="widget">
                    <h4 className="title">Home Care Services</h4>
                    <div className="category">
                      {services
                        .filter((item) => item.slug !== service)
                        .map((service) => (
                          <>
                            <Link href={`/home_care_service/${service.slug}`}>
                              <i className="fa fa-angle-double-right"></i>
                              {service.name}
                            </Link>
                          </>
                        ))}
                    </div>
                  </div>
                  <div className="widget">
                    <h4 className="title">Ask A Question</h4>
                    <div className="service-downloa">
                      <span className="">
                        Have a question about Personal Home Care? We are Here to
                        help.
                      </span>
                      <h3 className="mb-3 mt-3">
                        Call Us:
                        <br />
                        <a href="tel:+905470-4000">(905) 470-4000</a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-8 col-lg-8">
                <div className="service-details">
                  <div className="mb-30">
                    <Image
                      src="/assets/img/service/single.jpg"
                      height={600}
                      width={900}
                      alt="thumb"
                    />
                  </div>
                  <div className="content">
                    <h3 className="mb-20">Personal In‑Home Care</h3>
                    <p className="mb-20">
                      Our personal in‑home care program offers you a range of
                      customized services designed to meet you or loved one’s
                      individual needs, allowing our clients to remain in their
                      own home or environment of choice with as much
                      independence as possible. Our staff are passionate about
                      what they do and treat our clients with the utmost dignity
                      and respect.
                    </p>
                    <p className="mb-20">
                      Our approach to home support provides you or your loved
                      one with the level of care that is designed to help every
                      client meet their goals. Knowing you can count on
                      individualized, reliable assistance and support with
                      in‑home health care makes life easier for clients and
                      family caregivers alike.
                    </p>
                    <p className="mb-20">
                      WellNest personal home support services are available for
                      clients of all ages, across a wide spectrum of life
                      stages. Our home support team is highly trained and has
                      the expertise required to ensure that you or your loved
                      one receives the best in‑home health care.
                    </p>
                    <p className="mb-20">
                      We focus on achievement and daily victories by making
                      empathy and encouragement a part of every home visit. It’s
                      passion with a sense of purpose and this is the foundation
                      of our approach to home health care. Our clients have
                      special stories to tell – about how we offer assistance
                      with personal activities of daily living such as bathing,
                      grooming, dressing, eating, mobility, personal bathroom
                      needs, and medication assistance.
                    </p>
                    <p className="mb-20">
                      To ensure that our clients receive the right type of
                      service and the care delivered by the right level of
                      staff, all clients receive an initial comprehensive and
                      complimentary assessment that is completed by a WellNest
                      Nurse.
                    </p>
                    <div className="my-4 ">
                      <div className="mb-3">
                        <h3 className="mb-3">We Help You With:</h3>
                        <div className="row">
                          {helpWith.map((item) => (
                            <>
                              <div className="col-md-6 mb-20">
                                <p className="mb-20">
                                  <i className="fa-solid fa-check-double mx-2"></i>
                                  {item}
                                </p>
                              </div>
                            </>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h3 className="mb-3">Remarkable Moments</h3>
                      <p>
                        Good things are happening everyday at ParaMed. Whether
                        it’s a brief encounter or a life changing event, we do
                        everything we can to bring a remarkable moment into the
                        homes of Canadians across the country daily.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <HelpAtHomeForm />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
