import React from "react";

const Navbar = () => {
  return (
    <div className="w-9/12 mx-auto">
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="text-[rgba(17,17,17,1)] text-3xl md:text-4xl font-bold leading-[160%] text-left">Knowledge Cafe</a>
        </div>
        <div className="flex gap-2">
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
              <img src="https://cmmodels.co.uk/wp-content/uploads/2025/02/cover-yasmin-zitman-female-model-dark-blond-hair-blue-eyes-studio-shooting-white-background-black-dress-open-hair-socks-.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
