function Header() {
    return (
        <>
            <div className="container-fluid bg-dark p-2">
                <div className="row">
                    <div className="col-3 offset-1 text-light">
                        <h1>SPACELINX</h1>
                    </div>
                    <div className="col-3 offset-1 text-light">
                        <input id="inp" className="w-75 h-50 mt-3 ps-3 rounded-4" placeholder="search..." />
                    </div>
                    <div className="col-3 offset-1 text-light">
                        <div className="row">
                            <div id="bell" className="col-2 offset-1 ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bell-fill mt-3" viewBox="0 0 16 16">
                                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
                                </svg>
                            </div>
                            <div className="col-2 offset-1  ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-circle mt-3 " viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                                </svg>
                            </div>
                            <div id="text" className="col-3 offset-1 ">
                               <p> Hello,  Jaswanth</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;