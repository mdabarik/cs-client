

const Home = () => {
    return (
        <div className="flex flex-col md:flex-row my-10 p-5">
            <div className="flex flex-col flex-[1] space-y-4">
                <h1 className="text-5xl">Quality Cleaning for Your Home</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam expedita voluptates cupiditate sed quos tempore illum quidem ex! Pariatur nostrum porro vel aspernatur repellat adipisci!</p>
                <div>
                    <button className="btn btn-primary">Book a Service</button>
                    <button className="btn btn-ghost">Read More</button>
                </div>
                <div className="divider">
                    <div className="avatar-group -space-x-6">
                        <div className="avatar">
                            <div className="w-12">
                                <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&q=80&w=1331&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                            </div>
                        </div>
                        <div className="avatar">
                            <div className="w-12">
                                <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&q=80&w=1331&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                            </div>
                        </div>
                        <div className="avatar">
                            <div className="w-12">
                                <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&q=80&w=1331&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                            </div>
                        </div>
                        <div className="avatar">
                            <div className="w-12">
                                <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&q=80&w=1331&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-[1]">
                <img src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
        </div>
    );
};

export default Home;