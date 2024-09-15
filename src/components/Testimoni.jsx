import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimoni = () => {
  const testimonials = [
    {
      name: "Bessie Cooper",
      role: "Creative Director",
      image: "/testi1.png",
      companyLogo: "/logotesti.png",
      rating: 5,
      testimonial:
        "“Mauris eget lorem odio. Mauris convallis justo molestie metus aliquam lacinia. Suspendisse ut dui vulputate augue condimentum ornare. Morbi vitae tristique ante”",
    },
    {
      name: "Marvin McKinney",
      role: "Product Manager",
      image: "/testi1.png",
      companyLogo: "/logotesti.png",
      rating: 5,
      testimonial:
        "“Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam ac erat lectus. Nam egestas urna nec ligula auctor.”",
    },
    {
      name: "Ralph Edwards",
      role: "Software Engineer",
      image: "/testi1.png",
      companyLogo: "/logotesti.png",
      rating: 5,
      testimonial:
        "“Curabitur at leo et felis imperdiet varius sit amet vel massa. Etiam vehicula condimentum felis, sit amet mollis lorem.”",
    },
    // Tambahkan lebih banyak testimonial jika diperlukan
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
  };

  return (
    <div className="w-full h-[552px] flex flex-col items-center justify-center">
      <h1 className="text-[#18191C] text-[32px] font-[500]">
        Clients Testimonial
      </h1>

      <Slider {...settings} className="w-full max-w-[1000px]">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="w-full flex justify-center items-center px-2 my-8"
          >
            <div className="w-full  h-[250px] flex flex-col justify-between bg-white p-5 rounded-lg ">
              <div className="flex flex-col">
                {/* bintang */}
                <div className="flex items-center gap-1">
                  {Array(testimonial.rating)
                    .fill(0)
                    .map((_, i) => (
                      <img
                        key={i}
                        className="w-5"
                        src="/rating.png"
                        alt="Rating"
                      />
                    ))}
                </div>
                <div className="mt-4">
                  <p className="text-[#464D61] text-[14px]">
                    {testimonial.testimonial}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    className="rounded-full w-[38px] h-[38px]"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                  <div className="flex flex-col ml-4">
                    <p className="text-[#191F33] text-[14px]">
                      {testimonial.name}
                    </p>
                    <p className="text-[#767E94] text-[12px]">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <img
                  className="w-6"
                  src={testimonial.companyLogo}
                  alt="Company Logo"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimoni;
