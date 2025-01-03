const WelcomeText = () => {
  return (
    <div className="container py-12 md:py-16 lg:py-20 mx-auto">
      <div className="items-center justify-center mx-auto">
        <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-center">
          Welcome To Neukod{" "}
        </h2>
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-center text-blue-800">
          Accelerate Your Future
        </h1>

        <hr className="w-48 h-1 mx-auto my-4 bg-blue-400 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
        <p className="text-sm md:text-base lg:text-lg text-center text-wrap px-10 md:px-24 py-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          rutrum nunc pellentesque, tempor nulla ac, faucibus neque. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Maecenas eu sapien
          tristique, pellentesque enim et, finibus lacus. Curabitur neque
          ligula, molestie ut maximus maximus, ultrices eu lorem. Curabitur eu
          condimentum magna. Duis arcu lorem, gravida nec rutrum a, molestie in
          lacus. Nullam sollicitudin et nisi at viverra. Nam sagittis ante non
          sem pellentesque, sit amet tincidunt sapien elementum. Duis vulputate
          volutpat leo non iaculis. Donec feugiat fermentum quam eget tempor.
          Nulla tellus felis, rutrum malesuada odio eget, pretium gravida
          lectus. Vivamus dictum dignissim turpis eget suscipit.
        </p>
      </div>
    </div>
  );
};
export default WelcomeText;
