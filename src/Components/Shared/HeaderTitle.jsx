/* eslint-disable react/prop-types */
const HeaderTitle = ({ title }) => {
  return (
    <div className="text-center text-2xl md:text-3xl lg:text-5xl my-5 w-2/3 mx-auto">
      <p className="py-3 border-2  border-pink-100 font-extrabold  text-sky-500 shadow-md  rounded-2xl ">
        {title}
      </p>
    </div>
  );
};

export default HeaderTitle;
