import React, { useState, useEffect, useRef } from "react";
import "./Home.scss";
import HomeSidebar from "../../components/Sidebar/HomeSidebar";
import { BiSearch } from "react-icons/bi";
import { FiDelete } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import HomeHeader from "../../components/HomeHeader/HomeHeader";
import ProjectPanel from "../../components/ProjectPanel/ProjectPanel";

const Home = () => {
    const [selectMenu, setSelectMenu] = useState(false);

    useEffect(() => {
        window.addEventListener("click", handleSelectMenu, true);
    }, []);

    const refClickHandler = useRef(null);

    const handleSelectMenu = (e) => {
        if (!refClickHandler.current.contains(e.target)) {
            setSelectMenu(false);
        } else {
            setSelectMenu(!selectMenu);
        }
    };

    return (
        <div className="home-page">
            <HomeSidebar />
            <div className="home-page-container">
                <HomeHeader />
                <div
                    style={{
                        borderBottom: "2px solid #eeeeee",
                        margin: "15px 10px",
                    }}
                />
                <div className="home-filter">
                    <div className="search-sort">
                        <div className="home-search-bar">
                            <BiSearch className="icon" />
                            <input
                                className="input"
                                type="text"
                                placeholder="Tìm kiếm"
                            />
                            <button>
                                <FiDelete />
                            </button>
                        </div>
                        <div className="home-sort">
                            <label>Sắp xếp theo:</label>
                            <div className="select" ref={refClickHandler}>
                                Dạng lưới
                                <MdKeyboardArrowDown className="select-arrow" />
                                <div
                                    className="select-options"
                                    style={
                                        !selectMenu
                                            ? { transform: "scaleY(0)" }
                                            : {}
                                    }
                                >
                                    <ul>
                                        <li className="option">Dạng lưới</li>
                                        <li className="option">
                                            Dạng danh sách
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="add-project-button">
                        <span>Thêm dự án mới</span>
                        <AiOutlineAppstoreAdd />
                    </div>
                </div>
                <div
                    style={{
                        borderBottom: "2px solid #eeeeee",
                        margin: "15px 10px",
                    }}
                />
                <ProjectPanel />
            </div>
        </div>
    );
};

export default Home;
