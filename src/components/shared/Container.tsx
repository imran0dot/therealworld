import React from "react";

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="md:max-w-screen-xl max-w-screen-md mx-auto px-5">
            {children}
        </div>
    );
};

export default Container;