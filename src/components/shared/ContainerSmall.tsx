import React from "react";

const ContainerSmall: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="md:max-w-[900px] max-w-screen-md mx-auto px-5">
            {children}
        </div>
    );
};

export default ContainerSmall;