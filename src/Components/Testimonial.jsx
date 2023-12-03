import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Testimonial = () => {
  return (
    <div>
      <div className="">
        <Carousel
          className="py-5 text-black"
          infiniteLoop={true}
          showThumbs={false}
          swipeable={true}
        >
          {/* First */}
          <div className="text-center">
            <div className=" ">
              {/* first person */}
              <div className="  ">
                <div className=" avatar w-36 md:w-48 h-36 md:h-48">
                  <img
                    className="  rounded-full"
                    src="https://i.ibb.co/qDTg8fy/t.jpg
                    "
                    alt=""
                  />
                </div>
                <div className="">
                  <p className="font-medium text-xl">Mr. p</p>
                  <div className="rating flex rating-sm mb-2 justify-center ">
                    <input
                      type="radio"
                      disabled
                      className="mask mask-star-2 "
                    />
                    <input
                      type="radio"
                      disabled
                      className="mask mask-star-2 "
                    />
                    <input
                      type="radio"
                      disabled
                      className="mask mask-star-2 "
                    />
                    <input
                      type="radio"
                      disabled
                      checked
                      className="mask mask-star-2 "
                    />
                    <input
                      type="radio"
                      disabled
                      className="mask mask-star-2 "
                    />
                  </div>
                  <p className="w-1/2 mx-auto">
                    Exceptional software! It streamlined our operations,
                    enhancing productivity while ensuring top-notch security.
                    Highly recommend!
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Second */}
          <div className="text-center">
            {/* second person */}
            <div className="">
              <div className="avatar w-36 md:w-48 h-36 md:h-48">
                <img
                  className="rounded-full"
                  src="https://i.ibb.co/3CftXHM/r.jpg
                  "
                  alt=""
                />
              </div>
              <div className="text-center">
                <p className="font-medium text-xl">Ms. Mi</p>
                <div className="rating flex rating-sm mb-2 justify-center">
                  <input type="radio" disabled className="mask mask-star-2 " />
                  <input type="radio" disabled className="mask mask-star-2 " />
                  <input type="radio" disabled className="mask mask-star-2 " />
                  <input type="radio" disabled className="mask mask-star-2 " />
                  <input
                    type="radio"
                    disabled
                    checked
                    className="mask mask-star-2 "
                  />
                </div>
                <p className="w-1/2 mx-auto">
                  Reliable and intuitive software that exceeded our
                  expectations. Its user-friendly interface and robust features
                  transformed our business.
                </p>
              </div>
            </div>
          </div>
          {/* Third */}
          <div className="text-center">
            {/* third person */}
            <div className="">
              <div className="avatar w-36 md:w-48 h-36 md:h-48 ">
                <img
                  className=" rounded-full"
                  src="https://i.ibb.co/qDTg8fy/t.jpg
                  "
                  alt=""
                />
              </div>
              <div className="text-center">
                <p className="font-medium text-xl">Mr. Ri</p>
                <div className="rating flex rating-sm mb-2 justify-center">
                  <input type="radio" disabled className="mask mask-star-2 " />
                  <input
                    type="radio"
                    disabled
                    checked
                    className="mask mask-star-2 "
                  />
                  <input type="radio" disabled className="mask mask-star-2 " />
                  <input type="radio" disabled className="mask mask-star-2 " />
                  <input type="radio" disabled className="mask mask-star-2 " />
                </div>
                <p className="w-1/2 mx-auto">
                  Outstanding customer support and a feature-rich software
                  solution. Seamless integration and constant updates keep us
                  ahead in the game
                </p>
              </div>
            </div>
          </div>
          {/* Fourth */}
          <div className="text-center">
            {/* fourth person */}
            <div className="">
              <div className="avatar w-36 md:w-48 h-36 md:h-48">
                <img
                  className="rounded-full"
                  src="https://i.ibb.co/3CftXHM/r.jpg"
                  alt=""
                />
              </div>
              <div className="text-center">
                <p className="font-medium text-xl">Ms. An</p>
                <div className="rating flex rating-sm mb-2 justify-center">
                  <input type="radio" disabled className="mask mask-star-2 " />
                  <input type="radio" disabled className="mask mask-star-2 " />
                  <input
                    type="radio"
                    disabled
                    checked
                    className="mask mask-star-2 "
                  />
                  <input type="radio" disabled className="mask mask-star-2 " />
                  <input type="radio" disabled className="mask mask-star-2 " />
                </div>
                <p className="w-1/2 mx-auto">
                  The software is a game-changer! Its versatility and
                  scalability have been pivotal in our growth, simplifying
                  complex tasks effortlessly.
                </p>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonial;
