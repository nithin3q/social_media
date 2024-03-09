import React, { useState, useEffect } from "react";
import image from "../../assets/bg.jpg";
import "../styles/Home.css"; // Import your CSS files
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import Timeline from "./Timeline";
import NavBar from "./Navbar";
import Navbar2 from "./Navbar2";
import { BsBook, BsBookHalf, BsPeople, BsBriefcase } from "react-icons/bs";
import logo from "../../assets/1.png";
import logo2 from "../../assets/2.png";
import logo3 from "../../assets/3.png";
import logo4 from "../../assets/8.png";
import logo5 from "../../assets/1bg.png";
import logo6 from "../../assets/2bg.png";
import logo7 from "../../assets/3bg.png";

function Home({ handleNavContainerPosition }) {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("All Posts");

  useEffect(() => {
    // Fetch posts from an API or set them directly
    const fetchedPosts = [
      {
        user: "redian_",
        postImage: logo5,
        genre: "Article",
        title: "What if famous brands had regular fonts? Meet RegulaBrands",
        answer:
          "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
        logo: logo,
      },
      {
        user: "johndoe",
        postImage: logo6,
        genre: "Education",
        title:
          "Tax Benefits for Investment under National Pension Scheme launched by Government",
        answer:
          "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
        logo: logo2,
      },
      {
        user: "mariussss",
        postImage: logo7,
        genre: "Meetup",
        title: "Finance & Investment Elite Social Mixer @Lujiazui",
        answer: "Fri, 12 Oct, 2018 Ahmedabad, India",
        logo: logo3,
      },
      {
        user: "kobee_18",
        postImage: "",
        genre: "Job",
        title: "Software Developer",
        answer: "Innovaccer Analytics Private Ltd. Noida, India",
        logo: logo4,
      },
    ];
    setPosts(fetchedPosts);
    // Set "All Posts" as the default selected genre
    setSelectedGenre("All Posts");
  }, []);

  useEffect(() => {
    filterPostsByGenre(selectedGenre);
  }, [selectedGenre, posts]);

  const filterPostsByGenre = (genre) => {
    if (genre === "All Posts") {
      setFilteredPosts(posts);
    } else {
      const filtered = posts.filter((post) => post.genre === genre);
      setFilteredPosts(filtered);
    }
  };

  const handleGenreClick = (genre) => {
    setSelectedGenre(genre);
  };

  const genreIcons = {
    Article: <BsBook />,
    Education: <BsBookHalf />,
    Meetup: <BsPeople />,
    Job: <BsBriefcase />,
  };

  return (
    <div>
      <div className="containers " >
        <img className="imgs" src={image} alt="image" />
        <div className="overlay">
          <div className="text-overlay">
            <h2>Computer Engineering</h2>
            <p>142,765 Computer Engineers follow this</p>
          </div>
        </div>
      </div>
      <div className={`nav-items-container containerss bg-white d-none d-sm-block d-flex`}>
        <ul className="nav-items">
          <li className={`nav-item kumar ${selectedGenre === "All Posts" ? 'active' : ''}`} onClick={() => handleGenreClick("All Posts")}>
            All Posts(32)
          </li>
          <li className={`nav-item ${selectedGenre === "Article" ? 'active' : ''}`} onClick={() => handleGenreClick("Article")}>
            Article
          </li>
          <li className={`nav-item ${selectedGenre === "Event" ? 'active' : ''}`} onClick={() => handleGenreClick("Event")}>
            Event
          </li>
          <li className={`nav-item ${selectedGenre === "Education" ? 'active' : ''}`} onClick={() => handleGenreClick("Education")}>
            Education
          </li>
          <li className={`nav-item ${selectedGenre === "Job" ? 'active' : ''}`} onClick={() => handleGenreClick("Job")}>
            Job
          </li>
          <button className="nav-button nithin">Write a Post <FontAwesomeIcon icon={faCaretDown} /></button> &nbsp;
          <button className="nav-button kumars">Join Group</button>
        </ul>
         <hr className="hr-line"/>
      </div>
      <div>
      <ul className="nav-items d-lg-none d-xs-block bg-white">
          <li className="nav-item  kumar">Posts(368)</li>
          <button className="nav-button nithin">Filter <FontAwesomeIcon icon={faCaretDown} /></button> &nbsp;
      </ul>
      </div>
      <Timeline posts={filteredPosts} genreIcons={genreIcons} />
    </div>
  );
}
export default Home;
