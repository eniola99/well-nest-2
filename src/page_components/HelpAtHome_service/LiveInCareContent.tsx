import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

export const LiveInCareContent = () => {
  const router = useRouter();
  const { service } = router.query;

  const services = [
    { name: "Help at Home", slug: "help-at-home" },
    { name: "Nurse at Home", slug: "nurse-at-home" },
    { name: "Live-in Care", slug: "live-in-care" },
  ];

  return (
    <>
      <div className="blog-single py-120">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8">
              <div className="blog-single-wrap">
                <div className="blog-single-content">
                  <div className="blog-thumb-Image">
                    <Image
                      src="/assets/img/service/single.jpg"
                      height={600}
                      width={900}
                      alt="thumb"
                    />
                  </div>
                  <div className="blog-info mt-3">
                    <div className="blog-details">
                      <h3 className="blog-details-title mb-20">
                        It is a long established fact that a reader
                      </h3>
                      <p className="mb-10">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut
                        odit aut fugit, sed quia consequuntur magni dolores eos
                        qui ratione voluptatem sequi nesciunt. Neque porro
                        quisquam est, qui dolorem ipsum quia dolor sit amet,
                        consectetur, adipisci velit, sed quia non numquam eius
                        modi tempora incidunt ut labore et dolore magnam aliquam
                        quaerat voluptatem.
                      </p>
                      <p className="mb-10">
                        But I must explain to you how all this mistaken idea of
                        denouncing pleasure and praising pain was born and I
                        will give you a complete account of the system, and
                        expound the actual teachings of the great explorer of
                        the truth, the master-builder of human happiness. No one
                        rejects, dislikes, or avoids pleasure itself, because it
                        is pleasure, but because those who do not know how to
                        pursue pleasure rationally encounter consequences that
                        are extremely painful.
                      </p>
                      <blockquote className="blockqoute">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using orem psum is
                        that it has a more-or-less the majority have suffered
                        alteration normal distribution.
                        <h6 className="blockqoute-author">Mark Crawford</h6>
                        <i className="fal fa-quote-right blockqoute-icon"></i>
                      </blockquote>
                      <p className="mb-20">
                        In a free hour when our power of choice is untrammelled
                        and when nothing prevents our being able to do what we
                        like best, every pleasure is to be welcomed and every
                        pain avoided. But in certain circumstances and owing to
                        the claims of duty or the obligations of business it
                        will frequently occur that pleasures have to be
                        repudiated and annoyances accepted. The wise man
                        therefore always holds in these matters to this
                        principle of selection.
                      </p>

                      <div className="row">
                        <div className="col-md-6 mb-20">
                          <Image
                            src="/assets/img/service/single.jpg"
                            height={600}
                            width={900}
                            alt="thumb"
                          />
                        </div>
                        <div className="col-md-6 mb-20">
                          <Image
                            src="/assets/img/service/single.jpg"
                            height={600}
                            width={900}
                            alt="thumb"
                          />
                        </div>
                      </div>
                      <p className="mb-20">
                        Power of choice is untrammelled and when nothing
                        prevents our being able to do what we like best, every
                        pleasure is to be welcomed and every pain avoided. But
                        in certain circumstances and owing to the claims of duty
                        or the obligations of business it will frequently occur
                        that pleasures have to be repudiated and annoyances
                        accepted. The wise man therefore always holds in these
                        matters to this principle of selection.
                      </p>
                      <hr />
                      <div className="blog-details-tag pb-20">
                        <h5>Tags : </h5>
                        <ul>
                          <li>
                            <Link href="#">Senior</Link>
                          </li>
                          <li>
                            <Link href="#">Elderly</Link>
                          </li>
                          <li>
                            <Link href="#">Care</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
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
          </div>
        </div>
      </div>
    </>
  );
};
