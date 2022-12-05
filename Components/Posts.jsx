
import Image from "next/image";
import styles from "../styles/Posts.module.css";
import { MdHomeFilled } from "react-icons/md";
// import { IoPaperPlaneOutline } from 'react-icons/io';
import { SlPaperPlane } from "react-icons/sl";
import { BsPlusSquare } from "react-icons/bs";
import { MdOutlineExplore } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import { RxDotsHorizontal } from "react-icons/rx";
import { FaRegComment } from "react-icons/fa";
import { GrBookmark } from "react-icons/gr";

const Posts = () => {
  return (
    <>
      <section className={styles.posts}>
        <div className={styles.post_header}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "3px",
              fontSize: "14px",
            }}
          >
            <Image
              src="/Posts/img/dp.jpg"
              width={40}
              height={40}
              style={{ borderRadius: "50%" }}
            />
            <span>HamzaBinShahzad</span>
          </div>

          <div>
            <RxDotsHorizontal />
          </div>
        </div>
        <Image src="/Posts/img/p1.jfif" width={497} height={497} />
        <div className={styles.icons}>
          <div style={{ display: "flex", gap: "10px", fontSize: "20px" }}>
            <FiHeart />
            <FaRegComment />
            <SlPaperPlane />
          </div>
          <div style={{ fontSize: "20px" }}>
            <GrBookmark />
          </div>
        </div>
        <span style={{ paddingLeft: "10px", fontSize: "12px" }}>44,156 likes</span>
        <br />
        <span style={{ paddingLeft: "10px", fontSize: "12px" }}>You can regret a lot of things but you'll never regret being kind.</span>
        <br></br>
        <span style={{ paddingLeft: "10px", fontSize: "12px", color: "#8b8585" }}>View all Comments</span>
        <br></br>
        <span style={{ paddingLeft: "10px", paddingTop: "5px", fontSize: "10px", color: "#8b8585" }}>10 HOUR AGO</span>
      </section>
    </>
  )
}

export default Posts;
