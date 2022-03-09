import { Image, Button } from "antd";
import React from "react";
import SocialIcons from "../../other/SocialIcons";
import PostDetailComment from "./elements/PostDetailComment";

function PostDetailContent({ data }) {
  return (
    <div className="post-detail-content">
      <div className="post-detail-content__main">
        <h1 className="post-detail-title">{data.title} </h1>
        <Image
          className="post-detail-image"
          width="100%"
          title={data.title}
          src={process.env.PUBLIC_URL + "/assets/images/blog/blog-detail/1.png"}
          alt="Post detail image"
          placeholder
        />
        <p className="post-detail-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure Lorem ipsum dolor sit
          amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in.
        </p>
        <h3 className="post-detail-subtitle">
          You Can Buy For Less Than A College Degree
        </h3>
        <p className="post-detail-paragraph">
          Degree Dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident.
        </p>
        <Image
          className="post-detail-image"
          width="100%"
          title="The Personality Trait That Makes People Happier"
          src={process.env.PUBLIC_URL + "/assets/images/blog/blog-detail/2.png"}
          alt="Post detail image"
          placeholder
        />
        <p className="post-detail-paragraph">
          Aboris nisi ut aliquip ex ea commodo consequat. Duis aute irure Lorem
          ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in
        </p>
        <p className="post-detail-paragraph">
          Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo conslaboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure Lorem ipsum dolor sit amet, consectetur
          adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim ve niam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in datat non proident, sunt in. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
          id est laborum. Sed ut perspiciatis unde omnis iste natus error sit
          volupt atem accusantium doloremque laudantium, totam rem aperiam,
          eaque ipsa quae ab illo inventore veritatis dicta sunt explicabo.
        </p>
      </div>
      <div className="post-detail-content__footer">
        <div className="post-detail-content__footer-tags">
          {data.tag.map((item, index) => (
            <Button key={index}>{item}</Button>
          ))}
        </div>
        <div className="post-detail-content__footer-share">
          <span>Share:</span>
          <SocialIcons />
        </div>
      </div>
      <PostDetailComment data={data.comments} />
    </div>
  );
}

export default React.memo(PostDetailContent);
