const ComponentLayout = ({ children, classname = '' }) => {
    return (
        <div className="w-full">
            <div className={`mx-auto max-w-screen-1920 w-full ${classname}`}>
                {children}
            </div>
        </div>
    );
};

export default ComponentLayout;
